'use strict';

// wind speed sensor
var sensor;
// oled display
var oled;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    sensor = $('#wind');
    oled = $('#oled');
    $('#led-g').turnOn();
    setInterval(function () {
        sensor.getVelocity(function (error, velocity) {
            if (error) {
                console.log(error);
                return;
            }
            velocity = velocity < 0.04 ? 0 : velocity;
            console.log('current wind speed is ', velocity, ' m/s.');
            oled.clear();
            oled.print(0, 0, 'wind speed');
            oled.print(0, 2, velocity.toString() + 'm/s');
        });
    }, 3000);
});

$.end(function () {
    oled.clear();
    $('#led-g').turnOff();
});
