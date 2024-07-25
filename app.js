let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const whowin=document.querySelector("#para");
const us=document.querySelector("#user");
const cs=document.querySelector("#comp");
let body=document.querySelector("body");
let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    us.innerText=userscore;
    cs.innerText=compscore;
    body.style.backgroundColor="rgb(24, 213, 213)"
    whowin.innerText="Play your move"
})
const draw=()=>{
    console.log("its a draw");
    whowin.innerText="Its a Draw";
    body.style.backgroundColor="rgb(24, 213, 213)"
    whowin.innerText='Game draw!'
}
const gencompchoice=()=>{
    // rock ,paper ,scissored
    const options=["rock","paper","scissores"]
    let index=Math.floor(Math.random()*3);
    return options[index];

}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("You win")
        userscore++;
        if(userscore===5){
            alert("you won")
            userscore=0;
            compscore=0;
            cs.innerText=compscore;
        whowin.innerText='you won'

        }
        us.innerText=userscore;
        body.style.backgroundColor="orange";
        whowin.style.color="gold"
   

        
    }
        else{
         
            console.log("You Lost")
            compscore++;
            if(compscore===5){
                alert("you Lost")
                compscore=0;
                userscore=0;
                us.innerText=compscore;
                whowin.innerText='you Lost!'
            }
            cs.innerText=compscore;
            body.style.backgroundColor="white";
            whowin.style.color="red"
  
        
    }
}
const playame=(userchoice)=>{
    console.log("user choice=",userchoice);
    // genrate computer choice
     const compchoice=gencompchoice();
    console.log("computer choice=",compchoice)
    if(userchoice===compchoice){
        draw();

    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            // scissors,paper
           userwin= compchoice=="paper"?false:true;
        }
        else if(userchoice=="paper"){
            //rock scissors
            userwin=compchoice=="rock"?true:false;
        }
        else{
            userwin=compchoice=="rock"?false:true;
        }
        showwinner(userwin);
    }
   

}
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playame(userchoice);

    })
})
