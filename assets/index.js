$(document).ready(function(){

// taken from https://github.com/mattboldt/typed.js/
// let typed = require("typed.js");

// // let introArray = ["Hello world","مرحبا بالعالم", "Hola Mundo", "Bonjour le monde", "Ciao mondo", "你好，世界", "Hallo Welt", "こんにちは世界"];

// import Typed from 'typed.js';

// var options = {
//     strings: ["Hello world","مرحبا بالعالم", "Hola Mundo", "Bonjour le monde", "Ciao mondo", "你好，世界", "Hallo Welt", "こんにちは世界"],
//     typeSpeed: 40
//   }

// let typed = new Typed("#intro", options);

$(".nav1").on("click", function() {
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});

$(".nav2").on("click", function() {
    document.querySelector("#portfolio").scrollIntoView({
        behavior: "smooth"
    });
});

$(".nav3").on("click", function() {
    document.querySelector("#resume").scrollIntoView({
        behavior: "smooth"
    });
});

$(".nav4").on("click", function() {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});

$("#nav-headshot").on("click", function() {
    document.querySelector("#landing").scrollIntoView({
        behavior: "smooth"
    });
});

});