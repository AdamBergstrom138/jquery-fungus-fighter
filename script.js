$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    //renderHpAp();
    $('.arcane-sceptre').on('click', arcaneSceptre)
    $('.entangle').on('click', entangle)
    $('.dragon-blade').on('click', dragonBlade)
    $('.star-fire').on('click', starFire)

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

let fungusHP = 100;
let attackPoints = 100;

function renderHpAp(){
    if(attackPoints <= 0){
        attackPoints = 0;
    }
    if(fungusHP <= 0){
        fungusHP = 0;
    }
    $('#health').remove();
    $('.enemy').prepend(`<div id = "health" class="hp-text">${fungusHP} HP</div>`);
    $('#ourAttackPoints').remove();
    $('.ap-text').remove();
    $('.attacks').prepend(`<div class="ap-text">${attackPoints} AP</div>`);
    
    if(fungusHP <= 0){
        $('.freaky-fungus').remove();
        $('.enemy').append('<div class="freaky-fungus dead"></div>')
    }
    if(attackPoints <= 0){
        $('.freaky-fungus').remove();
        $('.enemy').append('<div class="freaky-fungus jump"></div>') 
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true; 
        document.getElementById("btn3").disabled = true; 
        document.getElementById("btn4").disabled = true; 
    }
    //<div class="hp-text">100 HP</div>
}
/*
- **AP Cost:** 12
- **HP Damage:** 14
*/
function arcaneSceptre(){
    console.log('arcaneSceptre click');
    fungusHP = fungusHP- 14;
    attackPoints = attackPoints - 12;
    renderHpAp();
    console.log(fungusHP, attackPoints);
}
//- **AP Cost:** 23
//- **HP Damage:** 9
function entangle(){
    console.log('entangle click');
    fungusHP = fungusHP- 9;
    attackPoints = attackPoints - 23;
    renderHpAp();
    console.log(fungusHP, attackPoints);   
}
//- **AP Cost:** 38
//- **HP Damage:** 47
function dragonBlade(){
    console.log('dragonBlade click');
    fungusHP = fungusHP- 47;
    attackPoints = attackPoints - 38;
    renderHpAp();
    console.log(fungusHP, attackPoints);  
}
//- **AP Cost:** 33
//- **HP Damage:** 25

function starFire(){
    console.log('dragonBlade click');
    fungusHP = fungusHP- 25;
    attackPoints = attackPoints - 33;
    renderHpAp();
    console.log(fungusHP, attackPoints);    
}


