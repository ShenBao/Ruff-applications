'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    var relay = $('relay-1c');
    setInterval(function(){
        console.log("relay is " + relay.isOn());
        relay.isOn() ? relay.turnOff() : relay.turnOn();
    },2000);
});

$.end(function () {
});
