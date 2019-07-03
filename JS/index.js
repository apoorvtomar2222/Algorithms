// // function countUnique(A) {
// //   let i = 0;
// //   for (let j = 1; j < A.length; j++) {
// //     if (A[i] !== A[j]) {
// //       i++;
// //       A[i] = A[j];
// //     }
// //     }
// //   return i + 1;
// // };

// // console.log(countUnique([1, 1, 2, 3, 3, 4]))
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
//   }
// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = this.tail = newNode;
//       }
//     else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }

//     this.length++;
//     return this;
//   }

//   pop() {
//     let current = this.head;
//     if (!this.head) return;
//     let pre = this.head.next;
//   }
//   }
// var list = new SinglyLinkedList()
// list.push('HELLO')
// list.push('GOODBYE')

// console.lfkog(list)
