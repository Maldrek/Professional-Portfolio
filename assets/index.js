function TypeIntro() {

    new TypeIt('#typing', {
        speed: 100,
        startDelay: 250,
        loopDelay: 2000,
        lifeLike: true,
        autoStart: true,
        cursor: true,
        cursorSpeed: 750,
        nextStringDelay: 2000,
        loop: true,
        strings: ["Hello World", "مرحبا بالعالم", "Hola Mundo", "Bonjour le Monde", "こんにちは世界", "Ciao Mondo", "你好 世界", "Hallo Welt"],
        breakLines: false
    });
}

M.AutoInit();

$(document).ready(function () {
    TypeIntro();
});

$("#subtitle").hide().delay(3000).fadeIn(5000);
$("#scroll-downs").hide().delay(7000).fadeIn(5000);
$(".magic").hide().delay(5000).fadeIn(5000);

$(".nav1").on("click", function () {
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});

$(".nav2").on("click", function () {
    document.querySelector("#portfolio").scrollIntoView({
        behavior: "smooth"
    });
});

$(".nav4").on("click", function () {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});

$(".brandlogo").on("click", function () {
    document.querySelector("#landing").scrollIntoView({
        behavior: "smooth"
    });
});

$("#scroll-downs").on("click", function () {
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var options = {
        edge: "left",
        draggable: true
    };
    var instances = M.Sidenav.init(elems, options);
});

$( document ).ready(function() {
    $('.carousel').carousel();
  });

$('#carouselNext').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
 });

 $('#carouselPrevious').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
 });

 $(".carousel-item").click(function() {
     return;
 })