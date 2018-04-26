// strings: ["Hello world", "مرحبا بالعالم", "Hola Mundo", "Bonjour le monde", "Ciao mondo", "你好，世界", "Hallo Welt", "こんにちは世界"],
let TypeIt = require("typeit");

function TypeIntro() {

    new TypeIt('#typing', {
        speed: 750,
        lifeLike: true,
        autoStart: true,
        cursor: true,
        loop: true,
        strings: ["Hello world", "مرحبا بالعالم", "Hola Mundo", "Bonjour le monde", "Ciao mondo", "你好，世界", "Hallo Welt", "こんにちは世界"],
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
