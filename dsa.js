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
    if (index < 0 || index > this.length) return false;

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

//Doubly linked list

class DoublyLinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const doublyNode = new DoublyLinkedNode(value);
    this.head = doublyNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new DoublyLinkedNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temporary = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temporary.previous;
      this.tail.next = null;
      temporary.previous = null;
    }

    this.length--;
    return temporary;
  }

  unshift(value) {
    let node = new DoublyLinkedNode(value);
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let toShift = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
      toShift.next = null;
    }
    this.length--;
    return toShift;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (!this.head) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.previous;
      }
    }
    return temp;
  }
  set(index, value) {
    let item = this.get(index);
    if (!item) return item;
    item.value = value;
    return this;
  }
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    let temp = this.get(index);
    let previous = temp.previous;
    let node = new LinkedNode(value);
    previous.next = node;
    node.previous = previous;
    node.next = temp;
    temp.previous = node;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) return this.shift();
    if (index == this.length) return this.pop();
    let temp = this.get(index);
    let previous = temp.previous;
    let next = temp.next;
    previous.next = next;
    next.previous = previous;
    temp.next = null;
    temp.previous = null;
    this.length--;
    return true;
  }
}

// implememtinng stack

class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const node = new StackNode(value);
    this.top = node;
    this.height = 1;
  }

  push(value) {
    const node = new StackNode(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.height++;
    return this;
  }

  pop() {
    if (!this.top) return undefined;
    let temp = this.top;
    if (this.height === 1) {
      this.top = null;
    } else {
      this.top = this.top.next;
      temp.next = null;
    }
    this.height--;
    return temp;
  }
}

//////////////////////////////////////////////////////////

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const node = new QueueNode(value);
    this.first = node;
    this.last = node;
    this.length = 1;
  }

  enqueue(value) {
    const node = new QueueNode(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return undefined;
    let temp = this.first;
    if (this.length == 1) {
      this.last = null;
      this.first = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}

const queue = new Queue(1);
queue.enqueue(2);
queue.enqueue(3);
/* console.log(queue.dequeue());
console.log("/////////////////////////");
console.log(queue); */

// creating a binary Search Tree.
class Treenode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // create the framework of the binary search tree without creating a new node;
  }

  insert(value) {
    const node = new Treenode(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (node.value === temp.value) return undefined; // because we do not want duplicate value in the tree, otherwise best bet would be to add a count within the constructor and increase it.
      if (node.value < temp.value) {
        if (!temp.left) {
          temp.left = node;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = node;
          return this;
        } else {
          temp = temp.right;
        }
      }
    }
  }

  contains(value) {
    if (this.root === null) return undefined;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

let bst = new BinarySearchTree();
bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(18);
bst.insert(27);
bst.insert(52);
bst.insert(82);

//console.log(bst.contains(18));

// hash table
class HashTable {
  // size = represent the default value if none is given
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  // the _ inside of the hash signals other developers not to use it outside or of other methods.
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      let temp = null;
      this.dataMap[index].forEach(([itemKey, value]) => {
        if (itemKey === key) {
          temp = value;
        }
      });
      return temp;
    }
    return undefined;
  }
  keys() {
    let keys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        this.dataMap[i].forEach((item) => {
          keys.push(item[0]);
        });
      }
    }
    return keys;
  }
}

const hashTable = new HashTable();

hashTable.set("bolts", 100);
hashTable.set("washers", 50);
hashTable.set("screws", 5000);
hashTable.set("lumber", 1000);

console.log("////////////////////////////////");
console.log(hashTable.keys());
