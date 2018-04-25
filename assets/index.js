jQuery(function(){ "use strict";
        jQuery(".helloWorld").typed({
          strings: ["مرحبا بالعالم", "Hola Mundo", "Bonjour le monde", "Ciao mondo", "你好，世界", "Hallo Welt", "こんにちは世界","Hello world"],
          typeSpeed: 30, // typing speed
          backDelay: 500, // pause before backspacing
          loop: true, // loop on or off (true or false)
          loopCount: false, // number of loops, false = infinite
        });
		return false;
    });