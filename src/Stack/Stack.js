class Stack {
  constructor() {
    this._data = [];
  }
  push(node) {
    // console.log("push: " + node.value());
    this._data.push(node);
  }
  pop() {
    // console.log("pop");
    return this._data.pop();
  }
  empty() {
    return this._data.length === 0;
  }
  top() {
    if (!this.empty()) {
      // console.log("top: " + this._data[this._data.length - 1].value());
      return this._data[this._data.length - 1];
    }
  }
}

export default Stack;
