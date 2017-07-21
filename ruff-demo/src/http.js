'use strict'

var http = require('http')

var options = {
    host: 'httpbin.org',
    path: '/post',
    method: 'POST'
};

function postState(state) {
    var req = http.request(options, function(res){
        res.on('data', function(chunk) {
            console.log('BODY:' + chunk);
        });
    });

    req.write(state);
    req.end();
}

$.ready(function(error){
    if(error) {
        console.log(error);
        return ;
    }

    $('#button').on('push', function(){
        console.log('按钮按下');
        $('#led-r').turnOn(function(){
            postState('开灯');
        });
    });

    $('#button').on('release', function(){
        console.log('按钮松开');
        $('#led-r').turnOff(function(){
            postState('关灯');
        });
    });

    $.end(function(){
        $('#led-r').turnOff();
    });
});
