const LinkedList = require("./linked-list");

/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;
  _list = new LinkedList();;

  constructor() {
  }
  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this.size += 1;
    this._list.push(val);
    this.first = this._list.head;
    this.last = this._list.tail;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) throw new Error("Empty Queue.")
    this.size -= 1;
    this.first = this._list.head;
    this.last = this._list.tail;
    return this._list.shift();
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
