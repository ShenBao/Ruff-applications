'use strict';

// soil moisture sensor
var moistureSensor;

// oled display
var oled;

// relay to control water pump
var relay;

// date object to record
var date;

// button
var button;

// toggle water pump
var pumpOn = 0;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
    moistureSensor = $('#soil-moisture-sensor');
    oled = $('#oled');
    relay = $('#relay');
    button = $('#button');
    oled.clear();
    oled.print(0, 0, 'Monitor starts');

    moistureSensor.on('veryWet', function() {
        console.log('Soil is very wet');
        oled.clear();
        oled.print(0, 0, 'very wet');
        relay.turnOff(function () {
            // record this moment as watering record
            date = new Date();
            oled.print(0, 2, 'Last water time:')
            oled.print(0, 4, date.toLocaleDateString());
            oled.print(0, 6, date.toLocaleTimeString());
        });
    });

    moistureSensor.on('wet', function() {
        console.log('Soil is wet');
        oled.clear();
        oled.print(0, 0, 'wet');
        relay.turnOff(function () {
            // record this moment as watering record
            date = new Date();
            oled.print(0, 2, 'Last water time:')
            oled.print(0, 4, date.toLocaleDateString());
            oled.print(0, 6, date.toLocaleTimeString());
        });
    });

    moistureSensor.on('dry', function() {
        console.log('Soil is dry');
        oled.clear();
        oled.print(0, 0, 'dry');
        oled.print(0, 2, 'watering...');
        relay.turnOn();
    });

    button.on('push', function () {
        console.log('Button pushed');
        if (pumpOn === 0) {
            relay.turnOn();
        } else {
            relay.turnOff();
        }
        pumpOn ^= 1;
    })
});

$.end(function () {
    relay.turnOff();
    oled.clear();
});
