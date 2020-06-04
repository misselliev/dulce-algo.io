// Create a class to represent a linked list.  When created, a linked list should have *no* head node associated with it. The LinkedList instance will have one property, 'head', which is a reference to the first node of the linked list. By default 'head' should be 'null'.

// INSERT FIRST: Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property. Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.

//  SIZE: Returns the number of nodes in the linked list.

// GET FIRST: Returns the first node of the linked list.

// GET LAST: Returns the last node of the linked list

// CLEAR: Delete all nodes in the list

const Node = require('./node');

class LinkedList{
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let counter = 0;
    let node = this.head;

    while(node){
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    if(!this.head) return null;
    let node = this.head;

    while(node){
      if(!node.next) return node;
      node = node.next;
    }
  }

  clear(){
    this.head= null;
  }
}