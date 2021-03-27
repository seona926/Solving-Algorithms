function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


function isListPalindrome(l) {
    let curr = l;
    let arr = [];
  
    if (l == null)
        return true;
  
    // push all elements of l into the stack.
    // a stack in JS is an array.
    while(curr != null){
      arr.push(curr.value);
  
      // move ahead:
      curr = curr.next;
    }
  
    let curr2 = l;
    let length = arr.length;
    // Traverse the list again & check by popping from the stack:
    while(curr2 != null){
  
      // get the top most element on the stack:
      let lastNum = arr.pop();
  
      // check if the node data isn't the same as the element popped:
      if (curr2.value != lastNum){
        return false;
      }
  
      // Half way point for evens
      if (length / 2 === arr.length) {
        return true;
      }
  
      // move ahead:
      curr2 = curr2.next;
    }
    return true;
  }
  

isPalindrome([1,2,2,1]);