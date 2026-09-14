# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### The install script

`static/install` is the protoconf installer that the docs point users at:

```
curl -s https://protoconf.dev/install | sh
```

Docusaurus copies `static/` verbatim into `build/`, so the file is served at
`/install` with no build step of its own. Two things it depends on:

- **The apex domain has to serve the site directly.** The one-liner above uses
  `curl -s` without `-L`, so a redirect from `protoconf.dev` to
  `www.protoconf.dev` would pipe an empty body into `sh` and silently install
  nothing. Attach both hostnames to the same deployment rather than redirecting
  one to the other.
- **`static/_headers`** sets `Content-Type: text/plain` for `/install` on
  Cloudflare, so the URL is readable in a browser instead of downloading.

The script takes the release archives published by goreleaser from
[protoconf/protoconf](https://github.com/protoconf/protoconf/releases), so its
platform list has to stay in step with the build matrix in that repo's
`.goreleaser.yaml`. Test a change to it end to end before merging:

```
sh static/install --dir /tmp/protoconf-install-test
```

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
