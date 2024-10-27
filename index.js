let boxs = document.querySelectorAll(".box");
let restartbtn = document.querySelector("#restart");
let newgamebtn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let gamehide = document.querySelector(".game_hide");

//gamehide.classList.add("game1");
let turn_0 = true;


let wincondition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxs.forEach(a) //a= parameter

function a(b) { //b=parameter
    b.addEventListener("click", () => {
        //b.innerHTML="0";
        if (turn_0) {
            b.innerHTML = "0";
            turn_0 = false;
        }
        else {
            b.innerHTML = "X";
            turn_0 = true;
        }
        checkWinner();
    }
    )
}

const checkWinner = () => {

    for (let pattern of wincondition) {
        let pos1val = boxs[pattern[0]].innerHTML;
        let pos2val = boxs[pattern[1]].innerHTML;
        let pos3val = boxs[pattern[2]].innerHTML;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
}

function showWinner(x) {
    // alert("congratulation winner is Player " + x);
    msg.innerText = " Cogratulation! Winner is " + (x);
    disablebox();
   msgcontainer.classList.remove("hide");
   gamehide.style.display='none';
  

}

const disablebox = () => {
    for (let p of boxs) {
        p.disabled = true;
    
    }
}
function enablebox() {
    for (let p of boxs) {
        p.disabled = false;
        p.innerHTML = "";
    }
}
restartbtn.addEventListener("click", resetgame);

function resetgame() {
    turn_0 = true;
    enablebox();
    msgcontainer.classList.add("hide");
    gamehide.style.display='block';
}

newgamebtn.addEventListener("click", resetgame);

