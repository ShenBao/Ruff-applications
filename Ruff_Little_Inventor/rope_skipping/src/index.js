'use strict';
// motor controller
var controller;
// button to controll
var button;
// motor status indicator
var status = 0;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-g').turnOn();
    controller = $('#controller');
    button = $('#button');
    button.on('push', function () {
        console.log('button pushed');
        if (status === 0) {
            controller.forwardRotateA(0.5);
            controller.forwardRotateB(0.5);
        } else {
            controller.stopRotateA();
            controller.stopRotateB();
        }
        status ^= 1;
    })
});

$.end(function () {
    controller.stopRotateA();
    controller.stopRotateB();
    $('#led-g').turnOff();
});
