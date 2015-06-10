# quality
zero configuration code and module linting

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![Dependency Status](https://david-dm.org/jden/quality.svg)](https://david-dm.org/jden/quality)
[![Circle CI](https://circleci.com/gh/jden/quality.svg?style=svg)](https://circleci.com/gh/jden/quality)

## installation & usage

add to your package.json:
```json
  "scripts": {
    "test": "quality && <test runner>"
  }
```

## checks

`quality` is the easiest way to add best-of linting and quality checking to your package
to make your (development) life easier. it is built on the following tools:

- [standard](https://github.com/feross/standard) - checks for javascript code style, syntax errors, variable scope errors
- [sanitycheck](https://github.com/jden/node-sanitycheck) - checks for missing & unused module dependencies in your code & package.json


## FAQ

### but I want to configure all of the things
Feel free to fork this and configure it to your heart's content to find defaults that
work for you and your team. When you do this, I recommend publishing it as an npm scoped
package, eg `@yourname/quality` so you can still benefit from ease of setup and consistency
across packages

### there is an aspect of quality that is currently completely missing from this module
feel free to open an issue! I'm interested in adding sensible defaults to reduce the
amount of things you have to think about when developing a new module while maintaining a
high level of overall quality. For example, there is an effort to develop
[standard-readme](https://github.com/zcei/standard-readme), which I'm interested in incorporating
in `quality` once it has been published and is somewhat stable.


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXV jden <jason@denizac.org>. See LICENSE.md
