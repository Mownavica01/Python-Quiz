let current = 0;
let score = 0;

let timer;
let timeLeft = 10;

const homeScreen =
document.getElementById("homeScreen");

const quizScreen =
document.getElementById("quizScreen");

const resultScreen =
document.getElementById("resultScreen");

questions.sort(() => Math.random() - 0.5);

document
.getElementById("startBtn")
.addEventListener("click", startQuiz);

function startQuiz(){

    homeScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    loadQuestion();
}

function loadQuestion(){

    clearInterval(timer);

    timeLeft = 10;

    document
    .getElementById("timer")
    .innerText = timeLeft;

    document
    .getElementById("timer")
    .classList.remove("warning");

    startTimer();

    let q = questions[current];

    document
    .getElementById("questionNo")
    .innerText =
    `Question ${current+1} of ${questions.length}`;

    document
    .getElementById("question")
    .innerText =
    q.question;

    let options =
    document.getElementById("options");

    options.innerHTML = "";

    let shuffledOptions =
    [...q.options]
    .sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(option => {

        let btn =
        document.createElement("button");

        btn.classList.add("option");

        btn.innerText = option;

        btn.onclick =
        () => checkAnswer(btn, option);

        options.appendChild(btn);

    });

    let progress =
    (current/questions.length)*100;

    document
    .getElementById("progressFill")
    .style.width =
    progress + "%";
}

function startTimer(){

    timer = setInterval(() => {

        timeLeft--;

        document
        .getElementById("timer")
        .innerText =
        timeLeft;

        if(timeLeft <= 5){

            document
            .getElementById("timer")
            .classList.add("warning");
        }

        if(timeLeft <= 0){

            clearInterval(timer);

            current++;

            if(current < questions.length){

                loadQuestion();

            }else{

                showResult();
            }
        }

    },1000);
}

function checkAnswer(btn, selected){

    clearInterval(timer);

    let correct =
    questions[current].answer;

    document
    .querySelectorAll(".option")
    .forEach(option => {

        option.disabled = true;

        if(option.innerText === correct){

            option.classList.add("correct");
        }

    });

    if(selected === correct){

        score++;

    }else{

        btn.classList.add("wrong");
    }
}

document
.getElementById("nextBtn")
.addEventListener("click", () => {

    current++;

    if(current < questions.length){

        loadQuestion();

    }else{

        showResult();
    }

});

function showResult(){

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    document
    .getElementById("finalScore")
    .innerText =
    `Score: ${score}/${questions.length}`;
}