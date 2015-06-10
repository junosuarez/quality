#!/usr/bin/env node
'use strict'

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
  return sh.exec(cmd).code === 0
}

var ok = true

logVerbose('Checking dependencies')
ok = ok && exec('sanitycheck' + (flags.verbose ? ' --verbose' : ''))

logVerbose('Checking style')
ok = ok && exec('standard')

logVerbose(ok ? 'OK' : 'Errors found')
exit(ok ? 0 : 1)
