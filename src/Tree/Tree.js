import {shuffle} from '../Utils/utils.js';

/**
 *
 */
class Tree {
  constructor(possibleValues) {
    this._tree = {
      root: {},
      nodes: []
    };

    this._availableIds = shuffle(possibleValues);

    while (this._availableIds.length > 0) {
      let currentNodeId = this._availableIds.shift(),
          newNode = {
            name: currentNodeId.value(),
            children: []
          },
          randomParent;
      if (this._tree.nodes.length !== 0) {
        //Insert node as child of a existing node
        randomParent = this._tree.nodes[Math.random() * this._tree.nodes.length | 0];
        randomParent.children.push(newNode);
      } else {
        //Create root reference
        this._tree.root = newNode;
      }
      this._tree.nodes.push(newNode);
    }
  }
  data() {
    return this._tree;
  }
  print() {
      //Modified version of the "breadthFirstSearch" function to print the tree
      this._tree.root.level = 0;
      this._tree.root.parent = 'root';

      let queue = [this._tree.root],
        currentNode,
        children,
        level = 0,
        currentParent = 'root',
        output = '(';

      while (queue.length > 0) {
        currentNode = queue.shift(); //Get the first node in the queue
        children = currentNode.children;

        if (level !== currentNode.level) {
          //Print line because new tree level detected
          console.log(output + ' [' + currentParent + '])');
          output = '(';
          currentParent = currentNode.parent;
          level++;
        } else if (currentNode.parent !== currentParent) {
          //Same level and the current node has a different parent:
          // start a new block in the same line
          output += ' [' + currentParent + ']) (';
          currentParent = currentNode.parent;
        }

        output += currentNode.name + ' '; //Add node to output

        if (children !== null) {
          //Add children to the queue
          for (let i = 0; i < children.length; i++) {
            children[i].level = level + 1;
            children[i].parent = currentNode.name;
            queue.push(children[i]);
          }
        }
      }
      console.log(output + ' [' + currentParent + '])'); //Close the last output
  }
}

export default Tree;
