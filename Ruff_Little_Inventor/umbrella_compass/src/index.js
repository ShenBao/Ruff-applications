'use strict';

// oled
var oled;
// compass
var compass;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-g').turnOn();

    oled = $('#oled');
    compass = $('#compass');

    oled.clear();

    setInterval(function () {
        compass.getHeading(function (error, value) {
        if (error) {
            console.log(error);
            return;
        }
        console.log(value);
        oled.clear();
        oled.print(0, 0, 'Value: ' + value.toString());
        oled.print(0, 2, 'Direction:');
        if (value >= 338 || value <= 23) {
            oled.print(0, 4, 'North');
        } else if (value > 23 && value <= 68) {
            oled.print(0, 4, 'Northeast');
        } else if (value > 68 && value <= 113) {
            oled.print(0, 4, 'East');
        } else if (value > 113 && value <= 158) {
            oled.print(0, 4, 'Southeast');
        } else if (value > 158 && value <= 203) {
            oled.print(0, 4, 'South');
        } else if (value > 203 && value <= 248) {
            oled.print(0, 4, 'Southwest');
        } else if (value > 248 && value <= 293) {
            oled.print(0, 4, 'West');
        } else {
            oled.print(0, 4, 'Northwest');
        }
        });
    }, 4000);
});

$.end(function () {
    $('#led-g').turnOff();
});
