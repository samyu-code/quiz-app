const storedscore=JSON.parse(localStorage.getItem("score"));
// console.log(storedscore);
const scoreupdated=document.getElementById("scoreupdate");
scoreupdated.innerText=`${storedscore}`;

const highscore=JSON.parse(localStorage.getItem("highscore"))||0;
if(storedscore >highscore)
{
    localStorage.setItem("highscore",JSON.stringify(storedscore));
}