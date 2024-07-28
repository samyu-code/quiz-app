const highscore=document.getElementById("highscore");
const displayhighscore=()=>{
    const x=localStorage.getItem("highscore") || 0;
    const hs=document.getElementById("hs");
    hs.innerText=`${x}`;


}
highscore.addEventListener('click',displayhighscore);