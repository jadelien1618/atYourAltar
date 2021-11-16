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
var numOfSelection = 0;
var numOfSubmission = 0;
var keywords = [];

function changeColor1(id,keyword,points) {

    if (window[id]==true){
        if (numOfSelection==3){
        alert ("至多選擇三個迷因關鍵字");
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
        alert ("至多選擇三個迷因關鍵字");
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

    }

    if (numOfSelection == 3){
        alert("您已成功上傳祈禱文");
        window.location.href = 'finalPost.html';
        let key = keywords[0]*100 + keywords[1]*10 + keywords[2];
        let postContent = god1.get(key);
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


