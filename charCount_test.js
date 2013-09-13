var vows = require('vows');
var assert = require('assert');
var tools = require('./tools.js');

vows.describe('charCount').addBatch({
  'when string is empty': {
    topic: "",
    'we get zeros': function(topic){
      assert.equal(tools.charCount(topic), "00000000000000000000000000");
      }
    },
  'when string is nonrepeating': {
    topic: "jshbuao",
    'we get zeros and ones': function(topic){
      assert.equal(tools.charCount(topic), "11000001010000100010100000");
      }
    },
  'when string has repeats': {
    topic: "aaaaaaaabbbbbbbbbcccccccddddddeeeeeeeee",
    'we get digits up to 9': function(topic){
      assert.equal(tools.charCount(topic), "89769000000000000000000000");
      }
    }
}).run();
