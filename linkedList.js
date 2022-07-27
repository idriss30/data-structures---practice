//creating and manipulating linkedList

//differents methods of a linkedList such as (push, unshift, insert) share ont thing in common they create  a node so let's have a function
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
}

let myNewLinkedList = new LinkedList(4);

myNewLinkedList.push(17);
console.log(myNewLinkedList);
