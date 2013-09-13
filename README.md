## Anagram Lister

This is a JavaScript script which, given a line-separated dictionary:

1. Returns the number of disjoint anagram classes
2. Creates a file `out.txt` that lists the words in each class, in descending
order of the size of each class, seperated by line.

```
node anagram.js
```

### Notes

This should run in linear time since it deals almost exclusively with hashtables.
We never search an array. But if you observe the way the script proceeds, there
is a tangible slowdown as the number of words processed gets longer. I'm not sure
why this is; maybe space is the issue.

The dictionary doesn't need to be sorted, and it is permitted to have duplicate
words (without being duplicated in the count or the list). Capitalization is
ignored, and any words with accents or other irregular characters are ignored.

This is written synchronously, since I didn't see a way that writing it 
asynchronously would speed anything up (running in node, not a browser). I find 
synchronous code to be a bit more readable, and typically requires less deep 
nesting.
