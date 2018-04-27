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



$(document).ready(function() {
    TypeIntro();
});

$("#subtitle").hide().delay(3000).fadeIn(5000);
$("#scroll-downs").hide().delay(5000).fadeIn(5000);
$(".magic").hide().delay(7000).fadeIn(5000);

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

$(".nav3").on("click", function () {
    document.querySelector("#resume").scrollIntoView({
        behavior: "smooth"
    });
});

$(".nav4").on("click", function () {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});

$("#nav-headshot").on("click", function () {
    document.querySelector("#landing").scrollIntoView({
        behavior: "smooth"
    });
});

$("#scroll-downs").on("click", function () {
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});