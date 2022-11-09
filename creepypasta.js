var intro = document.getElementsByClassName("introduction");
var tagz = document.getElementsByTagName("yuu");
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var textColorList = ['#000000', '#ffffff', '#00ff00', '#ff0000'];
var bgcolorlist = ['#FFFFFF', '#000000', '#298ACC', '#B079E0'];
const body = document.getElementsByTagName("body")[0];
console.log(intro);
window.onload = function(){
    intro[0].style.color = getRandomColor();
    elem.style.color = getRandomColor();
}
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime();
  const elem = document.createElement("div");
  body.append(elem);
  elem.innerHTML = "...";
  elem.style.textAlign = "center";
  elem.style.fontFamily = "Scream Real";
  elem.style.textShadow = "2px 2px 2px #ff0000";
  window.addEventListener("click",(e)=>{
      elem.style.display = "none";
      e.stopPropagation();
  })
  window.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 55: elem.style.display = "block";
    }
});