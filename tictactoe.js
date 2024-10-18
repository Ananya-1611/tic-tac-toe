 let boxes = document.querySelectorAll(".box");
 let reset =document.querySelector("#reset");
 let newb =document.querySelector("#newb");
 let msgc =document.querySelector(".msgc");
 let msg =document.querySelector("#msg");

 let turnO =true;
 
 const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText ="O";
            turnO =false;
        }
        else {
            box.innerText ="X";
            turnO= true;
        }
        box.disabled =true;
        checkWinner (); 
    });
 });

 const checkWinner = ()=> {
    for( let pattern of winpattern ) {
            let ps1 =boxes[pattern[0]].innerText;
            let ps2 =boxes[pattern[1]].innerText;
            let ps3 =boxes[pattern[2]].innerText;
            
        if(ps1 !="" && ps2 !="" && ps3 !=""){
            if(ps1 === ps2 && ps2 ===ps3){
                console.log("winner",ps1);

                showwinner(ps1);
            }
        }
    }
 };
 const enableBoxes =() => {
    for(let box of boxes){
        box.disabled = false;
    }
 };

 const disableBoxes =() => {
    for(let box of boxes){
        box.disabled = true;
    }
 };

 const showwinner = (winner) => {
    msg.innerText = `Congrats,winner is $(winner)`;
    msgc.classList.remove("hide");
    disableBoxes();
 };

 const resetGame =() => {
    turnO =true;
    enableBoxes();
    msgc.classList.add("hide");
 };

 newb.addEventListener("click",resetGame);
 reset.addEventListener("click",resetGame);
 