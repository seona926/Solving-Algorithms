function solution(numbers, hand) {
    var answer = '';
    
    // (null로 초기화하여 생성)
    const array = Array.from(Array(numbers.length), () => Array(4).fill(null))
    
    array[0][0] = '*';
    array[0][1] = '#';
    
    
    for (let i = 0; i < array.length; i++) {

        array[i][2] = numbers[i];

        if (array[i][2] === 1 || array[i][2] === 4 || array[i][2] === 7) {
            array[i][3] = 'L';
        }
        
        if (array[i][2] === 3 || array[i][2] === 6 || array[i][2] === 9) {
            array[i][3] = 'R';
        }

        
        if (array[i][3] === 'L') {
            array[i+1][0] = array[i][2];
            array[i+1][1] = array[i][1];
        } 

        if (array[i][3] === 'R') {
            array[i+1][1] = array[i][2];
            array[i+1][0] = array[i][0];
        }

        if (array[i][3] === null) {
            if (Math.abs(array[i][2] - array[i][0]) > Math.abs(array[i][2] - array[i][1])) {
                array[i][3] = 'L'; 
            } else {
                array[i][3] = 'R';
            }
    
            if (Math.abs(array[i][2] - array[i][0]) === Math.abs(array[i][2] - array[i][1])) {
                if (hand === 'Left') {
                    array[i][3] = 'L';
                } else {
                    array[i][3] = 'R';
                }
            }
        }
        

        

        
        answer += array[i][3];
    }

    console.log(array)
    console.log(answer);
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');