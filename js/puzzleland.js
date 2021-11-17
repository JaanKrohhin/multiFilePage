let turn = "content/Task8/img/tacks.png";
let counter = 0;
let identity = "";
let images = [];
function klick(img) {
    img.src=turn;
    if (checkWin()){
        alert("You solved the puzzle");
    }
}

function kChoice(pic) {
    pic.style.border="solid #5A18C9 5px";
    turn=pic.src;
    console.log(pic.id)
    if (identity!="") {
        document.getElementById(identity).style.border="initial"
    }
    identity=pic.id;


}

function checkWin() {
    for (let i = 1; i < 13; i++) {
        intel = document.getElementById("pic"+i.toString()).src.split('/').pop();
        if ("part"+i.toString()+".jpg"==document.getElementById("pic"+i.toString()).src.split('/').pop()) {
            counter++;
            if (counter==12) {
                counter=0;
                return true;
            }
        }
    }
    counter=0;
    return false
}
function rng() {
    console.log("hello")
    for (let index = 0; index < 12; index++) {
        images[index]="content/Task8/img/puzzle/part"+(index+1).toString()+".jpg";
    }
    shuffle(images)
    for (let i = 1; i < 13; i++) {
        document.getElementById("part"+i.toString()).src=images[i-1]
    }
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

