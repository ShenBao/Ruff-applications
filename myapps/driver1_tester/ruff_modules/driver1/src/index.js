'use strict';

var driver = require('ruff-driver');

module.exports = driver({
    attach: function(inputs) {
        this._mygpio = inputs.getRequired('mygpio');
    },

    detach: function() {
    },

    exports: {
        readValue: function() {
          return this._mygpio.read();
        }
    }
});
