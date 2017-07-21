'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    var adc = $('myadc');
    setInterval(function(){
        console.log("raw|v = " + adc.read() + "," + adc.readVoltage());
    }, 1000);
});

$.end(function () {
});
