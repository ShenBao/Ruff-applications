var assert = require('assert');
var path = require('path');
var test = require('test');

var driverRunner = require('ruff-driver-runner');

var mock = require('ruff-mock');
var verify = mock.verify;
var when  = mock.when;

var driverPath = path.join(__dirname, '..');

module.exports = {
    'test should build driver': function () {
        driverRunner.run(driverPath, function(device, context) {
            var gotEvent = false;
            device.on("pressed", function(){
                gotEvent = true;
            });

            var gpio = context.arg('btngpio');
            when(gpio).read().thenReturn(0);
            gpio.emit('interrupt');

//            verify(device).emit('pressed');
            assert(gotEvent);
        });
    }
};

test.run(module.exports);
