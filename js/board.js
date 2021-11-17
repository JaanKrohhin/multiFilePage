
function clearD(){
    var draw = document.getElementById("board").getContext("2d");
    draw.clearRect(0,0,500,500);//x and y coorddinates then width and height
    var rect = document.getElementById("board").getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
}
// function drawLine(){
// 	var draw = document.getElementById("board").getContext("2d");
// 	draw.beginPath();
// 	draw.moveTo(50,125);//x and y
// 	draw.lineTo(200,25);
// 	draw.stroke();
// 	//white line
// 	draw.beginPath();
// 	draw.strokeStyle="white";
// 	draw.lineWidth=3;
// 	draw.moveTo(125,50);//x and y
// 	draw.lineTo(25,200);
// 	draw.stroke();
// }
// function drawCircle(){
// 	var draw = document.getElementById("board").getContext("2d");

// 	draw.beginPath();
// 	draw.arc(100,100,40,0,2*Math.PI,true);//x,y, R
// 	draw.stroke();
// 	//filled circle
// 	draw.beginPath();
// 	draw.fillStyle="yellow";
// 	draw.arc(40,40,20,0,2*Math.PI,true);//x,y, R
// 	draw.stroke();
// 	draw.fill();
// }
// function drawSquare(){
// 	var draw = document.getElementById("board").getContext("2d");
// 	var w=document.getElementById("width").value;
// 	var h=document.getElementById("height").value;
// 	draw.fillStyle="green";
// 	draw.fillRect(75,75,w,h);//x,y height, wdith
// }

function drawFace() {
    var draw = document.getElementById("board").getContext("2d");
    draw.fillStyle="green"
    //head
    draw.fillRect(120,35,60,27)
    //face
    draw.fillStyle="black"
    draw.fillRect(127,40,15,7)
    draw.fillRect(157,40,15,7)
    draw.fillRect(142,47,15,8)
    draw.fillRect(142,52,-8,8)
    draw.fillRect(157,52,8,8)
}
function drawBody() {
    var draw = document.getElementById("board").getContext("2d");
    draw.fillStyle="ForestGreen"
    //body
    draw.fillRect(125,60,50,50)
    draw.fillStyle="darkgreen"
    //legs
    draw.fillRect(115,105,25,17)
    draw.fillRect(160,105,25,17)

    draw.fillStyle="black"
    draw.fillRect(115,122,25,5)
    draw.fillRect(160,122,25,5)
}
function drawLightning() {
    var draw = document.getElementById("board").getContext("2d");
    draw.fillStyle="DeepSkyBlue"

    draw.fillRect(105,50,10,23)
    draw.fillRect(105,90,8,15)

    draw.fillRect(180,80,9,14)
    draw.fillRect(181,50,5,20)
    draw.fillRect(190,65,10,10)

    draw.fillRect(106,26,50,5)
    draw.fillRect(160,28,23, 4)

    draw.fillRect(130,64, 30, 6)
    draw.fillRect(170,75, -20, 8)
    draw.fillRect(135,90, 25, 7)
}
function backOfThePic() {
    var draw = document.getElementById("board").getContext("2d");
    draw.fillStyle="LightSeaGreen"
    draw.fillRect(0,0,300,100)
    draw.fillStyle="DarkKhaki"
    draw.fillRect(0,100,300,50)
    draw.fillStyle="white"
    draw.fillRect(20,20,50,20)
    draw.fillRect(130,6,80,15)
    draw.fillRect(200,25,46,19)
}
function drawCreeper(){
    drawBody()
    drawFace()
    drawLightning()
}
function Full() {
    backOfThePic()
    drawCreeper()
}
//---------------------------------------------------------
function clearD2(){
    var draw = document.getElementById("board2").getContext("2d");
    draw.clearRect(0,0,500,500);//x and y coorddinates then width and height
}
function Full2() {
    head2()
    body2()
    legs()
    buttons()
    keychain()
}
function head2() {
    var draw = document.getElementById("board2").getContext("2d");
    draw.fillStyle="CornflowerBlue"
    draw.fillRect(125,90,10,-3)
    draw.fillRect(145,90,20,-3)
    draw.fillRect(175,90,10,-3)
    draw.beginPath()
    draw.arc(155,87,30,0,Math.PI,true)
    draw.closePath()
    draw.fill()
    draw.clearRect(135,57,60,5)
    draw.fillStyle="CornflowerBlue"
    draw.fillRect(149,63,14,-7)
}

function legs() {
    var draw = document.getElementById("board2").getContext("2d");
    draw.fillStyle="AliceBlue"
    draw.fillRect(125,95,-3,10)
    draw.fillRect(185,95,3,10)

    draw.fillRect(102,92,20,45)
    draw.beginPath()
    draw.moveTo(102,137)
    draw.lineTo(82,155)
    draw.lineTo(121,155)
    draw.lineTo(122,135)
    draw.closePath()
    draw.fill()

    draw.fillRect(188,92,20,45)
    draw.beginPath()
    draw.moveTo(208,137)
    draw.lineTo(228,155)
    draw.lineTo(189,155)
    draw.lineTo(188,135)
    draw.closePath()
    draw.fill()
}
function body2() {
    var draw = document.getElementById("board2").getContext("2d");
    draw.fillStyle="white"
    draw.lineWidth=1
    draw.fillRect(125,90,60,45)

    draw.fillRect(135,90,10,-3)
    draw.fillRect(175,90,-10,-3)

    draw.fillStyle="AliceBlue"
    draw.beginPath()
    draw.moveTo(125,135)
    draw.lineTo(140,145)
    draw.lineTo(170,145)
    draw.lineTo(185,135)
    draw.lineTo(125,135)
    draw.closePath()
    draw.fill()
}
function buttons() {
    var draw = document.getElementById("board2").getContext("2d");
    draw.fillStyle="CornflowerBlue"
    draw.fillRect(140,95,30,5)
    draw.fillRect(140,105,30,5)
    draw.fillRect(148,115,15,15)

    draw.fillStyle="Gainsboro"
    draw.beginPath()
    draw.arc(161,75,5,0,2*Math.PI,true)
    draw.closePath()
    draw.fill()
    draw.strokeStyle="black"
    draw.beginPath()
    draw.arc(161,75,2,0,2*Math.PI,true)
    draw.closePath()
    draw.stroke()

    draw.strokeStyle="FireBrick"
    draw.fillStyle="FireBrick"
    draw.beginPath()
    draw.arc(140,83,2,0,2*Math.PI,true)
    draw.arc(145,83,2,0,2*Math.PI,true)
    draw.closePath()
    draw.fill()
    draw.stroke()

}
function keychain() {
    var draw = document.getElementById("board2").getContext("2d");
    draw.fillStyle="Lavender"
    draw.fillRect(151,56,10,-7)
    draw.beginPath()
    draw.lineJoin="round"
    draw.strokeStyle="grey"
    draw.lineWidth=3
    draw.moveTo(161,49)
    draw.lineTo(135,49)
    draw.lineTo(90,95)
    draw.lineTo(85,95)
    draw.stroke()

    draw.strokeStyle="Lavender"
    draw.beginPath()
    draw.arc(65,95,20,0,2*Math.PI,true)
    draw.closePath()
    draw.stroke()

    draw.strokeStyle="Silver"
    draw.beginPath()
    draw.arc(65,95,18,0,2*Math.PI,true)
    draw.closePath()
    draw.stroke()
}
