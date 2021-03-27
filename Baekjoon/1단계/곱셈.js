let inputArr = prompt('두 개의 세자리 수를 입력해 주세요.').split(" ");
let arr1 = inputArr[0].split("");
let arr2 = inputArr[1].split("");

let firstNum = inputArr[0] * arr2[2];
let secondNum = inputArr[0] * arr2[1];
let thirdNum = inputArr[0] * arr2[0];
let resultNum = inputArr[0] * inputArr[1];

console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
console.log(resultNum);