let turn = "img/tick.png";
function klick(img) {
    img.src=turn;
    if (check()){
        alert("You win");
    }
    /*if (turn== "img/tick.png"){
        turn="img/toe.png";
    }else  {
        turn = "img/tick.png";
    }*/
    if (squaresUsed()){
        alert("Game over");
    }
}

function kChoice(pic) {
    pic.style.border="solid #5A18C9 5px";
    if (pic.id=="choice1") {
        document.getElementById("choice2").style.border="initial";
    } else {
        document.getElementById("choice1").style.border="initial";
    }
    turn=pic.src;
}
//checks all the pics and returns false if there is an empty slot on the board
function squaresUsed() {
    let imgs=document.images;
    for (let i=0; i<imgs.length;i++){
        if (imgs[i].src.split("/").pop()=="tacks.png"){
            return false;
        }
    }
    return true;
}

//getting the winner
function winner(nr) {
    let outcome=document.getElementById("pic"+nr).src;
    outcome=outcome.split("/").pop();
    return outcome;
}
function checkWin(a,b,c,end) {
    end=end.split("/").pop();
    //ab,c - pic numbers, end - address
    if (winner(a)==end && winner(b)==end && winner(c)==end){return true}
    else {return false;}
}
function check() {
    if (checkWin(1,2,3,turn)){return true;}
    if (checkWin(4,5,6,turn)){return true;}
    if (checkWin(7,8,9,turn)){return true;}
    if (checkWin(2,5,8,turn)){return true;}
    if (checkWin(3,6,9,turn)){return true;}
    if (checkWin(1,5,9,turn)){return true;}
    if (checkWin(3,5,7,turn)){return true;}
    if (checkWin(1,4,7,turn)){return true;}
    return false;
}