module.exports = {
    addTwoNumbers: addTwoNumbers,
    addTwoBinaryNumbers: addTwoBinaryNumbers
};
/*
    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order, and each of their nodes contains a single digit. 
    Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
    
*/

function ListNode(val, next) {
    this.val = (val==undefined ? 0 : val)
    this.next = (next==undefined ? null : next)
}

function createSinglyLinkedList(arr) {
    const root = new ListNode()
    let l1 = root;
    for (let x = 0; x < arr.length; x++){
        l1.next = new ListNode(arr[x])
        l1 = l1.next
    }
    return root.next;
}
function linkedListToArray(l1) {
    let x = [];
    while (l1) {
        x.push(l1.val);
        l1 = l1.next;
    }
    return x;
}
function addTwoNumbers(l1, l2) {
    const list = new ListNode();
    let current = list;
    let carry = 0;

    while (l1 || l2 || carry) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let val = (v1 + v2 + carry) % 10;
        carry = Math.floor((v1 + v2 + carry) / 10);

        current.next = new ListNode(val);
        current = current.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return list.next;
}

function addTwoBinaryNumbers(l1, l2) {
    const list = new ListNode();
    let current = list;
    let carry = 0;

    while (l1 || l2 || carry) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let val = v1 ^ v2 ^ carry
        carry = (v1 & v2) | carry & (v1 ^ v2);
        current.next = new ListNode(val);
        current = current.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return list.next;
}

console.log(addTwoNumbers())
