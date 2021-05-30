function solution(s) {
  var answer = 0;
  let numbers = [];
  let width = [];
  let newArray = [];
  
  for (let i = 1; i < s + 1; i++) {
      if (s % i === 0) {
          numbers.push(i);
          width.push(s/i);
      } 
  }
  
  for (let i = 0; i < numbers.length; i++) {
      newArray.push(numbers[i] + width[i]);
      const min = Math.min.apply(null, newArray);
      answer = min * 2;
  }

  return answer;
}
