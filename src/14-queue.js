const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // it wasn't in the task, but why to let it stay unimplemented?
  get size() {
    return this.length;
  }

  enqueue(element) {
    if (this.length === 0) {
      this.tail = new ListNode(element);
      this.head = this.tail;
    } else {
      this.tail.next = new ListNode(element);
      this.tail = this.tail.next;
    }
    this.length++;
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    }
    const dequeuedItem = this.head.value;
    if (this.tail === this.head) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return dequeuedItem;
  }
}

module.exports = Queue;
