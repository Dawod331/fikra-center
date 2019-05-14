$(window).scroll(function(){

let scrolTop = $(window).scrollTop();

$(".completion").css("background-position-y",-(scrolTop/2)+"px");


});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarNav").style.top = "0";
  } else {
    document.getElementById("navbarNav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
$(window).read(function(){
$("card").mouseenter(function(){
  $("card-img-top").addClass("tra2");

});

});
