function solution(s) {
  var answer = true;
  let numP = 0;
  let numY = 0;

  s = s.toLowerCase();
  // console.log(s)

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      numP += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "y") {
      numY += 1;
    }
  }

  console.log("numP", numP, "numY", numY);
  if (numP === numY) {
    return true;
  } else return false;
}
