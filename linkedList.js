class Node {
  constructor(item) {
    this.item = item;
    this.next = null
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = LinkedList.length - 1;
    this.next = null;
    this.size = 0;
  }


  add(anything) {
    const node = new Node(anything);
    let current;

    if (this.head == null)
    this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next
      }

      current.next = node;
    }
    this.size ++
  }
  
  getList() {
    let atIndex = this.head;
    let string = '';
    if(atIndex.next === null) {
      return string
    }
    string += atIndex.item + ' ';
  }
}

const list = new LinkedList();
list.add('A')
list.add('B')
console.log(list, list.getList(list));


