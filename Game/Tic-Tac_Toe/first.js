let a=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let b=document.querySelector(".new");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let turn0=true;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
a.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was click");
        if (turn0===true){
            box.innerText="x";
            turn0=false;
        }else{
            box.innerText="o";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
});
const disabledboxes=()=>{
    for (let box of a){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for (let box of a){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
};

const checkwinner=()=>{
    for (let pattern of win){
        pos0=a[pattern[0]].innerText;
        pos1=a[pattern[1]].innerText;
        pos2=a[pattern[2]].innerText;

        if (pos0!="" && pos1!="" && pos2!=""){
            if (pos0===pos1 && pos1===pos2){
                console.log(`congratulations Winner is ${pos0}`);
                showwinner(pos0);
            }
        }
    }
};
reset.addEventListener("click",resetgame);
b.addEventListener("click",resetgame);