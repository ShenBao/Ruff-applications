'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

   // $('#led-r').turnOn();
   $('#button').on('push', function(){
       console.log('按钮按下');
       $('#led-r').turnOn();
   });

   // 
   $('#button').on('release', function(){
        console.log('按钮松开');
        $('#led-r').turnOff();
   });
});

$.end(function () {
    $('#led-r').turnOff();
});
