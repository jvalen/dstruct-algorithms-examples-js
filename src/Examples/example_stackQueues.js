import Node from '../Node/Node.js';
import Stack from '../Stack/Stack.js';
import Queue from '../Queue/Queue.js';

export default function() {
  let stack = new Stack();

  console.log('%c*** Stack example ***', 'color: purple;' );

  console.log('push: ' + 1);
  stack.push(new Node(1));
  console.log('push: ' + 2);
  stack.push(new Node(2));
  console.log('push: ' + 3);
  stack.push(new Node(3));
  console.log('push: ' + 4);
  stack.push(new Node(4));
  console.log('push: ' + 5);
  stack.push(new Node(5));

  console.log('pop: ' + stack.top().value());
  stack.pop();
  console.log('pop: ' + stack.top().value());
  stack.pop();
  console.log('pop: ' + stack.top().value());
  stack.pop();
  console.log('pop: ' + stack.top().value());
  stack.pop();
  console.log('pop: ' + stack.top().value());
  stack.pop();

  let queue = new Queue();

  console.log('%c\n*** Queue example ***', 'color: purple;' );

  console.log('add: ' + 1);
  queue.add(new Node(1));
  console.log('add: ' + 2);
  queue.add(new Node(2));
  console.log('add: ' + 3);
  queue.add(new Node(3));
  console.log('add: ' + 4);
  queue.add(new Node(4));
  console.log('add: ' + 5);
  queue.add(new Node(5));

  console.log('remove: ' + queue.peek().value());
  queue.remove();
  console.log('remove: ' + queue.peek().value());
  queue.remove();
  console.log('remove: ' + queue.peek().value());
  queue.remove();
  console.log('remove: ' + queue.peek().value());
  queue.remove();
  console.log('remove: ' + queue.peek().value());
  queue.remove();
}
