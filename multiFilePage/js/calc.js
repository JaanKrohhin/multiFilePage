const dollar = 1.16;
const rubles =84.20;
const pounds=0.85;
const yen=128.90;
function change(event) {
//    if (validate('kogus')){
        let amount=document.getElementById('kogus');
        let answer = document.getElementById('answer');
        //multiplies
        if(event.target.id==='dollar'){
            answer.innerHTML=calc(amount.value, dollar)+" $"
            document.getElementById('pic1').src="content/Task7Calculator/img/dollar.png"
        }if(event.target.id==='ruble'){
            answer.innerHTML=calc(amount.value, rubles)+" ₽"
            document.getElementById('pic1').src="content/Task7Calculator/img/ruble.png"
        }if(event.target.id==='yen'){
            answer.innerHTML=calc(amount.value, yen)+" ¥"
            document.getElementById('pic1').src="content/Task7Calculator/img/yen.png"
        }if(event.target.id==='pounds'){
            answer.innerHTML=calc(amount.value, pounds)+" £"
            document.getElementById('pic1').src="content/Task7Calculator/img/pounds.png"
        }
 //   }
}
function calc(val,currency) {
    return (val*currency).toFixed(2)//symbols after comma
}
function selectChange(event) {
 //   if (validate('kogus2')==true){
        let amount=document.getElementById('kogus2');
        let answer = document.getElementById('answer2');
        if(event.target.value==='dollar'){
            answer.innerHTML=calc(amount.value, dollar)+" $"
            document.getElementById('pic2').src="content/Task7Calculator/img/dollar.png"
        }if(event.target.value==='ruble'){
            answer.innerHTML=calc(amount.value, rubles)+" ₽"
            document.getElementById('pic2').src="content/Task7Calculator/img/ruble.png"
        }if(event.target.value==='yen'){
            answer.innerHTML=calc(amount.value, yen)+" ¥"
            document.getElementById('pic2').src="content/Task7Calculator/img/yen.png"
        }if(event.target.value==='pounds'){
            answer.innerHTML=calc(amount.value, pounds)+" £"
            document.getElementById('pic2').src="content/Task7Calculator/img/pounds.png"
        }if(event.target.value==='nothing'){
            answer.innerHTML='The answer goes here...'
            document.getElementById('pic2').src="content/Task7Calculator/img/none.png"
        }
 //   }
}
/*function validate(id) {
    if (ducument.getElementById(id).value===parseInt(id) && Math.sign(ducument.getElementById(id).value)==1 ){
        return true
    }else {
        return false
    }
}*/
function validateForm() {
    let x = document.forms["cal1"]["kogus"].value;
    if (x == "") {
        alert("Field must not be empty");
        return false;
    }
}
function inputCurrency() {
    let amount=document.getElementById('kogus3').value;
    let inputText = document.getElementById('curName').value;
    let answer = document.getElementById('answer3');
    switch (inputText) {
        case 'dollar':answer.innerHTML=calc(amount, dollar)+" $"
        document.getElementById('pic3').src="content/Task7Calculator/img/dollar.png"
        break;
        case 'ruble': answer.innerHTML=calc(amount, rubles)+" ₽"
        document.getElementById('pic3').src="content/Task7Calculator/img/ruble.png"
        break;
        case 'yen': answer.innerHTML=calc(amount, yen)+" ¥"
        document.getElementById('pic3').src="content/Task7Calculator/img/yen.png"
        break;
        case 'pounds':answer.innerHTML=calc(amount, pounds)+" £"
        document.getElementById('pic3').src="content/Task7Calculator/img/pounds.png"
        break;
        case '':answer.innerHTML='The answer goes here.........'
        document.getElementById('pic3').src="content/Task7Calculator/img/none.png"
        break;
    }
}
function timeCon() {
    var time ={"1":60,"2":60,"3":24}
    var timeA=document.getElementById('timeA')
    var timeB=document.getElementById('timeB')
    
    console.log(timeA.selectedOptions)
    console.log(timeB.options[timeB.selectedIndex].value)
    for (let i = parseInt(document.getElementById('timeA').value,10); i < parseInt(document.getElementById('timeB').value,10); i++) {
        
    }
}
function dateDiv() {
    console.log(document.getElementById('dateA').value)
    if (document.getElementById('dateA').value == '' || document.getElementById('dateB').value == '') {
        alert('You must write a date in!')
    }else{
        var dateA = new Date(document.getElementById('dateA').value)
        var dateB = new Date(document.getElementById('dateB').value)
        var ans = Math.abs((dateA.getTime()-dateB.getTime())/(1000*60*60*24))
        document.getElementById('answerD').innerHTML='The difference is '
        console.log((dateB.getMonth()+12*dateB.getFullYear())-(dateA.getMonth()+12*dateA.getFullYear()))
        if (Math.floor(ans/31)>0) {
            document.getElementById('answerD').innerHTML+=(Math.floor(ans/31)-(Math.floor(Math.floor(ans/31)/12))*12).toString()+' month(s) '
        }
        if (Math.floor(ans/7)-(Math.floor(ans/31)*4)>0) {
            document.getElementById('answerD').innerHTML+=Math.floor(ans/7)-(Math.floor(ans/31)*4).toString()+' week(s) '
        }
        if ((ans%7).toFixed(0)>0) {
            document.getElementById('answerD').innerHTML+=(ans%7).toFixed(0).toString()+' day(s)'
        }
        if (dateA.getTime() == dateB.getTime()) {
            document.getElementById('answerD').innerHTML='It is the same day'
        }
    }
}