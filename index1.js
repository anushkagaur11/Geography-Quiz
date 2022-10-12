let count=0;
const Questions = [{
    id: 0,
    q: "Which is the largest continent on earth?",
    a: [{ text: "Asia", isCorrect: true },
        { text: "Africa", isCorrect: false },
        { text: "Europe", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What's the smallest nation in terms of population?",
    a: [{ text: "Monaco", isCorrect: false, isSelected: false },
        { text: "Malta", isCorrect: false },
        { text: "Vatican City", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Madagascar belongs to which continent?",
    a: [{ text: "Australia", isCorrect: false },
        { text: "Europe", isCorrect: false },
        { text: "Africa", isCorrect: true }
    ]
},
{
    id: 3,
    q: "Which country completely surrounds the country 'San Marino'?",
    a: [{ text: "Italy", isCorrect: true },
        { text: "France", isCorrect: false },
        { text: "Spain", isCorrect: false }
    ]
},
{
    id: 4,
    q: "Where is 'Christ the Reedeemer' located?",
    a: [{ text: "United States of America", isCorrect: false },
        { text: "Brazil", isCorrect: true },
        { text: "Mexico", isCorrect: false }
    ]
}
]
var start = true;

function iterate(id) {

var result = document.getElementsByClassName("result");
result[0].innerText = "";
const question = document.getElementById("question");
question.innerText = Questions[id].q;
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;


op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;

var selected = "";
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    selected = op3.value;
})
if(selected=="true"){
    count++;
    console.log(count);
}
const evaluate = document.getElementsByClassName("evaluate");
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
const submit=document.getElementById("submit")
submit.addEventListener("click",()=>{
    panelEl,innerHTML=""
    panelEl.innerHTML=`<font size="8" color="green">Congratulations on finishing the quiz!<font>`
})
}

if (start) {
iterate("0");
}

const next = document.getElementsByClassName('next')[0];
var id = 0;
const panelEl=document.getElementsByClassName("panel")[0];
next.addEventListener("click", () => {
start = false;
if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
}
if(id==4){
    submit.style.visibility="visible"
}
})
