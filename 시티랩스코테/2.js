function solution(train) {
  var answer = 0;
  
  for (let i = 0; i < train.length; i++) {
      for (let j = 0; j < train[i].length; j++) {
        // E와 W가 순서대로 연속적으로 나온다면 마주본 것
        if (train[i][j] === "E" && train[i][j + 1] === "W") {
          answer += 1;
          //바로 아래 if문은 필요 없음
          if (
            (i !== 0 || i !== train.length - 1) &&
            (j !== 0 || j !== train[i].length - 1)
          ) {
            // 상하좌우가 아래와 같으면 어디로 등을 돌려도 마주보게 됨
            if (
              train[i][j - 1] === "E" &&
              train[i][j + 1] === "W" &&
              train[i - 1][j] === "S" &&
              train[i + 1][j] === "N"
            ) {
              answer += 1;
            }
          }
        }

        // S와 N가 위아래로 연속적으로 나온다면 마주본 것
        if (train[i][j] === "S" && train[i + 1][j] === "N") {
          answer += 1;
          //바로 아래 if문은 필요 없음
          if (
            (i !== 0 || i !== train.length - 1) &&
            (j !== 0 || j !== train[i].length - 1)
          ) {
            // 상하좌우가 아래와 같으면 어디로 등을 돌려도 마주보게 됨
            if (
              train[i][j - 1] === "E" &&
              train[i][j + 1] === "W" &&
              train[i - 1][j] === "S" &&
              train[i + 1][j] === "N"
            ) {
              answer += 1;
            }
          }
        }
      }
  }
  
  return answer;
}