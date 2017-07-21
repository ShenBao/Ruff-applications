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

            var adc = context.arg('myadc');

            when(adc).getCurrent().thenReturn(100);
            when(adc).getVoltage().thenReturn(160);
            when(adc).getRawValue().thenReturn(220);

            assert(device.readCurrent() == 100);
            assert(device.readVoltage() == 160);
            assert(device.read() == 220);

        });
    }
};

test.run(module.exports);
