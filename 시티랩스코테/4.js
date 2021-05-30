function solution(InitString, command) {
  var answer = "";
  let left = [];
  let right = [];

  for (let i = 0; i < InitString.length; i++) {
    left.push(InitString[i]);
  }

  for (let i = 0; i < command.length; i++) {
    if (command[i][0] === "L") {
      if (left.length !== 0) {
        right.unshift(left.pop());
      }
    } else if (command[i][0] === "R") {
      if (right.length !== 0) {
        left.push(right.shift());
      }
    } else if (command[i][0] === "D") {
      if (left.length !== 0) {
        left.pop();
        left.push(right.shift());
      }
    } else if (command[i][0] === "I") {
      if (right.length > 0) {
        console.log("dd");
        right.shift();
        right.unshift(command[i][2]);
        left.push(right.shift());
      } else if (right.length === 0) {
        left.push(command[i][2]);
      }
    } else if (command[i][0] === "P") {
      left.push(command[i][2]);
    }
  }
  answer = left.concat(right);
  answer = answer.join("");
  return answer;
}
