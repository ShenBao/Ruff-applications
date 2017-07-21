'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('ky-016').turnOn();

    var r=g=b=50;
    setInterval(function(){
        if ($('ky-016').isOn()) {
            r = reduceValue(r);
            if (r == 0) {
                g = reduceValue(g);
                if (g == 0) {
                    b = reduceValue(b);
                    if (b == 0) {
                        r=g=b=50;
                    }
                }
            }
        }

        $('ky-016').setRGB(r,g,b);
        console.log('rgb = ' + r + ',' + g + ',' + b);
    }, 300);
});

function reduceValue(v) {
    v -= 5;
    v = v<0 ? 0 : v;
    return v;
}

$.end(function () {
    $('ky-016').turnOff();
});
