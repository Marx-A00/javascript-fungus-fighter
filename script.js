// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let attacks = [
    {name: "Arcane scepter",
    APCost:12,
    HPDamage: 14 },

    {name: "Entangle",
    APCost:23,
    HPDamage: 9},

    {name: "Dragon Blade",
    APCost:38,
    HPDamage: 47 },

    {name: "star fire",
    APCost:33,
    HPDamage: 25 },

];

let fungusHP = 100;
let attackPoints = 100;


function attack(attack){
    fungusHP -= attack.HPDamage;
    if(fungusHP <=0){
        let fungus = document.getElementById("freaky-fungus");
        fungus.classList.remove("walk");
        fungus.classList.add("dead");


        fungusHP = 0;

    }
    console.log(fungusHP);

    attackPoints -= attack.APCost;
    if(attackPoints <=0){
        let fungus = document.getElementById("freaky-fungus");
        fungus.classList.remove("walk");
        fungus.classList.add("jump");
        attackPoints = 0;
        let disabledAttack1 = document.getElementById("attack1");
        disabledAttack1.setAttribute("disabled", true);

        let disabledAttack2 = document.getElementById("attack2");
        disabledAttack2.setAttribute("disabled", true);

        let disabledAttack3 = document.getElementById("attack3");
        disabledAttack3.setAttribute("disabled", true);

        let disabledAttack4 = document.getElementById("attack4");
        disabledAttack4.setAttribute("disabled", true);
    }

    console.log("AP:",attackPoints);
    renderValues();
}

function renderValues(){
    document.getElementById("attacks").textContent = '';
    document.getElementById("enemy").textContent = '';

    document.getElementById("attacks").textContent = `${attackPoints} AP`;
    document.getElementById("enemy").textContent = `${fungusHP} HP`;

}
    
renderValues();

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

// event --> state --> render -->
// attack --> changes variable --> show that variable change