function solution(bridge_length, weight, truck_weights) {
    let passTime = 0; // 경과된 시간
    let crossing = []; // 현재 다리를 건너는 트럭의 배열
    let sumOfCrossing = 0; // 현재 다리 위 트럭의 무게

    // 현재 다리 위 트럭의 배열을 다리의 길이만큼 0으로 채워준다
    for (let i = 0; i < bridge_length; i ++) {
        crossing.push(0);
    }

    // 현재 다리 위를 지나가는 트럭
    let currentTruck = truck_weights.shift();

    // crossing 맨앞에 현재 트럭을 넣고 맨뒤칸을 pop 시킨다
    crossing.unshift(currentTruck);
    crossing.pop();

    // 다리위 무게를 증가시킨다
    sumOfCrossing += currentTruck;

    // 경과 시간 증가
    passTime++;

    // 다리위 트럭의 무게가 0이면 모든 트럭이 지나갔단 뜻
    while(sumOfCrossing) {

        // 다리위 트럭을 이동시킴
        sumOfCrossing = sumOfCrossing - crossing.pop();

        // 다리를 건너지 않은 트럭을 빼서 현재 트럭에 넣어줌
        currentTruck = truck_weights.shift();

        // 현재 트럭이 다리에 들어갈 수 있으면 crossing에 넣어주고 crossing 무게 증가시킴
        if (currentTruck + sumOfCrossing <= weight) {
            crossing.unshift(currentTruck);
            sumOfCrossing = sumOfCrossing + currentTruck;
        } 
        // 못들어가면 crossing에 0을 넣어주고 빼내왔던 트럭을 다시 truck_weights에 넣어줌
        else {
            crossing.unshift(0);
            truck_weights.unshift(currentTruck);
        }

        // 경과 시간 증가
        passTime++;
    }

    return console.log(passTime);
}
solution(100, 100, [10,10,10,10,10,10,10,10,10,10]);