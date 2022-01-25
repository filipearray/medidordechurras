// Meat | 400g per person - if it lasts more than 6 hours is 650g per person
// Beer | 1200ml per person - if it lasts more than 6 hours is 2000ml per person
// Soda/Water | 1000ml per person - if it lasts more than 6 hours is 1500ml per person

// Child are worth 1/2 - They consume half of meat and soda/water.

let inputAdult = document.getElementById("adultId");
let inputChild = document.getElementById("childId");
let inputHours = document.getElementById("bbcDurationId");

let result = document.getElementById("result");

function meatPerPerson(duration) {
    if(duration >= 6){
        return 650;
    } else {
        return 400;
    }
};

function beerPerPerson(duration) {
    if(duration >= 6){
        return 2000;
    } else {
        return 1200;
    }
};

function drinksPerPerson(duration) {
    if(duration >= 6){
        return 1500;
    } else {
        return 1000;
    }
};

function calc() {

    let adult = inputAdult.value;
    let child = inputChild.value;
    let duration = inputHours.value;

    let totalMeatQuantity = meatPerPerson(duration) * adult + (meatPerPerson(duration) / 2 * child);
    let totalBeerQuantity = beerPerPerson(duration) * adult;
    let totalDrinksQuantity = drinksPerPerson(duration) * adult + (drinksPerPerson(duration) / 2 * child);

    result.innerHTML = `<p>${totalMeatQuantity / 1000} Kg de carne</p>`
    result.innerHTML += `<p>${Math.ceil(totalBeerQuantity / 355)} latas de cerveja</p>`
    result.innerHTML += `<p>${Math.ceil(totalDrinksQuantity / 2000)} garrafas de bebida</p>`
};

   

