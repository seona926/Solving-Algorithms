function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

node1 = new ListNode(head[0]);

node2 = new ListNode(head[1]);
node2.next = node1;

node3 = new ListNode(head[2]);
node3.next = node2;

for(let i = 0; i < head.length; i++) {
    node[i+1] = new ListNode(head[i]);
    node[i+1].next = node[i];
}