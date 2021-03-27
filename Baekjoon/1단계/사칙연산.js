let cal = [];

function calculator(a, b) {
    cal.push(a + b);
    cal.push(a - b);
    cal.push(a * b);
    cal.push(Math.floor(a / b));
    cal.push(a % b);

    return cal.forEach(element => console.log(element));
}

calculator(7, 3)