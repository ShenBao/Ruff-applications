'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    var lcd = $('lcd1602-pcf8574-hd44780');

    lcd.turnOn();

    lcd.cursorOn();
    lcd.blinkOn();

    lcd.setCursor(0, 0);
    lcd.print('hello world');

    lcd.setCursor(0, 1);
    lcd.print('hello ruff');





//    setInterval(function(){
//    }, 100);
});

$.end(function () {
    $('lcd1602-pcf8574-hd44780').turnOff();
});
