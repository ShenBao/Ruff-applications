'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('btngpio').on('pressed', function() {
        $('led-r').turnOn();
        console.log('pressed: ' + $('btngpio').read());
    });

    $('btngpio').on('released', function() {
        $('led-r').turnOff();
        console.log('released' + $('btngpio').read());
    });
});

$.end(function () {
    $('led-r').turnOff();
});
