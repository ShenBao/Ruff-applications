'use strict'

$.ready(function(error){
    if(error) {
        console.log(error);
        return ;
    }

    $('#lcd').turnOn();
    $('#lcd').setCursor(1, 0);
    $('#lcd').print('Hi xiaofei!');

    setInterval(function(){
        
        $('#DHT11').getTemperature(function(error, temperature){
            if(error) {
                console.error(error);
                return ;
            }
            $('#lcd').setCursor(1, 0);
            console.log('温度:', temperature);
            $('#lcd').print('temperature: ' + temperature);
        });
    }, 500);

    setInterval(function(){
        $('#DHT11').getRelativeHumidity(function(error, humidity){
            if(error) {
                console.error(error);
                return;
            }

            $('#lcd').setCursor(1, 1);
            console.log('湿度:', humidity);
            $('#lcd').print('humidity: ' + humidity);
        });
    }, 500);
    
});