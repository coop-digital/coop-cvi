# Coop Frontend Framework

### *See examples and how to use [here](https://coop-digital.github.io/coop-cvi/).*

### Table of content
[Setup locally](#setup-locally)
[Extend Bootstrap](#extend-bootstrap)
[Styleguide](#styleguide)

## Setup locally

#### Local build

Install gulp
```
  npm i
  npm i gulp-cli -g
```

Watch and build on file change
```
  gulp
```

Build once
```
  gulp build
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

## Styleguide

Please follow this styleguide when developing frontend projects for Coop. Will ensure maintainability and reusability across projects.

### HTML

* HTML5 doctype `<!DOCTYPE html>`
* Semantic markup
* Button or anchor tags for clickable elements (to improve accessibility)

### CSS

* Mobile first
* Preprocessing with Sass
* BEM-syntax
* Flexbox for layout
* Keep a flat CSS-structure and keep SASS-nesting to a minimum
* Use this CSS-framework as styling basis
* Optional: extend with Bootstrap 4 elements

### Javascript

#### Complex UIs

* ReactJS
* JSX for templating
* ES6-syntax
* Webpack for bundling
* Jest for testing
* Optional: State management with Redux + Redux Saga

#### Simple UIs

* Gulp for running tasks
* Optional: jQuery for DOM manipulation, Ajax etc. ([You might not need it](http://youmightnotneedjquery.com/))

### Browser support

Use Analytics to identify most used Browser for the website you're developing for.

Rule of thumb:
* IE11 and graceful degradation on IE10
* Latest 3 versions of Safari, Chrome, iOS Safari, Android Chrome, Edge, and Firefox

___

**All rights reserved Coop Danmark A/S**
