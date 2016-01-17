/**
 * Node class
 * @param {object} value
 * @constructor
 */
class Node {
  constructor(value) {
    this._data = value;
  }
  value() {
    return this._data;
  }
}

export default Node;
