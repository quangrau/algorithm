// [2] -> [5] -> [7] -> [9] -> null

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds an element at the end of list
  add(element) {
    // creates a new node
    var node = new Node(element);
    var current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      // iterate to the end of the list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }

  printList() {
    var current = this.head;
    var str = "";

    while (current) {
      str += `[${current.element}] -> `;
      current = current.next;
    }
    console.log(str);
  }
}

module.export = (function() {
  const ll = new LinkedList();

  ll.add(1);
  ll.add(3);
  ll.add(4);
  ll.add(8);
  ll.add(0);

  ll.printList();
})();
