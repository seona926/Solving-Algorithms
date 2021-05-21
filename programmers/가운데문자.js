function solution(s) {
  var answer = '';
  let sArray = s.split('');
  console.log(sArray);
  
  if (sArray.length % 2 === 0) {
    let firstIndex = sArray.length / 2;
    let secondIndex = sArray.length / 2 + 1;

    answer = sArray[firstIndex - 1];
    answer += sArray[secondIndex - 1];

  } else {
    let index = Math.ceil(sArray.length / 2);
    answer = sArray[index - 1];
  }
  
  return answer;
}

solution("composecoffee");