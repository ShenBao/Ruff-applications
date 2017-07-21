'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    // Blink interval in ms
    var interval = 2000;

    // Total blink times
    var max_blink_times = 20;

    var blinkTimes = 0;

    function blinkLED(){
        // Terminate process after blinking LED for max allowed times
        if (blinkTimes >= max_blink_times){
            process.exit(0);
        }

        blinkTimes++;
        console.log("[Device] #" + blinkTimes + " Blink LED \n");
        
        //$('#led').turnOn() works in the say way as setRGB([0xff, 0xff, 0xff]);
        $('#rgbled').setRGB([0x00, 0xff, 0x00]);

        setTimeout(function(){
            //$('#led').turnOff() works the same way;
            $('#rgbled').setRGB([0x00, 0x00, 0x00]);
            console.log("LED turn off");
        }, 200)
    }

    //Blink LED every other interval times
    setInterval(blinkLED, interval);
});

$.end(function () {
    $('#rgbled').turnOff();
});
