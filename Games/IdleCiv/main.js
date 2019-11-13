// Resources
var food = {
  name: "Food",
  description: "Food is nutritious!",
  value: 0,
  maxValue: 10
};

var wood = {
  name: "Wood",
  description: "Wood is used as a basic building material",
  value: 0,
  maxValue: 10
};

var stone = {
  name: "Stone",
  description: "Stone is used as a basic building material",
  value: 0,
  maxValue: 10
};

// Jobs
var unemployed = {
  name: "Unemployed",
  description: "These people don't have a job. Let's change that!",
  value: 0,
  maxValue: 5
};

var farmer = {
  name: "Farmer",
  description: "These people cultivate the various farms of your civilization, keeping everyone well fed (hopefully).",
  value: 0,
  maxValue: 1
};

var woodcutter = {
  name: "Woodcutter",
  description: "TIMBER!",
  value: 0,
  maxValue: 1
};

var miner = {
  name: "Miner",
  description: "They spent all their time underground, gathering precious rocks.",
  value: 0,
  maxValue: 1
};

function addResource(resource, amount) {
  if (amount < 0) {
    var unallowedResources = -(resource.value + amount);
  }
  else {
    var unallowedResources = resource.value + amount - resource.maxValue;
  }

  if (unallowedResources > 0 && amount > 0) {
    resource.value = resource.maxValue;
    updateUIJobs();
    console.log("Could not add '" + unallowedResources + "' " + resource.name + "!")
  }
  else if (unallowedResources > 0 && amount < 0) {
    resource.value = 0;
    updateUIJobs();
    console.log("Could not remove '" + unallowedResources + "' " + resource.name + "!")
  }
  else {
    resource.value += amount;
  }
  updateUIJobs();
  return unallowedResources;
}

function addWorkers(job, amount) {
  if (amount < 0) {
    var unallowedWorkers = -(job.value + amount);
  }
  else {
    var unallowedWorkers = job.value + amount - job.maxValue;
  }

  if (unallowedWorkers > 0 && amount > 0) {
    job.value = job.maxValue;
    updateUIJobs();
    console.log("Could not add '" + unallowedWorkers + "' " + job.name + "!")
  }
  else if (unallowedWorkers > 0 && amount < 0) {
    job.value = 0;
    updateUIJobs();
    console.log("Could not remove '" + unallowedWorkers + "' " + job.name + "!")
  }
  else {
    job.value += amount;
  }
  updateUIJobs();
  return unallowedWorkers;
}

function updateUIResources() {
  // Stone
  document.getElementById("foodName").innerHTML = food.name;
  document.getElementById("foodDescription").innerHTML = food.description;
  document.getElementById("foodValue").innerHTML = food.value;
  document.getElementById("foodMaxValue").innerHTML = food.maxValue;
  // Stone
  document.getElementById("woodName").innerHTML = wood.name;
  document.getElementById("woodDescription").innerHTML = wood.description;
  document.getElementById("woodValue").innerHTML = wood.value;
  document.getElementById("woodMaxValue").innerHTML = wood.maxValue;
  // Stone
  document.getElementById("stoneName").innerHTML = stone.name;
  document.getElementById("stoneDescription").innerHTML = stone.description;
  document.getElementById("stoneValue").innerHTML = stone.value;
  document.getElementById("stoneMaxValue").innerHTML = stone.maxValue;
}

function updateUIJobs() {
  // Unemployed
  document.getElementById("unemployedName").innerHTML = unemployed.name;
  document.getElementById("unemployedDescription").innerHTML = unemployed.description;
  document.getElementById("unemployedValue").innerHTML = unemployed.value;
  document.getElementById("unemployedMaxValue").innerHTML = unemployed.maxValue;
  // Farmers
  document.getElementById("farmerName").innerHTML = farmer.name;
  document.getElementById("farmerDescription").innerHTML = farmer.description;
  document.getElementById("farmerValue").innerHTML = farmer.value;
  document.getElementById("farmerMaxValue").innerHTML = farmer.maxValue;
  // Woodcutter
  document.getElementById("woodcutterName").innerHTML = woodcutter.name;
  document.getElementById("woodcutterDescription").innerHTML = woodcutter.description;
  document.getElementById("woodcutterValue").innerHTML = woodcutter.value;
  document.getElementById("woodcutterMaxValue").innerHTML = woodcutter.maxValue;
  // Miner
  document.getElementById("minerName").innerHTML = miner.name;
  document.getElementById("minerDescription").innerHTML = miner.description;
  document.getElementById("minerValue").innerHTML = miner.value;
  document.getElementById("minerMaxValue").innerHTML = miner.maxValue;
}

function updateUIAll(){
  updateUIResources();
  updateUIJobs();
}

function openTab(evt, tab) {
  // Declare local variables
  var i;
  var tabcontent;
  var tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}

function CloseTabs(){
  // Declare local variables
  var i;
  var tabcontent;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}

CloseTabs();
updateUIAll();

window.setInterval(function(){
  addResource(food, farmer.value);
  addResource(wood, woodcutter.value);
  addResource(stone, miner.value);
  updateUIAll();
}, 1000);