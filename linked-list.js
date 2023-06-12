"use strict";

/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.tail === null) this.tail = newNode;
    if (this.head !== null) newNode.next = this.head;

    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail === null) throw new Error("Empty list.");

    // hold onto it
    let tailNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current !== null) {
        if (current.next === this.tail) {
          this.tail = current;
          current.next = null;
        } else {
          current = current.next;
        }
      }
    }

    // decrement length
    this.length -= 1;

    // return it
    return tailNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) throw new Error("Empty List");
    let headVal = this.head.val;
    this.head = this.head.next;
    if (this.length === 1) this.tail = this.head;
    this.length -= 1;
    return headVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length === 0 || idx < 0) throw new Error("Empty List");

    let current = this.head;
    let counter = 0;

    while (counter < idx) {
      current = current.next;
      counter++;
    }
    console.log("current ===>", current);
    console.log("current.val ===>", current.val);
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.length === 0 || idx < 0) throw new Error("Invalid Index");

    let current = this.head;
    let counter = 0;

    while (counter < idx) {
      current = current.next;
      counter++;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error("Invalid Index");

    if (idx === this.length) {
      this.push(val);
      return;
    }

    if (this.length === 0) {
      this.unshift(val);
      return;
    }

    const newNode = new Node(val);
    let current = this.head;
    let counter = 0;

    if (idx === 0) {
      this.unshift(val);
      return;
    }

    while (counter < idx - 1) {
      current = current.next;
      counter++;
    }

    (newNode.next = current.next), (current.next = newNode);
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid Index");

    if (this.length === 0) {
      return this.shift();
    }

    let current = this.head;
    let counter = 0;

    if (idx === 0) {
      return this.shift();
    }

    while (counter < idx - 1) {
      current = current.next;
      counter++;
    } // terminates when counter === idx - 1, prior node

    let oldNode = current.next; // node we want to remove
    current.next = oldNode.next;
    this.length -= 1;

    return oldNode.val;

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let sum = 0;

    let counter = 0;
    let current = this.head;
    while (counter < this.length) {
      sum += current.val
      current = current.next
      counter++
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
