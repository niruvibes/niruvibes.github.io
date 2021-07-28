/*
var nystories = document.querySelector("p").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / nystories);
    console.log(opac);
  document.body.style.background = "linear-gradient(rgba(225, 225, 225, " + opac + "), rgba(225, 225, 225, " + opac + ")), url(assets/bg4.gif) no-repeat";
  document.body.style.backgroundSize = "100%";
  }
} */

window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
     setTimeout(function() {
        location.href = "/skills-forscroll.html";
     }, 10)
  }
};