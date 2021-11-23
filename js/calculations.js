var score = 0;
var a = true;
var b = true;
var c = true;
var d = true;
var e = true;
var f = true;
var g = true;
var h = true;
var i = true;
var j = true;
var k = true;
var l = true;
var m = true;

var numOfSelection = 0;
var numOfSubmission = 0;
var keywords = [];
var numbers = [];
var tags = ["#奉聖嬰之名","#數位末世","#網民無助","#天國仙納度","#2038年網路失控","#救世病毒","#靈擾現象","#魔鬼酸民","#十二工程師使徒"];

function changeColor1(id,keyword,number,points) {

    if (window[id]==true){
        if (numOfSelection==3){
        alert ("至多選擇三個迷因關鍵字");
        return;
    }
        document.getElementById(id).style.backgroundColor = "#01CD98";
        score = score + points;
        numOfSelection = numOfSelection + 1;
        window[id]=false;
        numbers.push(number);
        keywords.push(keyword);
        input.value='';
        return;
    } 
    if (window[id]==false){
        document.getElementById(id).style.backgroundColor = "black";
        document.getElementById(id).style.border = "1px solid #01CD98";
        score = score - points;
        numOfSelection = numOfSelection - 1;
        window[id]=true;
        var index = keywords.indexOf(keyword);
        if (index !== -1) {
            keywords.splice(index, 1);
        }
        var index2 = numbers.indexOf(number);
        if (index2 !== -1) {
            numbers.splice(index2, 1);
        }
        return;
    }
}  
function changeColor2(id,keyword,number,points) {

    if (window[id]==true){
        if (numOfSelection==3){
        alert ("至多選擇三個迷因關鍵字");
        return;
    }
        document.getElementById(id).style.backgroundColor = "#FE5858";
        score = score + points;
        numOfSelection = numOfSelection + 1;
        window[id]=false;
        keywords.push(keyword);
        numbers.push(number);
        input.value='';
        return;
    } 
    if (window[id]==false){
        document.getElementById(id).style.backgroundColor = "black";
        document.getElementById(id).style.border = "1px solid #FE5858";
        score = score - points;
        numOfSelection = numOfSelection - 1;
        window[id]=true;
        var index = keywords.indexOf(keyword);
        if (index !== -1) {
            keywords.splice(index, 1);
        }
        var index2 = numbers.indexOf(number);
        if (index2 !== -1) {
            numbers.splice(index2, 1);
        }
        return;
    }
} 

function changeColor3(id,points) {

    if (window[id]==true){
        document.getElementById(id).style.backgroundColor = "#FFB400";
        score = score * points;
        window[id]=false;
        input.value='';
        return;
    } 
    if (window[id]==false){
        document.getElementById(id).style.backgroundColor = "black";
        document.getElementById(id).style.border = "1px solid #FFB400";
        score = score / points;
        window[id]=true;
        return;
    }
} 

function changeColor4(id) {

    if (window[id]==true){
        document.getElementById(id).style.backgroundColor = "#1036FF";
        window[id]=false;
        inputName.value='@';
        return;
    } 
    if (window[id]==false){
        document.getElementById(id).style.backgroundColor = "black";
        document.getElementById(id).style.border = "1px solid #1036FF";
        window[id]=true;
        return;
    }
} 

function resetAnonymousButton(id){
    document.getElementById(id).style.backgroundColor = "black";
    document.getElementById(id).style.border = "1px solid #1036FF";
    window[id]=true;
}

function resetKeywordButton(){

    var keywordStatesStr = ['a','b','c','d','e','f','g','h','i','j'];
    for (let i=0;i<10;i++){
        if (document.getElementById(keywordStatesStr[i]).style.backgroundColor=="#FE5858"){
            document.getElementById(keywordStatesStr[i]).style.border = "1px solid #FE5858";
        }
        if (document.getElementById(keywordStatesStr[i]).style.backgroundColor=="#01CD98"){
            document.getElementById(keywordStatesStr[i]).style.border = "1px solid #01CD98";
        }
        if (document.getElementById(keywordStatesStr[i]).style.backgroundColor=="#FFB400"){
            document.getElementById(keywordStatesStr[i]).style.border = "1px solid #FFB400";
        }
        document.getElementById(keywordStatesStr[i]).style.backgroundColor = "black";
        window[keywordStatesStr[i]]=true;
        score = 0;
        numOfSelection = 0;
        keywords = [];

    }
}

function calculatePost() {
    if (numOfSelection < 3 && document.getElementById("input").value.length == 0) {
        alert("請選擇三個迷因關鍵字或輸入祈禱文");
        return;
    }

    if ((document.getElementById("inputName").value.length ==0 || document.getElementById("inputName").value == '@') && k==true) {
        alert("請輸入信徒名稱");
        return;
    }
    
    if (document.getElementById("input").value.length != 0) {
        alert("您已成功上傳祈禱文");
        window.location.href = 'finalPost.html';
        numOfSubmission = numOfSubmission + 1;
        let postContent = document.getElementById("input").value;
        if (document.getElementById("inputName").value.length != 0){
            localStorage.setItem('nameContent', document.getElementById("inputName").value);
        } 
        if (k==false){
            localStorage.setItem('nameContent', 'Anonymous');
        }
        localStorage.setItem('numOfSubmission', numOfSubmission);
        localStorage.setItem('postContent', postContent);
        localStorage.setItem('score', score);
        return;
    }

    if (numOfSelection == 3){
        alert("您已成功上傳祈禱文");
        window.location.href = 'finalPost.html';
        let firstArray = keywords[0];
        let secondArray = keywords[1];
        let thirdArray = keywords[2];
        let firstNumber = numbers[0];
        let secondNumber = numbers[1];
        let thirdNumber = numbers[2];
        let postContent = "&nbsp&nbsp&nbsp&nbsp&nbsp" + start[Math.floor(Math.random()*start.length)] + firstArray[Math.floor(Math.random()*firstArray.length)] + "<br>" +  "&nbsp&nbsp&nbsp&nbsp&nbsp" + secondArray[Math.floor(Math.random()*secondArray.length)] + "<br>" +  "&nbsp&nbsp&nbsp&nbsp&nbsp" +thirdArray[Math.floor(Math.random()*thirdArray.length)] + "<br><br>" + tags[firstNumber] + "&nbsp" + tags[secondNumber] + "&nbsp" + tags[thirdNumber];
        numOfSubmission = numOfSubmission + 1;
        localStorage.setItem('numOfSubmission', numOfSubmission);
        localStorage.setItem('postContent', postContent);
        localStorage.setItem('score', score);
        if (document.getElementById("inputName").value.length != 0){
            localStorage.setItem('nameContent', document.getElementById("inputName").value);
        } 
        if (k==false){
            localStorage.setItem('nameContent', 'Anonymous');
        }
        

    }
}


