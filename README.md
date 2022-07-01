# Documentation Website

This documentation website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Recommended Installation (Docker Container With Live Reload)

```
$ docker-compose -f docker-compose.yml -f docker-compose-with-reloading.yml up
```

### Installation with rebuild docker image

```
$ docker-compose -f docker-compose.yml -f docker-compose-with-reloading.yml up --build dlf_docusaurus
```

## Installation (Docker Container)

### Build docker container for local development

```
$ npm run build-docker-container-dev
```

### Run docker container

```
$ npm run docker-dev
```

## Instalation (Classic Local)

**Requirements**: node v16.15.1 or latest

```
$ npm run install
```

**Possible errors during install:**

```
Will install @docusaurus/preset-classic@2.0.0-beta.ff31de0ff, which is outside the stated dependency range
node_modules/trim
  remark-parse  <=8.0.3
  Depends on vulnerable versions of trim
  node_modules/remark-parse
    @mdx-js/mdx  <=1.6.22
    Depends on vulnerable versions of remark-mdx
    Depends on vulnerable versions of remark-parse
    node_modules/@mdx-js/mdx
      @docusaurus/mdx-loader  *
      Depends on vulnerable versions of @mdx-js/mdx
      node_modules/@docusaurus/mdx-loader
    remark-mdx  <=1.6.22
    Depends on vulnerable versions of remark-parse
    node_modules/remark-mdx
```

**WARNING**: The current version of docusaurus has internal vulnerabilities that cannot be fixed by yourself, and must be done by the package owner/creator. For this project, however, it does not matter, as the code is designed to generate a static documentation page. It is therefore recommended to disable the audit for npm by:

```
$ npm set audit false
```

### Local Development (Classic Local)

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build (Classic Local)

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment (Classic Local) - Deprecated

The following deployment instructions are kept as historical documentation. Currently, the deployment process is done automatically using **github actions**. Immediately after the appearance of a **new commit in branch main**, the page building process is started, which delivers the result files to the gh-pages branch, thus delivering the page to the following address: https://dragon-light-forest.github.io/documentation/

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
