//https://sketchfab.com/search?q=dim+sum&sort_by=-pertinence&type=models for 3D models
// pick the elements from html
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg"); 
const choiceA  = document.getElementById("A");
const choiceB  = document.getElementById("B");
const choiceC  = document.getElementById("C");
const choiceD  = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGuage = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create the Questions Content

const questionSet ={
    dimsumA:[ {
        question : "以下那一項點心不可在大排檔內可取的?",
        imgSrc: "img/小龍包/Xiaolongbao1.png",
        choiceA : "菜心",
        choiceB : "煎釀三寶",
        choiceC : "小籠包",
        choiceD : "蘿蔔糕",
        correct : "小籠包"

    } , {
        question : "以下那一項是小籠包的主要食材?",
        imgSrc: "img/小龍包/Xiaolongbao1.png", 
        choiceA : "雞肉",
        choiceB : "豬肉",
        choiceC : "羊肉",
        choiceD : "魚肉",
        correct : "豬肉"

    } , {
        question : "以下那一項是小籠包的烹調方式?",
        imgSrc: "img/photo/小龍包/Xiaolongbao1.png",
        choiceA : "炒",
        choiceB : "烤 ",
        choiceC : "蒸 ",
        choiceD : "燉",
        correct : "蒸"

    }  , {
        question : "以下那一項材料是可在小籠包內找到?",
        imgSrc: "img/小龍包/Xiaolongbao1.png",
        choiceA : "泡打粉",
        choiceB : "薑葱蓉",
        choiceC : "鹹蛋黃",
        choiceD : "蝦仁",
        correct : "薑葱蓉"

    }  
],
    dimsumB:[ {
        question : "以下那一項是奶皇包的主要食材?",
        imgSrc: "img/奶黃包/creamycustard.png ", 
        choiceA : "奶皇餡料",
        choiceB : "脢頭肉碎",
        choiceC : "大地魚粉",
        choiceD : "魚肉",
        correct : "奶皇餡料"
    } , {
         question : "以下那一項材料是可在奶皇包內找到?",
        imgSrc: "img/奶黃包/creamycustard.png ",
        choiceA : "生抽",
        choiceB : "薑葱蓉",
        choiceC : "鹹蛋黃",
        choiceD : "蝦仁",
        correct : "鹹蛋黃"
    } , {
        question : "以下那一項是奶皇包的烹調方式?",
        imgSrc: "img/奶黃包/creamycustard.png ",
        choiceA : "炒",
        choiceB : "烤 ",
        choiceC : "蒸 ",
        choiceD : "燉",
        correct : "蒸"

    }  , {
        question : "以下那一項點心不可在大排檔內可取的?",
        imgSrc: "img/奶黃包/creamycustard.png ",
        choiceA : "白菜仔",
        choiceB : "煎釀三寶",
        choiceC : "奶皇包",
        choiceD : "蘿蔔糕",
        correct : "奶皇包"
    }  
],
    dimsumC:[{
        question : "以下那一項點心不可在大排檔內可取的?",
        imgSrc: "img/菜肉包/bun.png",
        choiceA : "菜心",
        choiceB : "菜肉包",
        choiceC : "煎釀三寶",
        choiceD : "蘿蔔糕",
        correct : "菜肉包"

    } , {
        question : "以下那一項是菜肉包的主要食材?",
        imgSrc: "img/菜肉包/bun.png", 
        choiceA : "雞肉",
        choiceB : "豬肉",
        choiceC : "羊肉",
        choiceD : "魚肉",
        correct : "豬肉"

    } , {
        question : "以下那一項是菜肉包的烹調方式?",
        imgSrc: "img/菜肉包/bun.png",
        choiceA : "炒",
        choiceB : "烤 ",
        choiceC : "蒸 ",
        choiceD : "燉",
        correct : "蒸"

    }  , {
        question : "以下那一項材料是可在菜肉包內找到?",
        imgSrc: "img/菜肉包/bun.png",
        choiceA : "泡打粉",
        choiceB : "高麗菜",
        choiceC : "鹹蛋黃",
        choiceD : "蝦仁",
        correct : "高麗菜"

    }  
],
    dimsumD:[ {
        question : "以下那一項點心不可在大排檔內可取的?",
        imgSrc: "img/蝦餃/dumpling.png",
        choiceA : "菜心",
        choiceB : "煎釀三寶",
        choiceC : "椒鹽豆腐",
        choiceD : "蝦餃",
        correct : "蝦餃"

    } , {
        question : "以下那一項是蝦餃的主要食材?",
        imgSrc: "img/蝦餃/dumpling.png", 
        choiceA : "雞肉",
        choiceB : "蝦仁",
        choiceC : "羊肉",
        choiceD : "魚肉",
        correct : "蝦仁"

    } , {
        question : "以下那一項是蝦餃的烹調方式?",
        imgSrc: "img/蝦餃/dumpling.png",
        choiceA : "炒",
        choiceB : "烤 ",
        choiceC : "蒸 ",
        choiceD : "燉",
        correct : "蒸"

    }  , {
        question : "以下那一項材料是可在蝦餃內找到?",
        imgSrc: "img/蝦餃/dumpling.png",
        choiceA : "泡打粉",
        choiceB : "薑葱蓉",
        choiceC : "鹹蛋黃",
        choiceD : "豬肉",
        correct : "豬肉"

    }  
],
    dimsumE:[ {
        question : "以下那一項點心不可在大排檔內可取的?",
        imgSrc: "img/燒賣/shaomai.png",
        choiceA : "菜心",
        choiceB : "煎釀三寶",
        choiceC : "魚肉燒賣",
        choiceD : "蘿蔔糕",
        correct : "魚肉燒賣"

    } , {
        question : "以下那一項是魚肉燒賣的主要食材?",
        imgSrc: "img/燒賣/shaomai.png", 
        choiceA : "雞肉",
        choiceB : "豬肉",
        choiceC : "羊肉",
        choiceD : "魚肉",
        correct : "魚肉"

    } , {
        question : "以下那一項是魚肉燒賣的烹調方式?",
        imgSrc: "img/燒賣/shaomai.png",
        choiceA : "炒",
        choiceB : "烤 ",
        choiceC : "蒸 ",
        choiceD : "燉",
        correct : "蒸"

    }  , {
        question : "以下那一項材料是可在魚肉燒賣內找到?",
        imgSrc: "img/燒賣/shaomai.png",
        choiceA : "泡打粉",
        choiceB : "薑葱蓉",
        choiceC : "魚柳",
        choiceD : "蝦仁",
        correct : "魚柳"

    }  
]
    
}


