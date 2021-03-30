function solution(numbers) {
    let answer = [];
    let eachSum = 0;

    for (let i = 0; i < numbers.length; i++){
        for (let j = numbers.length - 1; j > i; j--){
            eachSum = numbers[i] + numbers[j];
            if (answer.indexOf(eachSum) === -1) {
                answer.push(eachSum);
            }
            
        }
    }

    return answer.sort(function(a, b) {
        return a - b;
    });
}

numbers = [5,0,2,7];

solution(numbers);

