var sowpods = require("sowpods");

var trie = {};
var sum = 0;

console.time("populating trie");
sowpods.forEach(function(word){
    var c;
    var trieDepth = trie;
    for(var i=0;i <word.length; i++) {
        c=word[i];
        if(!trieDepth[c]) {
            trieDepth[c] = {};
            sum++;
        }
        trieDepth = trieDepth[c];
    }
    trieDepth.$ = true;
});
console.timeEnd("populating trie");
console.log('Number of leaves:', sum);

function findInTrie (word) {
    var c;
    var trieDepth = trie;
    for(var i=0; i<word.length; i++) {
        c=word[i];
        if(!trieDepth[c]) {
            return false;
        }
        trieDepth = trieDepth[c];
    }
    return !!(trieDepth.$);
}

exports.data = trie;
exports.exists = findInTrie;
