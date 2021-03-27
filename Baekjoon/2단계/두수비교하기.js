let arr = prompt('두 수를 입력하세요.').split(" ");
let firstNum = Number(arr[0]);
let secondNum = Number(arr[1]);

if (firstNum < secondNum) {
    console.log("<");
} else if (firstNum > secondNum) {
    console.log(">");
} else {
    console.log("==");
}