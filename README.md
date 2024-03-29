# Portafolio Nuxt + Tailwind

![MOBILE](/public/gifs/animation-web.gif)

![MOBILE](/public/gifs/animation-mobile.gif)

# Setup NPM

```bash
    npm i
```

# Development Server

Start the development server on http://localhost:3000:

```bash
    npm run dev
```

# Production

## Building
Build the application for production in `.output` directory:

```bash
    npm run build
```

- For github pages.

```bash
    npx nuxt build --preset github_pages
```

## Serving 
- Locally preview production build:

```bash
    npm run preview
```
 
- Serve the folder built for production:

```bash
    node .output/server/index.mjs
```

- Serve the folder built for github pages:

```bash
    npx gh-pages --dotfiles -d .output/public  
```