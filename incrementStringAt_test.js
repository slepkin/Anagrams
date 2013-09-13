var vows = require('vows');
var assert = require('assert');
var tools = require('./tools.js');

vows.describe('incrementStringAt').addBatch({
  'when string has length one': {
    'and value 0': {
      topic: "0",
      'we get 1': function(topic){
        assert.equal(tools.incrementStringAt(topic,0), "1");
      }
    },
    'and value 4': {
      topic: "4",
      'we get 5': function(topic){
        assert.equal(tools.incrementStringAt(topic,0), "5");
      }
    }
  },
  'when string has length 26': {
    'and all zeros': {
      topic: "00000000000000000000000000",
      'we get 1 at index i, 0 elsewhere': function(topic){
        assert.equal(tools.incrementStringAt(topic,11),"00000000000100000000000000");
      }
    },
    'and assorted digits': {
      topic: "15141098765465217374007375",
      'only digit at index i changes': function(topic){
        assert.equal(tools.incrementStringAt(topic,15),"15141098765465227374007375");
      }
    }
  }
}).run();
