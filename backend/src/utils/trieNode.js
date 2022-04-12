export default class TrieNode {
  constructor(key) {
    // the "key" value will be the character in sequence
    this.key = key;
    // we keep a reference to parent
    this.parent = null;
    // we have hash of children
    this.children = {};
    // check to see if the node is at the end
    this.end = false;
  }
}
