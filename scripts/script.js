const nextbtn=document.getElementById("nextbtn");

const questions = {
    "What does HTML stand for?": {
        "Hyper Text Markup Language": true,
        "Home Tool Markup Language": false,
        "Hyperlinks and Text Markup Language": false,
        "Hyper Tool Markup Language": false
    },
    "Which of the following is used to style HTML documents?": {
        "CSS": true,
        "XML": false,
        "PHP": false,
        "JSON": false
    },
    "What does CSS stand for?": {
        "Creative Style Sheets": false,
        "Colorful Style Sheets": false,
        "Computer Style Sheets": false,
        "Cascading Style Sheets": true
    },
    "Which HTML element is used to define an internal style sheet?": {
        "<style>": true,
        "<css>": false,
        "<script>": false,
        "<head>": false
    },
    "Which property is used to change the background color in CSS?": {
        "color": false,
        "bgColor": false,
        "background-color": true,
        "bgcolor": false
    }
};


let quesno=0;
let score=0;
let outofscore=0;
const outof=document.getElementById("outof");
outof.innerText=Object.keys(questions).length;


const Evaluate=(e)=>{
    if(quesno<Object.keys(questions).length-1)
    {
    nextbtn.disabled=false;
    }
    const buttons=document.getElementsByClassName("btn");

    if(e.target.value === "true")
    {
        score=score+1;
    
        updatescore();
        e.target.classList.add('correct');
    }
    else{
        e.target.classList.add("wrong");
    }
    for(i in buttons){
        // console.log(buttons[i]);
        buttons[i].disabled=true;

        if ( buttons[i].value ==="true")
        {
            buttons[i].classList.add("correct");
        }
    }

    // console.log(e.target);
 }
 
for ( i=1;i<=4;i++){
    const optionbutton= document.getElementById(`op${i}`);
    // console.log(i);
    // console.log(optionbutton);
    optionbutton.addEventListener('click',(e)=>{Evaluate(e)});

}



const renderquestion= () => {
    // Score.innerText=`${0}`;
    // console.log(quesno);
    nextbtn.disabled=true;
    const question = document.getElementById("Question");
    const Ques=document.getElementById("number");
    Ques.innerText=` ${quesno+1}`;

    // console.log(Object.keys(questions[quesno])[0]);
   const currentques=Object.keys(questions)[quesno];

   question.innerText=currentques;
//    console.log(questions[quesno][currentques]);
   let g=0;

   for(let [k,v] of Object.entries(questions[currentques])){
    // console.log(k,v);
    g+=1;
    const optionbutton= document.getElementById(`op${g}`);
    optionbutton.innerText=k;
    optionbutton.value=v;
    optionbutton.classList.remove("correct","wrong");
    optionbutton.disabled=false;
    // optionbutton.addEventListener('click',(e)=>{Evaluate(e)});

    if(quesno +1 == Object.keys(questions).length){
        const submit=document.getElementById("submitbtn");
        submit.disabled=false;

        nextbtn.disabled=true;
    }
    // console.log(optionbutton.value);
    
   }

 }
 

 const updatescore=()=>{

    const Score= document.getElementById("Score");
    Score.innerText=`${score}`;
    // console.log(Score.innerText=`${score}`);
 }
 
 const storescore=()=>{
    localStorage.setItem("score",JSON.stringify(score));
 }




nextbtn.addEventListener('click',() =>{
    if ( quesno < Object.keys(questions).length-1)
    {
        quesno+=1;
        renderquestion();
    }
  
} 

)
const submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener('click',storescore);
renderquestion();













