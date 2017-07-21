'use strict';

var driver = require('ruff-driver');
var Gpio = require('gpio');

module.exports = driver({
    attach: function (inputs) {
        //do init steps here
        //this._gpio = inputs.getRequired('gpio');

        var _this = this;
        this._gpio = inputs.getRequired('btngpio');

        this._gpio.setDirection(Gpio.IN);
        this._gpio.setEdge(Gpio.EDGE_BOTH);

        this._gpio.on('interrupt', function() {
            var data = _this._gpio.read();
            if (data === 0) {
                _this.emit('pressed');
            } else {
                _this.emit('released');
            }
        });
    },

    events: {
        pressed  : 'message when button is pressed',
        released : 'message when button is released'
    },

    detach: function () {
        //do clean work here
    },

    exports: {
        read: function() {
          return this._gpio.read();
        }
    }

});
