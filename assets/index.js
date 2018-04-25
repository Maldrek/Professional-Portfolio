$(document).ready(function(){

    let introArray = [];

    introArray[0] = "Hallo Welt";
    $(introArray[0]).addClass("greetingOne");
    $(introArray[0]).attr("id", "greeting");
    $(introArray).append(introArray[0]);

    introArray[1] = "مرحبا بالعال";
    $(introArray[1]).addClass("greetingTwo");
    $(introArray[1]).attr("id", "greeting");
    $(introArray).append(introArray[1]);

    introArray[2] = "Hola Mundo";
    $(introArray[2]).addClass("greetingthree");
    $(introArray[2]).attr("id", "greeting");
    $(introArray).append(introArray[2]);

    introArray[3] = "Bonjour le monde";
    $(introArray[3]).addClass("greetingFour");
    $(introArray[3]).attr("id", "greeting");
    $(introArray).append(introArray[3]);

    introArray[4] = "你好，世界";
    $(introArray[4]).addClass("greetingFive");
    $(introArray[4]).attr("id", "greeting");
    $(introArray).append(introArray[4]);

    introArray[5] = "Ciao mondo";
    $(introArray[5]).addClass("greetingSix");
    $(introArray[5]).attr("id", "greeting");
    $(introArray).append(introArray[5]);

    introArray[6] = "こんにちは世界";
    $(introArray[6]).addClass("greetingSeven");
    $(introArray[6]).attr("id", "greeting");
    $(introArray).append(introArray[6]);

    introArray[7] = "Hello world";
    $(introArray[7]).addClass("greetingEight");
    $(introArray[7]).attr("id", "greeting");
    $(introArray).append(introArray[7]);

    $("#landing").append(introArray);
    $(introArray).hide();

    console.log(introArray);
});

// let introArray = ["مرحبا بالعالم", "Hola Mundo", "Bonjour le monde", "Ciao mondo", "你好，世界", "Hallo Welt", "こんにちは世界","Hello world"];

