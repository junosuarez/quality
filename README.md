# quality
zero configuration code and module linting

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![quality tested](https://img.shields.io/badge/quality-tested-brightgreen.svg)](https://github.com/jden/quality)
[![Dependency Status](https://david-dm.org/jden/quality.svg)](https://david-dm.org/jden/quality)
[![Circle CI](https://img.shields.io/circleci/project/jden/quality.svg)](https://circleci.com/gh/jden/quality)

## installation & usage

add to your package.json:
```json
  "scripts": {
    "test": "quality && <test runner>"
  }
```

## badge
Add to your readme so people can see your commitment to quality at a glance

[![quality tested](https://img.shields.io/badge/quality-tested-brightgreen.svg)](https://github.com/jden/quality)

```md
[![quality tested](https://img.shields.io/badge/quality-tested-brightgreen.svg)](https://github.com/jden/quality)
```


### standalone cli

```
$ quality
```

will run all quality checks for the module in the current directory.

`quality --verbose` will tell you more about what's going on as it's running:

```
$ quality --verbose
Checking dependencies
Checking for unused or missing dependencies in package.json...
Validating duplicate packages...
OK
Validating all require statements...

OK
Checking style
OK
```

`quality` exists with a `1` error code if problems are found and a `0` if everything is ok, so you
can easily combine it with other tools in shell scripts.

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
