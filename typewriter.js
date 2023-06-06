let i=1;
let toType;
let div;
var m6c=["#9EDBF9","#B689C8","#FFC261","#FDF6AF","#F3B6CF","#5e4fa2"][Math.floor(Math.random() * 6)]; // #ebeff1. Choose random accent colour

function typewriter() {
    if (div==undefined) {
        div=document.getElementById('myName');
    }
    if (toType==undefined) {
        // toType=div.innerHTML;
        toType="hi, i'm david. <br   /> i'm a mechanical engineer in BC. <br   /> nice to meet you!";
    }
    
    div.innerHTML=toType.slice(0,i).replace(/(?!<.*?>)<.*/,"").replace(/(?<=i'm )(da?v?i?d?\.?)/,"<span style=\"color:"+m6c+"\">$1</span>") + '_';
    // console.log(i)
    i++;
    if (i<=toType.length) {
        setTimeout(function() {typewriter()},50);
    }
    else {loop()};
}

window.onload = function() { setTimeout(function(){typewriter()},500) };