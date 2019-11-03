// Resources
var food = 0;
var wood = 0;
var stone = 0;

function addFood(number){
    food = food + number;
    document.getElementById("food").innerHTML = food; 
};

function addWood(number){
    wood = wood + number;
    document.getElementById("wood").innerHTML = wood; 
};

function addStone(number){
    stone = stone + number;
    document.getElementById("stone").innerHTML = stone; 
};

// Population
var currentPopulation = 0;
var populationCost = 10;	// How much (1) pop costs, in food
var farmers = 0;

function addPop(number){
	if (food >= populationCost){
		currentPopulation += 1;
		food -= populationCost;
		document.getElementById('population').innerHTML = currentPopulation;
		document.getElementById('food').innerHTML = food;
	}
}

function getFreePopulation(){
	return currentPopulation - farmers;
}

function assignFarmer(number){
	if (getFreePopulation >= number){
		farmers += number;
	}
}

// Update (Per Second)
window.setInterval(function(){
	
}, 1000);