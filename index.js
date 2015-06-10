#!/usr/bin/env node
'use strict'

var path = require('path')
var sh = require('shelljs')
var exit = sh.exit

var flags = {
  verbose: process.argv.indexOf('--verbose') !== -1
}

function logVerbose (msg) {
  if (flags.verbose) {
    console.log(msg)
  }
}

function exec (cmd) {
  var args = cmd.split(' ')
  args[0] = path.resolve(__dirname, 'node_modules/.bin/', args[0])
  return sh.exec(args.join(' ')).code === 0
}

var ok = true

logVerbose('Checking dependencies')
ok = ok && exec('sanitycheck' + (flags.verbose ? ' --verbose' : ''))

logVerbose('Checking style')
ok = ok && exec('standard')

logVerbose(ok ? 'OK' : 'Errors found')
exit(ok ? 0 : 1)
