import Node from '../Node/Node.js';
import Stack from '../Stack/Stack.js';
import Queue from '../Queue/Queue.js';

export default function() {
  let stack = new Stack();

  console.log("--- Stack example ---");

  stack.push(new Node(1));
  stack.push(new Node(2));
  stack.push(new Node(3));
  stack.push(new Node(4));
  stack.push(new Node(5));
  stack.push(new Node(6));
  stack.push(new Node(7));
  stack.push(new Node(8));
  stack.push(new Node(9));

  stack.top();
  stack.pop();
  stack.top();
  stack.pop();
  stack.top();
  stack.pop();
  stack.top();
  stack.pop();
  stack.top();
  stack.pop();
  stack.top();
  stack.pop();
  stack.top();
  stack.pop();
  stack.top();
  stack.pop();
  stack.top();
  stack.pop();

  let queue = new Queue();

  console.log("--- Queue example ---");

  queue.add(new Node(1));
  queue.add(new Node(2));
  queue.add(new Node(3));
  queue.add(new Node(4));
  queue.add(new Node(5));
  queue.add(new Node(6));
  queue.add(new Node(7));
  queue.add(new Node(8));
  queue.add(new Node(9));

  queue.peek();
  queue.remove();
  queue.peek();
  queue.remove();
  queue.peek();
  queue.remove();
  queue.peek();
  queue.remove();
  queue.peek();
  queue.remove();
  queue.peek();
  queue.remove();
  queue.peek();
  queue.remove();
  queue.peek();
  queue.remove();
  queue.peek();
  queue.remove();
}
