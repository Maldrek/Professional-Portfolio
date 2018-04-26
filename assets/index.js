// strings: ["Hello world", "مرحبا بالعالم", "Hola Mundo", "Bonjour le monde", "Ciao mondo", "你好，世界", "Hallo Welt", "こんにちは世界"],

function TypeIntro() {

    new TypeIt('#typing', {
        speed: 150,
        startDelay: 250,
        loopDelay: 750,
        lifeLike: true,
        autoStart: true,
        cursor: true,
        cursorSpeed: 750,
        nextStringDelay: 1500,
        loop: true,
        strings: ["Hello World", "مرحبا بالعالم", "Hola Mundo", "Bonjour le Monde", "Ciao Mondo", "你好 世界", "Hallo Welt", "こんにちは世界"],
        breakLines: false
    });
}

$(document).ready(function() {
    TypeIntro();
});

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
