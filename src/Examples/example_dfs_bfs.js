import Node from '../Node/Node.js';
import Stack from '../Stack/Stack.js';
import Queue from '../Queue/Queue.js';
import Tree from '../Tree/Tree.js';

export default function() {
  /**
   * Depth-first search tree recursive
   * @param {string} nodeName - Name of the node to find
   * @param {object} tree - Node example: {name: 'a', children: [nodeA, nodeB, ...]}
   * @return {object} Returns the node with the given name
   */
  function depthFirstSearch(nodeName, tree) {
      console.log('Current Node: ' + tree.name);
      if (tree.name === nodeName) {
          console.log('%cDFS Recursive - Steps needed: ' + stepNeeded, 'color: green;');
          return tree; //Node found
      } else {
          stepNeeded++;
          var children = tree.children;
          if (children !== null) {
              var result;
              for (var i = 0; i < children.length; i++) {
                  result = depthFirstSearch(nodeName, children[i]);
                  if (result !== undefined) { //If the node has been found
                      return result; //Return the node
                  }
              }
          }
      }
  }

  /**
   * Depth-first search tree iterative
   * @param {string} nodeName - Name of the node to find
   * @param {object} tree - Node example: {name: 'a', children: [nodeA, nodeB, ...]}
   * @return {object} Returns the node with the given name
   */
  function depthFirstSearchIterative(nodeName, tree) { //Iterative version
    var stack = new Stack(),
        currentNode,
        children,
        stepsNeeded = 0,
        found = false;

    stack.push(new Node(tree));

    while ((!stack.empty()) && (!found)) {
      currentNode = stack.pop().value();
      children = currentNode.children;

      console.log('Current Node: ' + currentNode.name);
      stepsNeeded++;

      if (currentNode.name === nodeName) {
        found = true;
        console.log('%cDFS Iterative - Steps needed: ' + stepsNeeded, 'color: green;');
      } else if(children !== null) {
        var childrenCount = children.length;
        for (var i = childrenCount - 1; i >= 0; i--) {
          stack.push(new Node(children[i]));
        }
      }
    }
  }

  /**
   * Breadth-first search
   * @param {string} nodeName - Name of the node to find
   * @param {object} tree - Node example: {name: 'a', children: [nodeA, nodeB, ...]}
   * @return {object} Returns the node with the given name
   */
  function breadthFirstSearch(nodeName, tree) {
    var queue = new Queue(),
      currentNode,
      children,
      stepsNeeded = 0,
      found = false;

    queue.add(new Node(tree));

    while (!queue.empty()) {
      currentNode = queue.remove().value(); //Get the first node in the queue
      console.log('Current Node: ' + currentNode.name);
      stepsNeeded++;
      if (currentNode.name === nodeName) { //Node found
        found = true;
        console.log('%cBFS - Steps needed: ' + stepsNeeded, 'color: green;');
        return currentNode;
      } else {
        children = currentNode.children;
        if (children !== null) {
          for (var i = 0; i < children.length; i++) {
            queue.add(new Node(children[i]));
          }
        }
      }
    }
  }

  let tree = new Tree([
        new Node('a'),
        new Node('b'),
        new Node('c'),
        new Node('d'),
        new Node('e'),
        new Node('f'),
        new Node('g'),
        new Node('h'),
        new Node('i'),
        new Node('j'),
        new Node('k'),
        new Node('l')
      ]);

  console.log('%c\n*** Tree ***', 'color: blue;');
  tree.print();

  console.log('%c\n*** Search "k" ***', 'color: blue;');

  let stepNeeded = 1;
  depthFirstSearch('k', tree.data().root);
  console.log(' ');

  depthFirstSearchIterative('k', tree.data().root);
  console.log(' ');

  breadthFirstSearch('k', tree.data().root);
}
