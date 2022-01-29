var questions = [

        {
            number: 0,
            title: "Q. Inside which HTML tags do we put the JavaScript?",
            answer: "Body",
            choices: [
                "Header",
                "Body",
                "Head",
                "Footer"
            ]
        },
    
        {
            number: 1,
            title: "Q. Which is the correct way to target an ID in Javascript?",
            answer: "getElementByID",
            choices: [
                "getElementByClass",
                "getElementByTag",
                "getElementByHTML",
                "getElementByID"
            ]
        },
    
        {
            number: 2,
            title: "Q. What is Boolean Logic?",
            answer: "True or False",
            choices: [
                "A string of numbers",
                "True or False",
                "A string of letters",
                "An unknown variable"
            ]
        },
    
        {
            number: 3,
            title: "Q. What does .js stand for?",
            answer: "Javascript",
            choices: [
                "Java",
                "Junk Stuff",
                "Javascript",
                "jQuery"
            ]
        },
    
        {
            number: 4,
            title: "Q. What does API stand for?",
            answer: "Application Programming Interface",
            choices: [
                "Application Programming Interface",
                "Apps Program Interface",
                "Appetizers Pizza Icecream",
                "Application Protocol Integration"
            ]
        },
    
    ]

var Score = 0;
var quiz = document.getElementById('quiz')
var questionEL = document.getElementById('question')
var start = document.getElementById('startbox')
var startInfo = document.querySelector('info-container')
var pageContentEl = document.querySelector("#page-content");
var startBtn = document.getElementById('startbtn');
var timeEl = document.querySelector(".time");
var secondsLeft = 30;



//Start Button

// Loads Questions

var loadQuiz = function () {

    var questionEl = document.createElement("div");
    questionEl.className = 'question-container';
    questionEl.id = 'question-container';
    questionEl.setAttribute("data-question-id", questions[0].number);
    questionEl.innerHTML = "<h3 class='question'>" + questions[0].title + "</h3>";
    pageContentEl.appendChild(questionEl);

    var formEL = document.createElement("form");
    formEL.id = 'questionX';
    formEL.className = 'answers';
    formEL.innerHTML = "<input id=input1 type=radio name=choice value=incorrect checked>" + questions[0].choices[0] + "</input>" + "<br> </br>" + 
                       "<input id=input2 type=radio name=choice value=correct checked>" + questions[0].choices[1] + "</input>" + "<br> </br>" +
                       "<input id=input3 type=radio name=choice value=incorrect checked>" + questions[0].choices[2] + "</input>" + "<br> </br>" +
                       "<input id=input4 type=radio name=choice value=incorrect checked>" + questions[0].choices[3] + "</input>" + "<br> </br>"; 
    questionEl.appendChild(formEL);


    var nextBtnDivEl= document.createElement("div");
    nextBtnDivEl.className = "btn-container";
    formEL.appendChild(nextBtnDivEl);

    var nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.type = "Button";
    nextButton.value = "Button";
    formEL.appendChild(nextButton);
        
        
    
        nextButton.addEventListener("click", nextQuestion);
}



var loadQuiz1 = () => {
    var questio1El = document.createElement("div");
    questio1El.className = 'question-container';
    questio1El.id = 'question1-container';
    questio1El.setAttribute("data-question-id", questions[1].number);
    questio1El.innerHTML = "<h3 class='question'>" + questions[1].title + "</h3>";
    pageContentEl.appendChild(questio1El);

    var form1EL = document.createElement("form");
    form1EL.id = 'questionX';
    form1EL.className = 'answers';
    form1EL.innerHTML = "<input id=input0 type=radio name=choice value=incorrect>" + questions[1].choices[0] + "</input>" + "<br> </br>" +
        "<input id=input1 type=radio name=choice value=incorrect>" + questions[1].choices[1] + "</input>" + "<br> </br>" +
        "<input id=input2 type=radio name=choice value=incorrect>" + questions[1].choices[2] + "</input>" + "<br> </br>" +
        "<input id=input3 type=radio name=choice value=correct>" + questions[1].choices[3] + "</input>" + "<br> </br>";
    questio1El.appendChild(form1EL);


    var nextBtn1DivEl = document.createElement("div");
    nextBtn1DivEl.className = "btn-container";
    form1EL.appendChild(nextBtn1DivEl);

    var nextButton1 = document.createElement("button");
    nextButton1.innerText = "Next";
    nextButton1.type = "Button";
    nextButton1.value = "Button";
    form1EL.appendChild(nextButton1);

    

    nextButton1.addEventListener("click", nextQuestion1);
    
}

