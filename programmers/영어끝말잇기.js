function solution(n, words) {
  var answer = [0, 0];
  let visited = [];
  
  visited.push(words[0])
  
  for (let i = 1; i < words.length; i++) {
      if ((visited.indexOf(words[i]) !== -1) || (words[i-1][words[i-1].length-1] !== words[i][0])) {      
          answer[0] = (i % n) + 1;
          answer[1] = Math.floor((i / n) + 1);
          return answer;
      }
  }
  return answer;
}