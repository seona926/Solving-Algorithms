let stringA = "abcde"
let stringB = "abced"

rotate(stringA, stringB);
function rotate(A, B) {
    let arrA = A.split("");
    let arrB = B.split("");
    
    for (let i = 0; i < arrA.length; i++) {
        arrA.push(arrA[0]);
        arrA.shift();
        stringA = arrA.join('');
        stringB = arrB.join('');
        console.log(stringA, stringB);
        if (stringA === stringB) {
            return true
        }
    }
    return false
};