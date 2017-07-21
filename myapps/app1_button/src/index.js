'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    var w = 0;
    var isPressed = false;
    var isrouting = false;


    $('hc-sr501').on()

    $('button').on('push', function() {
//        $('led-r').turnOn();
//        $('led-g').turnOn();
//        $('led-b').turnOn();
        console.log('in button key push');

        isPressed = true;

        $('relay-1c').turnOn();
    });

    $('button').on('release', function() {
        $('led-r').turnOff();
        $('led-g').turnOff();
        $('led-b').turnOff();
        console.log('in button key release');

        $('relay-1c').turnOff();

        isPressed = false;
        isrouting = false;
        w=0;
    });

    setInterval(function(){
        if(isPressed) {
            w+=100;
            if(isrouting == false) {
                if(w > 0) {
                    $('led-r').turnOn();
                }
                if(w > 1500) {
                 $('led-b').turnOn();
                }
                if(w > 3000) {
                 $('led-g').turnOn();
                }
                if(w>5000) {
                    isrouting = true;
                }
            }
        }
    }, 100);

    setInterval(function() {
        if(isrouting) {
            var t = w/100%3;
            if (t == 0) {
                $('led-r').turnOn();
                $('led-b').turnOff();
                $('led-g').turnOff();
            }
            if (t == 1) {
                $('led-r').turnOff();
                $('led-b').turnOn();
                $('led-g').turnOff();
            }
            if (t == 2) {
                $('led-r').turnOff();
                $('led-b').turnOff();
                $('led-g').turnOn();
            }
        }
    }, 50);
});

$.end(function () {
    $('led-r').turnOff();
});



















