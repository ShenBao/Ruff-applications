
/* SOS 求救灯*/
// 'use strict';

// //Led灯闪烁函数
// function Blink() {
//     if (!$('#led-r').isOn()) {
//         $('#led-r').turnOn();
//     }
//     else {
//         $('#led-r').turnOff();
//     }
// }

// //三个快闪烁来表示字母“S”
// function performS() {
//     $('#led-r').turnOn();//设置led模块亮
//     setTimeout(Blink, 1000);//1000ms后led灭
//     setTimeout(Blink, 2000);//2000ms后led亮
//     setTimeout(Blink, 3000);//3000ms后led灭
//     setTimeout(Blink, 4000);//4000ms后led亮
// }

// //三个快闪烁来表示字母“O”
// function performO() {
//     $('#led-r').turnOn();//设置led模块亮
//     setTimeout(Blink, 2000);
//     setTimeout(Blink, 4000);
//     setTimeout(Blink, 6000);
//     setTimeout(Blink, 8000);
// }

// $.ready(function (error) {
//     if (error) {
//         console.log(error);
//         return;
//     }

//     //在‘button’按下时运行函数
//     $('#button').on('push', function () {
//         performS();
//         setTimeout(function(){$('#led-r').turnOff();}, 5000);
//         setTimeout(performO, 6000);
//         setTimeout(function(){$('#led-r').turnOff();}, 16000);
//         setTimeout(performS, 17000);
//         setTimeout(function(){$('#led-r').turnOff();}, 22000);
//     });
// });


/* 七彩循环灯*/
'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    var color = Object.create({
        red: 0xff0000,
        blue: 0x0000ff,
        green: 0x00ff00,
        purple: 0xff00ff,
        cyan: 0x00ffff,
        yellow: 0xffff00,
        white: 0x000000
    });

	var light = setInterval(
        function () {
            $('#KY-016').setRGB(color.blue);
          
            setTimeout(function () {
                $('#KY-016').setRGB(color.green);
            }, 500);
            setTimeout(function () {
                $('#KY-016').setRGB(color.cyan);
            }, 1000);
            setTimeout(function () {
                $('#KY-016').setRGB(color.red);
            }, 1500);
            setTimeout(function () {
                $('#KY-016').setRGB(color.purple);
            }, 2000);
            setTimeout(function () {
                $('#KY-016').setRGB(color.yellow);
            }, 2500);
            setTimeout(function () {
                $('#led').setRGB(color.white);
            }, 3000)
        }, 3500);
});