// take data from question array
function getfunctionfromDB(input){
    switch(input){
        case 'Dim_Sum_A':
            return questions = question.dimsumA
        case 'Dim_Sum_B':
            return questions = question.dimsumB
        case 'Dim_Sum_C':
            return questions = question.dimsumC
        case 'Dim_Sum_D':
            return questions = question.dimsumD
        case 'Dim_Sum_E':
            return questions =  question.dimsumE
        default:
            return questions =  question.dimsumA
        
    }
}



//create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; //10sec
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth/ questionTime; 
let TIMER;
let score = 0;

// render a question

function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}

start.addEventListener("click",startQuiz);

//start quiz
function startQuiz(){
    start.style.display = "none";
    getfunctionfromDB('Dim_Sum_A');
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000);//1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML= count;
        timeGauge.style.width = count * gaugeUnit + "px";
         count++
    }else{
        count = 0;
        //change the color to red 
        answerIsWrong(); 
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            //end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// check answer
function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        //answer is correct
        score++;
        //change progress color to green
        answerIsCorrect();
    }else{
        //answer is wrong
        //change progress to red
        answerIsWrong(); 
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
     document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

//score render
function scoreRender(){
    scoreDiv.style.display = "block";

    //calculate the amount of question precent answered by the user
    const scorePerCent = Math.round(100 * score/ questions.length);
   
    //choose the image base on the score
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" : 
               "img/1.png";

    scoreDiv.innerHTML = "<img src ="+ img +">";
    scoreDiv.innerHTML += "<p>" + scorePerCent +"%</p>";
}

 

