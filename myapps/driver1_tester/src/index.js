'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    setInterval(function(){
        if ($('mygpio').readValue() == 0) {
            console.log('driver1_tester: pressed')
            $('led-r').turnOn();
        } else {
            console.log('driver1_tester: released')
            $('led-r').turnOff();
        }
    }, 300);
});

$.end(function () {
    $('led-r').turnOff();
});
