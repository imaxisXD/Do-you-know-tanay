var readSync = require('readline-sync'); //importing

//Introduction
var score = 0;
var userName = readSync.question('Hi, can you please write your name for me - ');
console.log('\n'+userName+' Welecome to the Quiz game- "Do You Know Tanay"');
console.log('(pssh here is a secret for you he is my favourite teacher)\n');
console.log('\n---------------------------------------------\n');

//highscore
var highScore = [{ name : 'Tanay',
points : 4},{name : 'Sunny', points : 3},{ name : 'Tony', points : 2}]

//Function
function play(ques, ans){
  var currAns = readSync.question('Question: '+ques+'\nAnswer: ');

  if (currAns.toUpperCase()===ans.toUpperCase()){
    score ++
    console.log('\nCorrect ! Yay :) ')
  }
  else {
    score -- 
    console.log('\nWrong ! Try Again :( ')
  }
  console.log('\n'+userName+', Your Current Score Is : '+score);
  console.log('\n---------------------------------------------\n');
}

//Obj of Questions
var questionQ1 = { question : 'Where does Tanay Live',
answer : 'Bangalore'
}
var questionQ2 = { question : 'Where does Tanay Work',
answer : 'Microsoft'
}
var questionQ3 = { question : 'What does Tanay Teach',
answer : 'Web Devlopment'
}
var questionQ4 = { question : 'Who thought of Neogcamp',
answer : 'Tanay'
}

//array the questions
var quesArray = [questionQ1, questionQ2, questionQ3, questionQ4];

//calling of question and function
for(var i = 0; i<quesArray.length; i++){
  var currQues = quesArray[i];
  play(currQues.question,currQues.answer);
}
//Printing the final score
console.log('\nWell Done '+userName+', Your Final Score Is : '+score);
//Checking the highscore
if (score >= highScore[0].points){
  console.log('Congrats, You are the HighScorer and you know Tanay better than Tanay himself');
}
console.log('\nThankYou For Playing');

console.log('\nBefore you go check out the HighScores :-');

for(var i = 0; i<highScore.length;i++){
  console.log(' '+highScore[i].name,highScore[i].points);
}