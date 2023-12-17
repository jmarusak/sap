function promptDirection(question) {
  let result = prompt(question);
  if (result == "left") return "L";
  if (result == "right") return "R";
  throw new Error("Invalid prompt: " + result);
}

function main() {
  console.log(promptDirection("Which way?"));

  console.log("after exceptioj");
}
