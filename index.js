/* Creates a new queue. A queue is a first-in-first-out (FIFO) data structure -
 * items are added to the end of the queue and removed from the front.
 */

 class Queue {
     constructor() {
        // initialise the queue and offset
         var queue = [];
         var offset = 0; 
     }
    // Returns the length of the queue.
     getLength() {
         return (this.queue.length - this.offset);
     }
     // Returns all items in the queue
     getAll() {
         return (this.queue);
     }
     // Returns true if the queue is empty, and false otherwise.
     isEmpty() {
         return (this.queue.length == 0);
     }
     // Add an item to the end of the queue
     add(item) {
         this.queue.push(item);
     }
    // Removes an item and returns it. If the queue is empty, the value 'undefined' is returned.
     remove() {
         // if the queue is empty, return immediately
         if (this.queue.length == 0) return undefined;

         if (this.queue.length == 1) {
             this.queue = [];
             return undefined;
         };

         // store the item at the front of the queue
         var item = this.queue[this.offset];

         // increment the offset and remove the free space if necessary
         if (++this.offset * 2 >= this.queue.length) {
             this.queue = this.queue.slice(offset);
             this.offset = 0;
         }

         // return the removed item
         return item;

     }
     // Returns the item at the front of the queue (without removing it). If the  queue is empty then undefined is returned.
    first() {
        return (this.queue.length > 0 ? this.queue[offset] : undefined);
    }
    // Returns the last item (most recent) at the end of the queue (without dequeuing it). If the queue is empty then undefined is returned.
    recent() {
        return (queue[queue.length - 1]);
    }
    // Erases and clears the queue
    clear() {
        return (queue = [])
    }
}

module.exports = { Queue }