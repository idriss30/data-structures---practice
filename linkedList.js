//creating and manipulating linkedList

//differents methods of a linkedList such as (push, unshift, insert, pop) share ont thing in common they create  a node so let's have a function
// that creates nodes for each method

class LinkedNode {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new LinkedNode(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new LinkedNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; /// return the entire linkedList
  }

  pop() {
    if (!this.head) return undefined;
    let previous = this.head,
      temporary = this.head;
    while (temporary.next) {
      previous = temporary;
      temporary = temporary.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
      this.head = null;
    }

    return temporary;
  }

  unshift(value) {
    const node = new LinkedNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let shiftedItem = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    shiftedItem.next = null;
    this.length--;
    return shiftedItem;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index >= this.length) return false;

    let prev = this.get(index - 1);
    let newNode = new LinkedNode(value);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    let temp = this.get(index - 1);
    let toRemove = temp.next;
    temp.next = toRemove.next;
    toRemove.next = null;
    this.length--;
    return toRemove;
  }

  reverse() {
    // reverse tail and head
    let temp = this.head;
    (this.head = this.tail), (this.tail = temp);
    let next = temp.next,
      prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.reverse();

console.log(myLinkedList);
