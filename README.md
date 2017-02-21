# sowpods-trie

Exposes a Trie datastructure for the SOWPODS dictionary.

## Usage

```
const trie = require("sowpods-trie");
const found1 = trie.exists("VEGETARIAN"); // true
const found2 = trie.exists("CROMULENT"); // false
```
