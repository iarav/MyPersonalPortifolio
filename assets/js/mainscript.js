
var h = window.innerHeight/2 - window.innerHeight/8;
var professionH = window.innerHeight/8;
var menuAberto = false;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
  //   document.getElementById("nav-box").style.visibility = "hidden";
  //   document.getElementById("menu-img").style.visibility = "visible";
  //   document.getElementById("img-menu").style.animation = "sizing 1s linear";
  //   document.getElementById("circle").style.animation = "spinning 15s linear infinite";
  // } else{
  //   document.getElementById("nav-box").style.visibility = "visible";
  //   document.getElementById("menu-img").style.visibility = "hidden";
  //   document.getElementById("circle").style.animation = "none";
  //   document.getElementById("img-menu").style.animation = "none";
  // }
  if (document.body.scrollTop >= h || document.documentElement.scrollTop >= h) {
    document.getElementById("intro-page").style.visibility = "hidden";
    if(menuAberto==true){
      document.getElementById("nav-box-hor").style.visibility = "visible";
    }
  } else{
    document.getElementById("intro-page").style.visibility = "visible";
    if(menuAberto==true){
      document.getElementById("nav-box-hor").style.visibility = "visible";
    }
  }

  if (document.body.scrollTop >= professionH || document.documentElement.scrollTop >= professionH) {
    document.getElementById("cover-profession").style.animation = "enterFromTop 3s linear";
    document.getElementById("cover-profession").style.height = "0vh";
  } else{
    document.getElementById("cover-profession").style.animation = "none";
    document.getElementById("cover-profession").style.height = "30vh";
  }

}

function abrirMenu(){
  var navbox = document.getElementById("nav-box-hor").style;
  navbox.visibility = "visible";
  menuAberto=true;
}

function fecharMenu(){
  var navbox = document.getElementById("nav-box-hor").style;
  navbox.visibility = "hidden";
  menuAberto=false;
}