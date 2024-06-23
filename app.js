let btn = document.querySelectorAll(".btn") ;
let reset = document.querySelector("button");
let heading = document.querySelector("h1") ;
let win = [[0,1,2] , [3,4,5] , [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let xTurn = true ;
for(let b of btn){
    b.addEventListener("click",()=>{
        if(b.innerHTML === ""){
            b.innerHTML = xTurn ? "X" : "O";
            xTurn = !xTurn;
        }
        checkWinner() ;
    })
}
let disableButtons = () => {
    for (let b of btn) {
        b.style.pointerEvents = "none";
    }
}

let checkWinner = ()=>{
    for(let arr of win){
        if(btn[arr[0]].innerHTML !== ""  && btn[arr[1]].innerHTML !== "" && btn[arr[2]].innerHTML !== ""){
            if(btn[arr[0]].innerHTML === btn[arr[1]].innerHTML && btn[arr[1]].innerHTML === btn[arr[2]].innerHTML){
                heading.innerHTML = "Winner : " + btn[arr[0]].innerHTML ;
                reset.innerText = "New Game";
                disableButtons();
            }
        }
    }
}
let resetGame = ()=>{
    reset.innerText = "New Game";
    heading.innerHTML = "Tic Tac Toe" ;
    xTurn = true ;
    for(let b of btn){
        b.innerHTML = "";
    }
    b.style.pointerEvents = "auto";
}
reset.addEventListener("click" , ()=>{
    resetGame() ;
})