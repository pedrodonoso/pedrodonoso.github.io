---
title: Larga travesía con Nuxt-Content
subtitle:
description: Imprevistos encontrados al realizar este sitio. Un relato angustiante y estremecedor.
tags: ["NuxtJS", "Nuxt-Content", "Tailwind"]
date: 29-03-2024
---

# Larga travesía con Nuxt-Content

![MOBILE](/portafolio/bugs/portada.png){ width="600" height="300" style="display: block; margin: 0 auto" }

Cuando comencé a integrar Nuxt-Content a este proyecto, se me ocurrió una excelente idea para organizar los archivos `.md` donde alojaría cada una de las páginas. Que por supuesto no era nada nuevo, es algo parecido a lo que se puede ver en la documentación [Nuxt Content - Getting started](https://content.nuxt.com/v1/getting-started/writing){:target="\_\_blank"}

```
.
├── blog
│   ├── project-01.md
│   ├── project-02.md
│   └── index.md
├── index.md
```

Además en el apartado [Content Nuxt - Content directory](https://content.nuxt.com/usage/content-directory){:target="\_\_blank"} no explica ninguna forma de preprocesar los archivos content.

Así que seguí en mi travesía por el mundo de Nuxt, Tailwind y [Docus](https://docus.dev/){:target="\_\_blank"}.

Pero al realizar la construcción del proyecto, pude notar algunos errores y advertencias que no me mostraba la versión `hot reload` como es de costumbre 🥲.

Para construir el proyecto utilicé el preset de nitro [Nitro - Github pages](https://nitro.unjs.io/deploy/providers/github-pages){:target="\_\_blank"}, que imaginé podría mejorar algo la situación.

```bash
    npx nuxt build --preset github_pages
```

Todo iba bien los primeros segundos hasta que comenzaron a parecer algunas lineas de advertencia sobre el uso de Tailwind, un poco preocupado investigué y al parecer nadie había solucionado el problema, como la terminal seguía en lo suyo, me detuve en un error que supuse podría ser importante, a primera vista era un error contundente pero luego de unas horas buscando en el mundo de stackoverflow 🫶 y de instalar unos cuantos modulos. No lograba deshacerme de tamaño número de lineas molestas en la consola.

Procedí a dejarlo fluir...

```bash
ℹ vite v5.2.6 building for production...                                             3:23:24 p. m.
Load plugin failed: pinceau/volar Error [ERR_REQUIRE_ESM]: require() of ES Module F:\portafolio-nuxt\node_modules\style-dictionary-esm\dist\index.mjs not supported.
Instead change the require of F:\portafolio-nuxt\node_modules\style-dictionary-esm\dist\index.mjs to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (F:\portafolio-nuxt\node_modules\pinceau\dist\shared\pinceau.90146cac.cjs:14:1)
    at Object.<anonymous> (F:\portafolio-nuxt\node_modules\pinceau\dist\volar.cjs:5:15)
    at F:\portafolio-nuxt\node_modules\@vue\language-core\out\utils\ts.js:121:28
    at Array.map (<anonymous>)
    at getPartialVueCompilerOptions (F:\portafolio-nuxt\node_modules\@vue\language-core\out\utils\ts.js:117:14)
    at Object.createParsedCommandLineByJson (F:\portafolio-nuxt\node_modules\@vue\language-core\out\utils\ts.js:13:20)
    at F:\portafolio-nuxt\node_modules\vue-component-meta\out\base.js:27:46
    at createCheckerWorker (F:\portafolio-nuxt\node_modules\vue-component-meta\out\base.js:39:29)
    at createCheckerByJsonConfigBase (F:\portafolio-nuxt\node_modules\vue-component-meta\out\base.js:27:12)
    at createComponentMetaCheckerByJsonConfig (F:\portafolio-nuxt\node_modules\vue-component-meta\out\index.js:22:53)
    at refreshChecker (file:///F:/portafolio-nuxt/node_modules/nuxt-component-meta/dist/parser.mjs:66:15)
    at fetchComponent (file:///F:/portafolio-nuxt/node_modules/nuxt-component-meta/dist/parser.mjs:109:9)
    at Array.map (<anonymous>)
    at Object.fetchComponents (file:///F:/portafolio-nuxt/node_modules/nuxt-component-meta/dist/parser.mjs:173:49)
    at Object.buildStart (file:///F:/portafolio-nuxt/node_modules/nuxt-component-meta/dist/module.mjs:21:24)
    at file:///F:/portafolio-nuxt/node_modules/rollup/dist/es/shared/node-entry.js:19563:40
    at async Promise.all (index 10)
    at async PluginDriver.hookParallel (file:///F:/portafolio-nuxt/node_modules/rollup/dist/es/shared/node-entry.js:19491:9)
    at async file:///F:/portafolio-nuxt/node_modules/rollup/dist/es/shared/node-entry.js:20396:13
    at async catchUnfinishedHookActions (file:///F:/portafolio-nuxt/node_modules/rollup/dist/es/shared/node-entry.js:19907:16)
    at async rollupInternal (file:///F:/portafolio-nuxt/node_modules/rollup/dist/es/shared/node-entry.js:20393:5)
    at async Module.build (file:///F:/portafolio-nuxt/node_modules/vite/dist/node/chunks/dep-BBHrJRja.js:67268:18)
    at async buildClient (file:///F:/portafolio-nuxt/node_modules/@nuxt/vite-builder/dist/shared/vite-builder.D43Ga2dP.mjs:601:5)
    at async bundle (file:///F:/portafolio-nuxt/node_modules/@nuxt/vite-builder/dist/shared/vite-builder.D43Ga2dP.mjs:1593:3)
    at async bundle (file:///F:/portafolio-nuxt/node_modules/nuxt/dist/index.mjs:5062:5)
    at async Promise.all (index 1)
    at async build (file:///F:/portafolio-nuxt/node_modules/nuxt/dist/index.mjs:4937:5)
    at async Object.run (file:///F:/portafolio-nuxt/node_modules/nuxi/dist/chunks/build.mjs:95:5)
    at async runCommand$1 (file:///F:/portafolio-nuxt/node_modules/nuxi/dist/shared/nuxi.9edf0930.mjs:1648:16)
    at async runCommand$1 (file:///F:/portafolio-nuxt/node_modules/nuxi/dist/shared/nuxi.9edf0930.mjs:1639:11)
    at async runMain$1 (file:///F:/portafolio-nuxt/node_modules/nuxi/dist/shared/nuxi.9edf0930.mjs:1777:7) {
  code: 'ERR_REQUIRE_ESM'
}
```

Luego de la pausa dramatica.

Noté que la construcción no se detenía y comenzaba a construir la aplicación como si nada pasara.
Pero de pronto lo que me imaginaba pasaría, la construcción se caía mostrando lo siguiente.

```bash

    ℹ Prerendering 8 initial routes with crawler                                                      nitro 2:58:54 p. m.
    ├─ /opensearch.xml (17ms)                                                                        nitro 2:58:54 p. m.
    ├─ /api/search (17ms)                                                                            nitro 2:58:54 p. m.
    ├─ /200.html (302ms)                                                                             nitro 2:58:55 p. m.
    ├─ /404.html (302ms)                                                                             nitro 2:58:55 p. m.
    ├─ /api/_content/cache.1711735103698.json (518ms)                                                nitro 2:58:55 p. m.
    ├─ /blog (928ms)                                                                                 nitro 2:58:55 p. m.
    ├─ / (947ms)                                                                                     nitro 2:58:55 p. m.
    ├─ /api/_content/query/wxmlyJ2dlX.1711735103698.json (3ms)                                       nitro 2:58:55 p. m.
    ├─ /blog/_payload.json (24ms)                                                                    nitro 2:58:55 p. m.
    ├─ /api/_content/query/4rWHRbRzSn.1711735103698.json (2ms)                                       nitro 2:58:55 p. m.
    ├─ /api/_content/query/xWeY3NfYtX.1711735103698.json (5ms)                                       nitro 2:58:55 p. m.
    ├─ /_payload.json (5ms)                                                                          nitro 2:58:55 p. m.
    ├─ /api/_content/query/brX4CwCJoQ.1711735103698.json (6ms)                                       nitro 2:58:55 p. m.
    ├─ /api/_content/query/buTenv2BW7.1711735103698.json (5ms)                                       nitro 2:58:55 p. m.
    ├─ /api/_content/query/TeaeeOLONQ.1711735103698.json (5ms)                                       nitro 2:58:55 p. m.
    ├─ /api/_content/navigation/u7BbTyuhiE.1711735103698.json (13ms)                                 nitro 2:58:55 p. m.
    ├─ /__studio.json (999ms)                                                                        nitro 2:58:55 p. m.
    ├─ /api/_content/query/aXY8qv7eof.1711735103698.json (41ms)                                      nitro 2:58:56 p. m.
    ├─ /blog/project-01 (384ms)                                                                      nitro 2:58:56 p. m.
    ├─ /blog/project-02 (391ms)                                                                      nitro 2:58:56 p. m.
    ├─ /api/_content/query/9Qj7UK1SKR.1711735103698.json (3ms)                                       nitro 2:58:56 p. m.
    ├─ /api/_content/query/cwmekYcrbb.1711735103698.json (2ms)                                       nitro 2:58:56 p. m.
    ├─ /blog/project-01/_payload.json (18ms)                                                         nitro 2:58:56 p. m.
    ├─ /blog/project-02/_payload.json (1ms)                                                          nitro 2:58:56 p. m.
    ├─ /api/_content/query/6uwNwTVJeF.1711735103698.json (2ms)                                       nitro 2:58:56 p. m.
    ├─ /api/_content/query/uDH5QVOdH8.1711735103698.json (2ms)                                       nitro 2:58:56 p. m.
    ├─ /blog/project (38ms)                                                                          nitro 2:58:56 p. m.
    ├─ /api/_content/query/FIKReLHNQd.1711735103698.json (2ms)                                       nitro 2:58:56 p. m.
    │ ├── Error: [404] Document not found!
    │ └── Linked from /blog/project
    ├─ /blog/project/_payload.json (2ms)                                                             nitro 2:58:56 p. m.
    ├─ /api/_content/query/l8ZYy0gZK6.1711735103698.json (3ms)                                       nitro 2:58:56 p. m.
                                                                                                    nitro 2:58:56 p. m.
    Errors prerendering:
    ├─ /api/_content/query/FIKReLHNQd.1711735103698.json (2ms)                                       nitro 2:58:56 p. m.
    │ ├── Error: [404] Document not found!
    │ └── Linked from /blog/project
                                                                                                    nitro 2:58:56 p. m.

    ERROR  Exiting due to prerender errors.                                                                 2:58:56 p. m.
```

Al parecer problemas con el prerenderizado de las páginas para prepararlo para la vida, prepararlo para su ejecución en Github Pages.

Esto era lo que quería, ya que el proyecto funcionaba en [Netlify](https://pdonoso.netlify.app/){:target="\_\_blank"}, pero no estaba conforme, necesitaba solucionarlo, luego de haber trabajado con ReactJS entendía que un proyecto en [SPA](https://en.wikipedia.org/wiki/Single-page_application){:target="\_\_blank"} era necesario en producción, pero más que la busqueda de lo óptimo, esto se había convertido en un simple capricho.

Cuando entendí eso, pude colocar la cabeza en la almohada y seguir durmiendo.

A primera hora del día y luego de un café junto a un pancito con tomate, por supuesto, me senté en la silla y comencé con ideas nuevas.
Leyendo detenidamente la terminal el sistema no estaba prerenderizando un archivo existente, estaba procesando una ruta llamada `/blog/project` que claramente no existía.

Entonces fuí a la documentación y encontré algo interesante.

- [Nuxt - Hybrid rendering](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering){:target="\_\_blank"}

  ```js{id="python-print" class="blue large" data-filename="test.py"}
  export default defineNuxtConfig({
    routeRules: {
      // Homepage pre-rendered at build time
      "/": { prerender: true },
      // Products page generated on demand, revalidates in background, cached until API response changes
      "/products": { swr: true },
      // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
      "/products/**": { swr: 3600 },
      // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
      "/blog": { isr: 3600 },
      // Blog post page generated on demand once until next deployment, cached on CDN
      "/blog/**": { isr: true },
      // Admin dashboard renders only on client-side
      "/admin/**": { ssr: false },
      // Add cors headers on API routes
      "/api/**": { cors: true },
      // Redirects legacy urls
      "/old-page": { redirect: "/new-page" },
    },
  });
  ```

- [Nuxt - Define route rules](https://nuxt.com/docs/api/utils/define-route-rules){:target="\_\_blank"}

  ```js
  export default defineNuxtConfig({
    routeRules: {
      "/": { prerender: true },
    },
  });
  ```

- [Nuxt - Selective pre-rendering](https://nuxt.com/docs/getting-started/deployment#selective-pre-rendering){:target="\_\_blank"}

  ```js
  export default defineNuxtConfig({
    nitro: {
      prerender: {
        routes: ["/user/1", "/user/2"],
        ignore: ["/dynamic"],
      },
    },
  });
  ```

Comencé por el lugar que me llevó a otro día sin poder llegar a puerto.

Definí mis rutas de la siguiente manera.

```js
export default defineNuxtConfig({
  routeRules: {
    "/blog/**": { prerender: true },
  },
});
```

Luego probé con el archivo que me daba problemas.

```js
export default defineNuxtConfig({
  routeRules: {
    "/blog/project": { prerender: false },
  },
});
```

Hasta que logré que todo funcionara de maravilla, pero siempre tendría que descartar la ruta específica :angry:.

Entonces descarté la idea de nombrar las páginas de mi blog con números y busqué otra forma. Por supuesto una que no los tuviera, recordando mi viejo temor por ellos y confirmandole al destino que no eran para mí.

```
.
├── blog
│   ├── portfolio-documentation.md
│   ├── portfolio-bugs.md
│   └── index.md
├── index.md
└── portfolio
    ├── projects.json
    └── skills.csv
```

Confiado de mi nueva plantilla para los nombres de los proyectos, decidí comprometerlo y subirlo a git.

Contento del nuevo hallazgo, reviso el sitio desde mi móvil y no estaba disponible.

Cansado y ya resignandome a volver a la rutina de la angustiante situación, tomo el hervidor y procedo a llenarlo a tope, pensando que quedaba una larga noche.

Vuelvo a mi escritorio, reviso la terminal luego de ordenarle que construyera el proyecto y me encuentro con la confirmación de la falla, ahora renderizaba una ruta llamada `/blog/portfolio`.

```
.
├── blog
│   ├── portfolio_documentation.md
│   ├── portfolio_bugs.md
│   └── index.md
├── index.md
└── portfolio
    ├── projects.json
    └── skills.csv
```

De esta forma luego de reformatear los nombres de los directorios, todo se construía de maravilla.👌

<div class="text-center text-xl font-semibold text-red-300">- El problema son los guiones. -</div>

---

```
                            ,-.
       ___,---.__          /'|`\          __,---,___
    ,-'    \`    `-.____,-'  |  `-.____,-'    //    `-.
  ,'        |           ~'\     /`~           |        `.
 /      ___//              `. ,'          ,  , \___      \
|    ,-'   `-.__   _         |        ,    __,-'   `-.    |
|   /          /\_  `   .    |    ,      _/\          \   |
\  |           \ \`-.___ \   |   / ___,-'/ /           |  /
 \  \           | `._   `\\  |  //'   _,' |           /  /
  `-.\         /'  _ `---'' , . ``---' _  `\         /,-'
     ``       /     \    ,='/ \`=.    /     \       ''
             |__   /|\_,--.,-.--,--._/|\   __|
             /  `./  \\`\ |  |  | /,//' \,'  \
            /   /     ||--+--|--+-/-|     \   \
           |   |     /'\_\_\ | /_/_/`\     |   |
            \   \__, \_     `~'     _/ .__/   /
             `-._,-'   `-._______,-'   `-._,-'
```

<div class="text-center text-xs italic">
  <a href="https://asciiart.cc/view/12792" target="__blank">
    Created by FASTKIT
  </a>
</div>

---
