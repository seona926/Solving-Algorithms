let progresses = [95, 90, 99, 99, 80, 99];
let speeds = [1, 1, 1, 1, 1, 1];


solution(progresses, speeds);
function solution(progresses, speeds) {
    let needDays = [];
    let result = [0];

    // 각 기능당 남은 일수를 배열로 만들어줌
    for (let i = 0; i < progresses.length; i++) {
        progresses[i] = 100 - progresses[i];
        needDays.push(Math.ceil(progresses[i] / speeds[i]));
    }
    
    let maxDay = needDays[0];
    
    for (let i = 0, j = 0; i < needDays.length; i++) {
        if (needDays[i] <= maxDay) {
            result[j] += 1;
        }
        else {
            maxDay = needDays[i];
            result[++j] = 1;
        }
    }

    return result;
}
