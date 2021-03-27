let arr = [];

function remainder(a, b, c) {
    arr.push((a + b) % c);
    arr.push(((a % c) + (b % c)) % c);
    arr.push((a * b) % c);
    arr.push(((a % c) * (b % c)) % c);

    return arr.forEach(element => console.log(element));
}

remainder(5, 8, 4);


// prompt 써보기

let arr2 = prompt("세 숫자를 입력하세요.").split(" ");
console.log(arr2);

let num1 = Number(arr2[0]);
let num2 = Number(arr2[1]);
let num3 = Number(arr2[2]);

console.log((num1 + num2) % num3);
console.log(((num1 % num3) + (num2 % num3)) % num3);
console.log((num1 * num2) % num3);
console.log(((num1 % num3) * (num2 % num3)) % num3);