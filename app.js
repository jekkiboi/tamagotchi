class Tamagotchi {
    constructor(name, age, hunger, sleepiness, boredom){
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    }
    greet(){
    console.log('hello master!')
    }
}

class Player extends Tamagotchi{
    constructor(name, age, hunger, sleepiness, boredom){
        super(name, age, hunger, sleepiness, boredom);
        this.characteristics = ['silly', 'cute', 'wild', 'adorable']
    }
    
hungryTam(){
    if(this.tamagatchi.hunger > 6){
        console.log('Uh oh! Time to feed Tamagotchi!')
    }else {
        console.log(${this.name} + ` doesn't need feeding right now`)
    }
}
sleepyTam(){
    if(this.tamagatchi.sleepiness > 6){
    console.log('Uh oh! Time to go to bed...')
    }else {
    console.log(${this.name} + ` is fully rested`)
    }
}
boredTam(){
    if(this.tamagatchi.boredom > 6){
    console.log('Your Tamagotchi is bored!')
    }else {
    console.log(${this.name} + ` is ready to rumble!`)
        }
    }
}

const feedrEl = document.getElementById('btn-feed');
const sleepEl = document.getElementById('btn-sleep');
const playEl = document.getElementById('btn-play');

const hungerEl = document.getElementById('hunger');
const pauseEl = document.getElementById('pause');
const boredomEl = document.getElementById('boredom');

///////AGE COUNTER
const startEl = document.getElementById('btn-start');
const pauseEl = document.getElementById('btn-pause');
const resetEl = document.getElementById('btn-reset');
const ageEl = document.getElementById('age');


let age = 0;
let interval = null;

function handleStartClick() {
    interval = setInterval(function() {
        age++;

        //increase age on pgae
    ageEl.textContent = 'Age:' + age;
    }, 1000);
}
function handlePauseClick(){
    //Stop the provided interval from running
    clearInterval(interval);
}
function handleResetClick(){
    //Set age back to 0
    age = 0;
ageEl.textContent = 'Age: ' + age;
    //stop the interval from running
    clearInterval(interval);
}
//When the start button is clicked, call the provided function
startEl.addEventListener('click', handleStartClick);
pauseEl.addEventListener('click', handlePauseClick);
resetEl.addEventListener('click', handleResetClick);