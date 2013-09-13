var fs = require('fs');
var tools = require('./tools.js');
var DICTIONARY = fs.readFileSync('american-english',"utf-8").split("\n");

//We will track the disjoint sets of anagrams as a set of sets, represented
//as an objects whose values are objects.
var anagram_set = new Object();
var anagram_count = 0;

for(i in DICTIONARY){
  if(i % 10000 == 0){console.log("Processing word #",i)}

  var word = DICTIONARY[i].toLowerCase();
  if(word.length == 1 || /[^a-z]/.test(word)){continue;}

  var key = tools.charCount(word);
  if(typeof anagram_set[key] == 'undefined'){
    anagram_count += 1;
    anagram_set[key] = new Object();
    anagram_set[key]['size'] = 0;
  }
  anagram_set[key][word] = true;
  anagram_set[key]['size'] += 1;
  //This handles incidental duplication, too!
}

//Now that we have the words partitioned by character count, we must
//sort the partitions by their size, in descending order.

var ordered_keys = Object.keys(anagram_set).slice(1).sort(
  function(key1,key2){return anagram_set[key2]['size'] - anagram_set[key1]['size'];}
);

//Create out.txt by joining keys of each anagram class, excluding 'size'
var output_str = ""
for(i in ordered_keys){
  output_str += Object.keys(anagram_set[ordered_keys[i]]).slice(1).join(",");
  output_str += "\n";
}

fs.writeFileSync('out.txt', output_str);
console.log(anagram_count, ' total disjoint anagram classes')
