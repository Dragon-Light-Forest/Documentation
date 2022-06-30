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

```
$ yarn
```

### Local Development (Classic Local)

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build (Classic Local)

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
