'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    setInterval(function(){
        console.log($('gy-30').getIlluminance());
    }, 200);

    $('led-r').turnOn();
});

$.end(function () {
    $('led-r').turnOff();
});
