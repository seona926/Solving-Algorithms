function solution(n, lost, reserve) {
  let arr = [];
  let answer = 0;

  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      console.log(reserve[i], lost[j])
      if (reserve[i] === lost[j]) {
        reserve.splice(i, 1);
        lost.splice(j, 1);
      }
      if (Math.abs(reserve[i] - lost[j]) === 1 || reserve[i] - lost[j] === 0) {
        arr.push(lost[j]);
        reserve.splice(i, 1);
      }
    }
  }

  // const uniqueArr = arr.filter((element, index) => {
  //   return arr.indexOf(element) === index;
  // });

  answer = n - lost.length + arr.length;
  console.log(lost.length, reserve.length)

  return console.log('answer:',answer);
}

solution(6, [1, 3, 5], [2])