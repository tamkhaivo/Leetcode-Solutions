const add = require('./addTwoNumbers');


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function createSinglyLinkedList(arr) {
    const root = new ListNode()
    let l1 = root;
    for (let x = 0; x < arr.length; x++){
        l1.next = new ListNode(arr[x])
        l1 = l1.next;
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
test('[9, 9] + [1]', () => {
    let l1 = createSinglyLinkedList([9,9])
    let l2 = createSinglyLinkedList([1])
    let res = linkedListToArray(add.addTwoNumbers(l1, l2))
    let target = [0, 0, 1]
    expect(res).toStrictEqual(target)
});

test('[1,1,1,1,0,0,1,0,1] + [1]', () => {
    let l1 = createSinglyLinkedList([1,1,1,1,0,0,1,0,1])
    let l2 = createSinglyLinkedList([1])
    let res = linkedListToArray(add.addTwoBinaryNumbers(l1, l2))
    let target = [0,0,0,0,1,0,1,0,1]

    expect(res).toStrictEqual(target)
});