'use strict';

/** LCD显示器 */
var lcd;
/** 光线传感器 */
var lightSensor;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    lcd = $('#lcd');
    lightSensor = $('#light-sensor');
    //每1秒更新一次光照强度
    setInterval(showLightIntensity, 1000);
});

function showLightIntensity() {
    lcd.clear();
    //从光照传感器获取光照强度
    lightSensor.getIlluminance(function (error, value) {
        if (error) {
            console.error(error);
            return;
        }
        console.log('illuminance: ' + value);
        lcd.print('illuminance: ' + value);
    });
}

$.end(function () {
    lcd = $('#lcd');
    lcd.turnOff();
});