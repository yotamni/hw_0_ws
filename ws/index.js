'use strice';
var Emitter = require('events');

module.exports = class tourDeFranceCompetitor extends Emitter{

    constructor(name){
        super();
        this.trophyNumber=0;
        this.name = name;
        this.sportType = 'tour De France';
        this.logString = '';
    }

    winTheTour(){
        this.trophyNumber+=1;
        this.logString +=`${this.name} won the tour :) `;
        this.emit('trophyNumberChanged');
    }

    failsDrugTest(){
        if(this.isZero() != true){
            this.trophyNumber-=1;
            this.logString+=`${this.name} fail drug test :( `;
            this.emit('trophyNumberChanged');
        }
    }

    checkGoal(competitor,goal){
        if(competitor.trophyNumber > goal){
            console.log(`goal achieved!!! ${competitor.trophyNumber}`);
        }
    }

    displayTrophyNumber(){
    console.log(`${this.name} won ${this.trophyNumber} ${this.sportType}`);
    }

    isZero(){
        if(this.trophyNumber <= 0){
            console.log(`${this.name} got no trophys!!!`);
            return true;
        }
        return false;
    }

    getLogFile(){
        return this.logString;
    }

};
