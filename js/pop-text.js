// var x = document.getElementById("UserID");
// var IDArrray = ["|","D|","De|","Des|","Desi|","Desig|","Design|","Designe|","Designer|","Designe|","Design|","Desig|","Desi|","Des|","De|","D|","|"]
var IDArrray = ["🎨 Visual Art","💻 Creative Coding","🕹️ Human-computer Interaction","🎮 Game","📖 Philosophy","💿 Digital Media"]
var x = document.querySelector("#UserID");
var y=document.getElementById("UserID");
// var x = getComputedStyle(y, ':before').content;

var i = 0;
var j = 0;
setInterval(
    function(){
        if (j==0){
            x.setAttribute('data-attr', "|");  
            j=1; 
        } else{
            x.setAttribute('data-attr', "");
            j=0;
        }
    },100
)
setInterval(
    function(){
        if (i < IDArrray.length){
            y.innerHTML = IDArrray[i]
            i++;
        }else{
            y.innerHTML = IDArrray[0]
            i = 0;
        }
        
    },1200
)