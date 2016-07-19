const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ENTER GRADE:', (answer) => {
  // TODO: Log the answer in a database
  var grade = parseInt(answer);
  isOdd(grade,3);
  isEven(grade,2);
  rl.close();
});
function isEven(grade, decrement){
var gradef = grade + decrement;
if (gradef < 75)
   console.log("Your new grade is:"+ decrement);
       
}