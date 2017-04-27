var http = require('http');
var express = require('express');
var config = require('./config').events;
var player = require('./ws');

var app = express();

var player = new player('yotam');
player.on(config.TROPHYNUMBERCHANGED,player.displayTrophyNumber);
player.on(config.TROPHYNUMBERCHANGED,function(){
    player.checkGoal(this,10);
});
player.winTheTour();
player.winTheTour();
player.winTheTour();
player.failsDrugTest();
player.failsDrugTest();
player.winTheTour();
player.failsDrugTest();
player.failsDrugTest();
player.failsDrugTest();
player.winTheTour();

app.get('/',function(req,res){
    res.send(player.getLogFile());
});

http.createServer(app).listen(8080);