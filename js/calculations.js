var score = 0;
var a = true;
var b = true;
var c = true;
var d = true;
var e = true;
var f = true;
var g = true;
var h = true;
var numOfSelection = 0;
var numOfSubmission = 0;
var keywords = [];

function changeColor1(id,keyword,points) {

    if (window[id]==true){
        if (numOfSelection==3){
        alert ("至多選擇三個迷因關鍵字 Choose up to three meme-keywords");
        return;
    }
        document.getElementById(id).style.backgroundColor = "#01CD98";
        score = score + points;
        numOfSelection = numOfSelection + 1;
        window[id]=false;
        keywords.push(keyword);
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
        return;
    }
}  
function changeColor2(id,keyword,points) {

    if (window[id]==true){
        if (numOfSelection==3){
        alert ("至多選擇三個迷因關鍵字 Choose up to three meme-keywords");
        return;
    }
        document.getElementById(id).style.backgroundColor = "#FE5858";
        score = score + points;
        numOfSelection = numOfSelection + 1;
        window[id]=false;
        keywords.push(keyword);
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
        return;
    }
} 

function changeColor3(id,points) {

    if (window[id]==true){
        document.getElementById(id).style.backgroundColor = "#FFB400";
        score = score * points;
        window[id]=false;
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

function disableLink(){
    document.getElementById('submit').disabled=true;
    document.getElementById('submit').removeAttribute('href');    
}

function showLink(){
    document.getElementById('submit').disabled=false;
    document.getElementById('submit').href = "finalPost.html";
}

function calculatePost() {
    if (numOfSelection < 3) {
        alert("請選擇三個迷因關鍵字 Please choose three meme-keywords");
        return;
    }
    if (numOfSelection = 3){
        let key = keywords[0]*100 + keywords[1]*10 + keywords[2];
        let postContent = god1.get(key);
        numOfSubmission = numOfSubmission + 1;
        localStorage.setItem('numOfSubmission', numOfSubmission);
        localStorage.setItem('postContent', postContent);
        localStorage.setItem('score', score);
        alert("您已成功上傳祈禱文 Your prayer was sent");
        window.location.href = 'finalPost.html';

    }
}


