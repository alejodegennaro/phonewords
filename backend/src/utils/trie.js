import TrieNode from './trieNode';

/**
 * This is a simplified implementation of the Trie data structure
 * As an example for the dictionary filtering
 *
 * https://gist.github.com/tpae/72e1c54471e88b689f85ad2b3940a8f0
 */

// we implement Trie with just a simple root with null value.
export default class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  // inserts a word into the trie.
  // time complexity: O(k), k = word length
  insert(word) {
    let node = this.root; // we start at the root

    // for every character in the word
    for (let i = 0; i < word.length; i += 1) {
      // check to see if character node exists in children.
      if (!node.children[word[i]]) {
        // if it doesn't exist, we then create it.
        node.children[word[i]] = new TrieNode(word[i]);

        // we also assign the parent to the child node.
        node.children[word[i]].parent = node;
      }

      // proceed to the next depth in the trie.
      node = node.children[word[i]];

      // finally, we check to see if it's the last word.
      if (i === word.length - 1) {
        // if it is, we set the end flag to true.
        node.end = true;
      }
    }
  }

  // check if it contains a whole word.
  // time complexity: O(k), k = word length
  contains(word) {
    let node = this.root;

    // for every character in the word
    for (let i = 0; i < word.length; i += 1) {
      // check to see if character node exists in children.
      if (node.children[word[i]]) {
        // if it exists, proceed to the next depth of the trie.
        node = node.children[word[i]];
      } else {
        // doesn't exist, return false since it's not a valid word.
        return false;
      }
    }

    // we finished going through all the words, but is it a whole word?
    return node.end;
  }
}
