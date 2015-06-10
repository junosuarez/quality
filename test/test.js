/* globals describe, it */
'use strict'

var mochi = require('mochi')
mochi.should()

describe('quality', function () {
  var quality = require('../')

  it('doesnt export anything', function () {
    quality.should.deep.equal({})
  })
})
