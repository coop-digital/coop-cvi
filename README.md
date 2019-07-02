# Coop Frontend Framework

See examples and how to use [here](https://coop-digital.github.io/coop-cvi/).

#### Local build

```
  npm i
  npm i gulp-cli -g
  gulp
```

#### Run local server to include in local projects

```
  npm run start
```

#### Add to local project

```
  <link href="http://localhost:3500/styles.css" rel="stylesheet" />
```

## Extend Bootstrap

Optionally include additional Bootstrap modules. See Bootstrap inclusion list in [styles.scss](src/sass/styles.scss). Append the import array with desired modules, which are available in `node_modules/bootstrap/scss` (after `npm install`).

Run `gulp` to build extended version.

*Note: JavaScript-dependencies are not installed by default*

___

**All rights reserved Coop Danmark A/S**
