import Node from '../Node/Node.js';

class Queue {
  constructor() {
    this._data = [];
  }
  add(node) {
    // console.log("add: " + node.value());
    this._data.push(node);
  }
  remove() {
    // console.log("shift");
    return this._data.shift();
  }
  length() {
    return this._data.length;
  }
  empty() {
    return this._data.length === 0;
  }
  peek() {
    if (!this.empty()) {
      // console.log("peek: " + this._data[0].value());
      return this._data[0];
    }
  }
}

export default Queue;