var loadQuiz2 = function () {
    var questio2El = document.createElement("div");
    questio2El.className = 'question-container';
    questio2El.id = 'question2-container';
    questio2El.setAttribute("data-question-id", questions[2].number);
    questio2El.innerHTML = "<h3 class='question'>" + questions[2].title + "</h3>";
    pageContentEl.appendChild(questio2El);

    var form2EL = document.createElement("form");
    form2EL.id = 'questionX';
    form2EL.className = 'answers';
    form2EL.innerHTML = "<input type=radio name=choice0 value=incorrect>" + questions[2].choices[0] + "</input>" + "<br> </br>" + 
                       "<input type=radio name=choice1 value=correct>" + questions[2].choices[1] + "</input>" + "<br> </br>" +
                       "<input type=radio name=choice1 value=incorrect>" + questions[2].choices[2] + "</input>" + "<br> </br>" +
                       "<input type=radio name=choice1 value=incorrect>" + questions[2].choices[3] + "</input>" + "<br> </br>"; 
     questio2El.appendChild(form2EL);


    var nextBtn2DivEl= document.createElement("div");
    nextBtn2DivEl.className = "btn-container";
    form2EL.appendChild(nextBtn2DivEl);

    var nextButton2 = document.createElement("button");
    nextButton2.innerText = "Next";
    nextButton2.type = "Button";
    nextButton2.value = "Button";
    form2EL.appendChild(nextButton2);

        nextButton2.addEventListener("click", nextQuestion2)

        
}

var loadQuiz3 = function () {
    var questio3El = document.createElement("div");
    questio3El.className = 'question-container';
    questio3El.id = 'question3-container';
    questio3El.setAttribute("data-question-id", questions[3].number);
    questio3El.innerHTML = "<h3 class='question'>" + questions[3].title + "</h3>";
    pageContentEl.appendChild(questio3El);

    var form3EL = document.createElement("form");
    form3EL.id = 'questionX';
    form3EL.className = 'answers';
    form3EL.innerHTML = "<input type=radio name=choice0 value=incorrect>" + questions[3].choices[0] + "</input>" + "<br> </br>" + 
                       "<input type=radio name=choice1 value=incorrect>" + questions[3].choices[1] + "</input>" + "<br> </br>" +
                       "<input type=radio name=choice1 value=correct>" + questions[3].choices[2] + "</input>" + "<br> </br>" +
                       "<input type=radio name=choice1 value=incorrect>" + questions[3].choices[3] + "</input>" + "<br> </br>"; 
    questio3El.appendChild(form3EL);


    var nextBtn3DivEl= document.createElement("div");
    nextBtn3DivEl.className = "btn-container";
    form3EL.appendChild(nextBtn3DivEl);

    var nextButton3 = document.createElement("button");
    nextButton3.innerText = "Next";
    nextButton3.type = "Button";
    nextButton3.value = "Button";
    form3EL.appendChild(nextButton3);
    nextButton3.addEventListener("click", nextQuestion3)

}

