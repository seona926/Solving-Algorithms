function quadrant(a, b) {
    if (a > 0 && b > 0) {
        console.log(1);
    } else if (a < 0 && b > 0) {
        console.log(2);
    } else if (a < 0 && b < 0) {
        console.log(3);
    } else console.log(4);
}

quadrant(input[0], input[1]);