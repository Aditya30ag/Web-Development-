let user = 0;
let comp = 0;

const choice1 = document.querySelector(".button1");
const choice2 = document.querySelector(".button2");
const choice3 = document.querySelector(".button3");

const msg=document.querySelector(".hello");

const h=document.querySelector(".user");
const j=document.querySelector(".comp");

const div = document.querySelector(".div");
const div1 = document.querySelector(".div1");

const gencompchoice=()=>{
  const option=["button1","button2","button3"];
  const random=Math.floor(Math.random()*3);
  div1.innerText="Comp Input-"+option[random];
  return option[random];
}

const showwinner=(userwin)=>{
  if (userwin){
    user++;
    h.innerText=user;
    msg.innerText="You win !";
    msg.style.backgroundColor="green";
  }else{
    comp++;
    j.innerText=comp;
    msg.innerText="You lose.";
    msg.style.backgroundColor="red";
  }
}

const playgame=(a)=>{
    const compchoice=gencompchoice();

    if (a===compchoice){
      msg.innerText="Game was Draw.Play again";
      msg.style.backgroundColor="#211845";
    }else{
      let userwin=true;
      if (a==="button1"){
        userwin=compchoice==="button3"?false:true;
      }else if (a==="button2"){
        userwin=compchoice==="button1"?false:true;
      }else{
        userwin=compchoice==="button2"?false:true;
      }
      showwinner(userwin);
    }
};


choice1.addEventListener("click", () => {
  const a=choice1.getAttribute("class");
  playgame(a);
  div.innerText="User Input-"+a;
});
choice2.addEventListener("click", () => {
  const a=choice2.getAttribute("class");
  playgame(a);
   div.innerText="User Input-"+a;
});
choice3.addEventListener("click", () => {
  const a=choice2.getAttribute("class");
   div.innerText="User Input-"+a;
  playgame(a);
});
