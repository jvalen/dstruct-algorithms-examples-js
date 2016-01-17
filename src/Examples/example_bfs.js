import Node from '../Node/Node.js';
import Stack from '../Stack/Stack.js';
import Queue from '../Queue/Queue.js';
import Tree from '../Tree/Tree.js';

export default function() {

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

  console.log('%c*** Tree ***', 'color: blue;');
  tree.print();

  console.log('%c\n*** Search "k" ***', 'color: blue;');

  let stepNeeded = 1;
  depthFirstSearch('k', tree.data().root);
  console.log(' ');

  depthFirstSearchIterative('k', tree.data().root);
  console.log(' ');
}
