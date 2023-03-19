//Question bank
var questionBank= [
    {
        question : 'If you had one word to describe how you’re feeling, what would it be?',
        option : ['Excited','Chill','Awful','Stressed'],
        answer : 'Excited'
    },
    {
        question : 'On a scale of 1 to 4, how balanced was your day today? (4 being most balanced, 1 being least balanced',
        option : ['1','2','3','4'],
        answer : "4"
    },
    {
        question : 'How well have you kept up with your meals?',
        option : ['I have kept up with all of my meals/snacks!','I have had some meals/snacks','I have had been struggling with timing, but I have ate meals/snacks','I have not been able to eat anything today'],
        answer : 'I have kept up with all of my meals/snacks!'
    },
    {
        question : 'On a scale of 1 to 4 (with 1 being the least and 4 being the most), how well have you kept up with your personal hygiene?',
        option : ['1','2','3','4'],
        answer : '4'
    },
    {
        question : 'How long have you unplugged for today?',
        option : ['2+ hours','1 hour','30 minutes','I haven’t gotten a chance to unplug today'],
        answer : '1 hour'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= '#7A47B8';
    }
    else{
        document.getElementById(e.id).style.background= '#7A47B8';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        quizContainer.style.display = "none";
        scoreboard.style.display = "block";
        if (score < 2) {
          mood = "stressed";
        } else {
          mood = "chill";
        }

        points.innerHTML= mood + "\n";

      
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