var loadQuiz4 = function () {
    var questio4El = document.createElement("div");
    questio4El.className = 'question-container';
    questio4El.id = 'question4-container';
    questio4El.setAttribute("data-question-id", questions[4].number);
    questio4El.innerHTML = "<h3 class='question'>" + questions[4].title + "</h3>";
    pageContentEl.appendChild(questio4El);

    var form4EL = document.createElement("form");
    form4EL.id = 'questionX';
    form4EL.className = 'answers';
    form4EL.innerHTML = "<input type=radio name=choice0 value=correct>" + questions[4].choices[0] + "</input>" + "<br> </br>" + 
                       "<input type=radio name=choice1 value=incorrect>" + questions[4].choices[1] + "</input>" + "<br> </br>" +
                       "<input type=radio name=choice1 value=incorrect>" + questions[4].choices[2] + "</input>" + "<br> </br>" +
                       "<input type=radio name=choice1 value=incorrect>" + questions[4].choices[3] + "</input>" + "<br> </br>"; 
    questio4El.appendChild(form4EL);


    var nextBtn4DivEl= document.createElement("div");
    nextBtn4DivEl.className = "btn-container";
    form4EL.appendChild(nextBtn4DivEl);

    var submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.type = "Button";
    submitBtn.value = "Button";
    form4EL.appendChild(submitBtn);
    submitBtn.addEventListener("click", nextQuestion4)

}


var results = function () {

    var resultsEl = document.createElement('div');
    resultsEl.className = 'scores-container';
    resultsEl.id = 'scores-container';
    resultsEl.setAttribute ('style', 'display: inline');
    resultsEl.innerHTML = "<h3>" + Score + '</h3>';
    pageContentEl.appendChild(resultsEl);

    var enterName = document.createElement('div');
    enterName.className = 'name-field';
    enterName.id = 'name-field';
    enterName.setAttribute('style', 'display:inline')
    enterName.innerHTML = '<input type="text" placeholder="Enter Name Here..." id="nameInput">'
    resultsEl.appendChild(enterName);

    var saveButton = document.createElement("button");
    saveButton.innerText = "Save Your Score";
    saveButton.type = "Button";
    saveButton.value = "Button";
    enterName.appendChild(saveButton);
    
    saveButton.addEventListener("click", highscores);
    
}

var highscores = function renderHighscore () { 
    var inputVal = document.getElementById("enterName");
    localStorage.setItem("highscorers", JSON.stringify(inputVal)); 
    var highScoreBox = document.createElement ('div')
        highScoreBox.innerHTML = storedScores;

        if (storedScores !== null) {
            highScoreBox = storedScores;
          }
                    renderHighscore(); {
        }
        function storedScores() {
            localStorage.setItem("highscorers", JSON.stringify(inputVal));
          }

}
//Save Scores







//Time Function

function setTime() {

    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds remaining";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        
        sendMessage();
      }
  
    }, 1000);
  }


// Remove Previous Content Functions

function removeContent() {
    var start = document.getElementById("startBox");
    start.classList.add("hidden");
  }


  var startButtonHandler = function () {
    removeContent(); 
    setTime();
    loadQuiz();
};

 
  var nextQuestion = function () {
    var questionContainer = document.getElementById("question-container");
    questionContainer.classList.add("hidden");
    console.log(Score);
    loadQuiz1 ();
}

var nextQuestion1 = function () {
    var questionContainer = document.getElementById("question1-container");
    questionContainer.classList.add("hidden");
    console.log(Score);
    loadQuiz2 ();

}

var nextQuestion2 = function () {
    var questionContainer = document.getElementById("question2-container");
    questionContainer.classList.add("hidden");
    console.log(Score);
    loadQuiz3 ();
}

var nextQuestion3 = function () {
    var questionContainer = document.getElementById("question3-container");
    questionContainer.classList.add("hidden");
    loadQuiz4 ();
}

var nextQuestion4 = function () {
    var questionContainer = document.getElementById("question4-container");
    questionContainer.classList.add("hidden");
    timeEl.classList.add('hidden');
    var input = document.querySelectorAll("input")
    for (var i=0;i<input.length;i++) {
    if (input[i].value=="correct") {
        if (input[i].checked==true){
            Score++
        } 
        if (input[i].checked==false){
            secondsLeft--
            secondsLeft--
            secondsLeft--
        } 
        
    }
    console.log(Score);
    }
    results ();
}



//Start Btn Even Listener

startBtn.addEventListener("click", startButtonHandler);
