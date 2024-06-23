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
        let [a , b , c] = arr ;
        if(btn[a].innerHTML !== ""  && btn[b].innerHTML !== "" && btn[c].innerHTML !== ""){
            if(btn[a].innerHTML === btn[b].innerHTML && btn[b].innerHTML === btn[c].innerHTML){
                heading.innerHTML = "Winner : " + btn[a].innerHTML ;
                reset.innerText = "New Game";
                disableButtons();
                btn[a].style.backgroundColor = "#00ff00d1";
                btn[b].style.backgroundColor = "#00ff00d1";
                btn[c].style.backgroundColor = "#00ff00d1";
            }
        }
    }
    heading.innerText = "Turn : " + ( xTurn ? "X" : "O" );
}
let resetGame = ()=>{
    reset.innerText = "New Game";
    heading.innerHTML = "Tic Tac Toe" ;
    xTurn = true ;
    for(let b of btn){
        b.innerHTML = "";
        b.style.pointerEvents = "auto";
        b.style.backgroundColor = "#f7f7ff";
    }
}
reset.addEventListener("click" , ()=>{
    resetGame() ;
})