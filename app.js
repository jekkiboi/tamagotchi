
///////AGE COUNTER
const startEl = document.getElementById('btn-startGame');
const pauseEl = document.getElementById('btn-pauseGame');
const resetEl = document.getElementById('btn-resetGame');
const ageEl = document.getElementById('age');
///EAT-SLEEP-PLAY
const hungerEl = document.getElementById('hunger');
const feedEl = document.getElementById('btn-feed');
const sleepinessEl = document.getElementById('sleepiness');
const sleepEl = document.getElementById('btn-sleep');
const boredomEl = document.getElementById('boredom');
const playEl = document.getElementById('btn-play');
let age = 0;
let interval = null;

/////////////TAMAGOTCHI CLASS???///////////
class Tamagotchi {
    // constructor(name, age, hunger, sleepiness, boredom){
    //     this.name = name;
    //     this.age = age;
    //     this.hunger = hunger;
    //     this.sleepiness = sleepiness;
    //     this.boredom = boredom;


////////////////CLOSE BRACKET CLASS/////////////
greet(){
    console.log('hello master!')
        }
    }




function handleStartClick() {
    interval = setInterval(function() {
       if (age < 100) {
            age++; 
        }
        hungerInterval()
        sleepInterval()
        playInterval()
        ageEl.textContent = 'Age:' + age;
         }, 1000);
    }    

function handlePauseClick(){
    clearInterval(interval);
    }
function handleResetClick(){
    age = 0;
    hunger =0;
    boredom = 0;
    sleepiness = 0;
ageEl.textContent = 'Age: ' + age;
hungerEl.textContent = 'Hunger: ' + hunger;
sleepinessEl.textContent = 'Sleepiness: ' + sleepiness;
boredomEl.textContent = 'Boredom: ' + boredom;
    clearInterval(interval);
    }
startEl.addEventListener('click', handleStartClick);
pauseEl.addEventListener('click', handlePauseClick);
resetEl.addEventListener('click', handleResetClick);

////////////HUNGER COUNTER//////////
let hunger = 0;
function handleFeedClick() {
         hunger -= 3; 
    }
function hungerInterval() {
        hunger++;
        hungerEl.textContent = 'Hunger:' + hunger;
    } 
feedEl.addEventListener('click', handleFeedClick);

////////////SLEEP COUNTER//////////
let sleepiness = 0;
function handleSleepClick() {
        sleepiness -= 3; 
    }
function sleepInterval() {
        sleepiness++;
        sleepinessEl.textContent = 'Sleepiness:' + sleepiness;
    } 
sleepEl.addEventListener('click', handleSleepClick);

////////////BOREDOM COUNTER//////////
let boredom = 0;
function handlePlayClick() {
        boredom -= 3; 
    }
function playInterval() {
        boredom++;
        boredomEl.textContent = 'Boredom:' + boredom;
    } 
playEl.addEventListener('click', handlePlayClick);
 


///////////MY ATTEMPT AT CREATING EXTENDED CLASS/////////
class Player extends Tamagotchi{
    constructor(name, age, hunger, sleepiness, boredom){
        super(name, age, hunger, sleepiness, boredom);
        this.characteristics = ['silly', 'cute', 'wild', 'adorable']

    }
}
    // hungryTam(){
    // if(this.tamagatchi.hunger > 6){
    //         console.log('Uh oh! Time to feed Tamagotchi!')
    //      }else {
    //         console.log(`${this.name} + doesn't need feeding right now`)
    //     }
    // }
    // sleepyTam(){
    // if(this.tamagatchi.sleepiness > 6){
    //     console.log('Uh oh! Time to go to bed...')
    // }else {
    //     console.log(`${this.name} +  is fully rested`)
    //     }
    // }
    // boredTam(){
    // if(this.tamagatchi.boredom > 6){
    //     console.log('Your Tamagotchi is bored!')
    // }else {
    //     console.log(`${this.name} +  is ready to rumble!`)
    //     }
    // }
// }

//PSEUDOCODE 
// const feedEl = document.getElementById('btn-feed');
// const sleepEl = document.getElementById('btn-sleep');
// const playEl = document.getElementById('btn-play');

// const hungerEl = document.getElementById('hunger');
// const pauseEl = document.getElementById('pause');
// const boredomEl = document.getElementById('boredom');

//////////////////////////////////////////////////////


