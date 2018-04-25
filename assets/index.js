let introArray = ["Hello world","مرحبا بالعالم", "Hola Mundo", "Bonjour le monde", "Ciao mondo", "你好，世界", "Hallo Welt", "こんにちは世界"];

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
