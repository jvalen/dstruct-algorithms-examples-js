import Node from '../Node/Node.js';
import Tree from '../Tree/Tree.js';

export default function() {
  let t = new Tree([
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

  console.log('%c\n*** Random tree example ***', 'color: orange;' );
  t.print();
}
