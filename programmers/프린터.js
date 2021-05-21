function solution(priorities, location) {
    let loopCount = 0;
    let shiftCount = 0;

    while (priorities.length > 0) 
    {
        loopCount += 1;

        let shift = priorities.shift();

        if (priorities.filter(big => big > shift).length > 0) {
            priorities.push(shift);
        } else {
            shiftCount += 1;
            
            if (location === 0) {
                return shiftCount;
            }
        }

        location--;
        if (location === -1) {
            location = priorities.length - 1;
        }
    };
}

console.log(solution([1, 1, 9, 1, 1, 1], 1));
