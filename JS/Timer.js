var sec=601
const intervalname1=setInterval(function(){
    sec=sec-1;
    document.getElementsByClassName("min")[0].innerText=parseInt(sec/60)
    document.getElementsByClassName("sec")[0].innerText=sec%60
    document
},1000)
setTimeout(function(){
    clearInterval(intervalname1)
},600000)