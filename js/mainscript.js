
var h = window.innerHeight/2 - window.innerHeight/8;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("nav-box").style.visibility = "hidden";
    document.getElementById("menu-img").style.visibility = "visible";
    document.getElementById("img-menu").style.animation = "sizing 1s linear";
    document.getElementById("circle").style.animation = "spinning 15s linear infinite";
  } else{
    document.getElementById("nav-box").style.visibility = "visible";
    document.getElementById("menu-img").style.visibility = "hidden";
    document.getElementById("circle").style.animation = "none";
    document.getElementById("img-menu").style.animation = "none";
  }
  if (document.body.scrollTop >= h || document.documentElement.scrollTop >= h) {
    document.getElementById("intro-page").style.visibility = "hidden";
  } else{
    document.getElementById("intro-page").style.visibility = "visible";
  }
}