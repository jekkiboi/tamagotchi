const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})
// const nameEl = document.getElementById('name')
// const enteredName = prompt("Name your pet:")
///////AGE COUNTER
const startEl = document.getElementById('btn-startGame');
const pauseEl = document.getElementById('btn-pauseGame');
const resetEl = document.getElementById('btn-resetGame');
const ageEl = document.getElementById('age');

///////////////ALERTS///////////////
const alertsEl = document.getElementById('alerts')
const alertsWin = document.getElementById('alertsWin')
const alertsHunger = document.getElementById('alertsHunger');
const alertsSleep = document.getElementById('alertsSleep');
const alertsPlay = document.getElementById('alertsPlay');

///////////////EAT-SLEEP-PLAY VARIABLES///////////////
const hungerEl = document.getElementById('hunger');
const feedEl = document.getElementById('btn-feed');
const sleepinessEl = document.getElementById('sleepiness');
const sleepEl = document.getElementById('btn-sleep');
const boredomEl = document.getElementById('boredom');
const playEl = document.getElementById('btn-play');
//METERS??
// const hungerMeter = document.getElementById('hunger-meter')
// const sleepinessMeter = document.getElementById('sleepiness-meter')
// const boredomrMeter = document.getElementById('boredom-meter')

///////////////INTERVAL VARIABLES///////////////
let age = 0;
let interval = null;
let ageInterval = null;
let hungerInterval = null;
let sleepInterval = null;
let playInterval = null;

/////////////TAMAGOTCHI CLASS/////////////
class Tamagotchi {
    constructor(name, age){
        this.interval = null
        this.name = name
        this.age = age
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
    }

    ageInterval = () => {
        if (this.age < 20){ 
            this.hunger++
        }
        if(myTamagotchi.age === 20){
            alertsWin.textContent = "!!!!!!!YOU WON!!!!!!!"
        }
    }
//////////////HUNGER COUNTER////////////
    hungerInterval = () => {
        if (this.hunger < 10){ 
            this.hunger++
        }
        console.log('Hunger: ' + this.hunger)
        if (this.hunger >= 6){ 
            alertsHunger.textContent = " FEED! "
        } if(this.hunger < 6){
            alertsHunger.textContent = ""
        } 
        // if (this.hunger === 10){
        //     alertsHunger.textContent = "TAMAGOTCHI STARVED. YOU LOSE."
        // }
        hungerEl.textContent = 'Hunger:' + this.hunger;
    }
//////////////SLEEP COUNTER//////////////
    sleepInterval() {
        if (this.sleepiness < 10){ 
            this.sleepiness++;
        }
        console.log('Sleepiness: ' + this.sleepiness)
        if (this.sleepiness >= 6){ 
            alertsSleep.textContent = " SLEEP! "
        } if(this.sleepiness < 6){
            alertsSleep.textContent = ""
        } 
        // if (this.sleepiness === 10){
        //     alertsSleep.textContent = "TAMAGOTCHI PASSED OUT. YOU LOSE."
        // }
        sleepinessEl.textContent = 'Sleepiness:' + this.sleepiness;
    } 
    //////////////BOREDOM COUNTER////////////
    playInterval = () => {
        if (this.boredom < 10){  
            this.boredom++;
        }
        console.log('Boredom: ' + this.boredom)
        if (this.boredom >= 6){ 
            alertsPlay.textContent = " PLAY! "
        } if(this.boredom < 6){
            alertsPlay.textContent = ""
        } 
        // if (this.boredom === 10){
        //     alertsPlay.textContent = "TAMAGOTCHI GOT BORED TO DEATH. YOU LOSE."
        // }
        boredomEl.textContent = 'Boredom:' + this.boredom;
    }
////////////////////////CLOSE BRACKET CLASS///////////////////////////
}
//////////////////////////////////////////////////////////////////////
let myTamagotchi = new Tamagotchi(0, 0, 0, 0, 0, 0)

function handleStartClick() {
    playEl.classList.remove('hide')
    sleepEl.classList.remove('hide')
    feedEl.classList.remove('hide')
    alertsEl.classList.remove('hide')


    myTamagotchi.interval = setInterval(() => {
        if (myTamagotchi.age < 20) {
            myTamagotchi.age++; 
            myTamagotchi.hungerInterval()
            myTamagotchi.sleepInterval()
            myTamagotchi.playInterval()
            myTamagotchi.ageInterval()
            ageEl.textContent = 'AGE:' + myTamagotchi.age;
         }
    }, 1000) 
} 
///////////////FEED-SLEEP-PLAY BUTTON FUNCTION ADD-ONS///////////////
function handleFeedClick() {
    if (myTamagotchi.hunger > 2){
        myTamagotchi.hunger -= 3; 
    }
}
feedEl.addEventListener('click', handleFeedClick);

function handleSleepClick() {
    if (myTamagotchi.sleepiness > 2){
        myTamagotchi.sleepiness -= 3; 
    } 
}
sleepEl.addEventListener('click', handleSleepClick);

function handlePlayClick() {
    if (myTamagotchi.boredom > 2){
        myTamagotchi.boredom -= 3;
    }
}
playEl.addEventListener('click', handlePlayClick);

///////////////START-RESET-PAUSE FUNCTIONS///////////////
function handleResetClick(){
    myTamagotchi.age = 0;
    myTamagotchi.hunger =0;
    myTamagotchi.boredom = 0;
    myTamagotchi.sleepiness = 0;
    ageEl.textContent = 'AGE: ' + myTamagotchi.age;
    hungerEl.textContent = 'Hunger: ' + myTamagotchi.hunger;
    sleepinessEl.textContent = 'Sleepiness: ' + myTamagotchi.sleepiness;
    boredomEl.textContent = 'Boredom: ' + myTamagotchi.boredom;
    clearInterval(myTamagotchi.interval);
}
function handlePauseClick(){
    clearInterval(myTamagotchi.interval);
}
startEl.addEventListener('click', handleStartClick);
pauseEl.addEventListener('click', handlePauseClick);
resetEl.addEventListener('click', handleResetClick);

///////////////SUBMIT NAME FUNCTION///////////////
function getUserName() {
    let nameField = document.getElementById('userInput').value;
    let result = document.getElementById('result');
    
    if (nameField.length < 3) {
        result.textContent = 'Username must contain at least 3 characters';
    } else {
        result.textContent = `Pet's Name: ` + nameField;
    }
}
let subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false); 

