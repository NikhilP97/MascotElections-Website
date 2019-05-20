// clickedLogo(clickedID) => {
// 	document.getElementById(clickedID).style.opacity = "0.5";
// }

let logoIDs = ['oyster', 'cat', 'whale', 'elephant', 'fish', 'goose']

let logoNames = {
	'oyster': 'World is my Oyster', 
	'cat': "Cat's Meow",
	'whale': 'Whale of a time',
	'elephant': 'Elephant in the room',
	'fish': 'Dead Fish',
	'goose': 'Wild Goose Chase'
}

let boolStar = false;
let boolLogo = false;
let boolCheckBox = false;
let boolMoreReasons = false;
let boolSuggestions = false;

function clickedLogo(clickedID) {
	console.log("clickedID: ", clickedID);
	boolLogo = true;
	console.log("boolLogo: ", boolLogo);
	for(i=0; i < logoIDs.length; i++){
		console.log("eachID: ", logoIDs[i]);
		if(logoIDs[i] != clickedID){
			document.getElementById(logoIDs[i]).style.opacity = "0.5";
		} else {
			document.getElementById(logoIDs[i]).style.opacity = "1";
		}
	}

	if(boolStar && boolLogo && boolSuggestions && boolMoreReasons && boolCheckBox){
		document.getElementById("nextDeptBtn").disabled = false;
		document.getElementById("nextDeptBtn").style.backgroundColor = "#27b585";
	}

	document.getElementById("checkBoxNameHeader").innerHTML = logoNames[clickedID];
	document.getElementById("checkBoxNameHeader").style.color = "#8B0000";
	document.getElementById("showDetails").style.visibility = "visible";
}

function clickedStar(starNumber){
	boolStar = true;
	console.log("boolStar: ", boolStar);
	if(starNumber == 4){
		document.getElementById("starText").innerHTML = "EXCELLENT";
		document.getElementById("starText").style.color = "red";
		document.getElementById("starText").style.textAlign = "center";
	} else if(starNumber == 3) {
		document.getElementById("starText").innerHTML = "GOOD";
		document.getElementById("starText").style.color = "red";
		document.getElementById("starText").style.textAlign = "center";
	} else if(starNumber == 2) {
		document.getElementById("starText").innerHTML = "COULD BE BETTER";
		document.getElementById("starText").style.color = "red";
		document.getElementById("starText").style.textAlign = "center";
	} else if(starNumber == 1) {
		document.getElementById("starText").innerHTML = "NOT GOOD";
		document.getElementById("starText").style.color = "red";
		document.getElementById("starText").style.textAlign = "center";
	}

	if(boolStar && boolLogo && boolSuggestions && boolMoreReasons && boolCheckBox){
		document.getElementById("nextDeptBtn").disabled = false;
		document.getElementById("nextDeptBtn").style.backgroundColor = "#27b585";
	}
}

function checkIfAllClicked(clickedElement){
	if(clickedElement == 'checkbox'){
		boolCheckBox = true;
	} else if (clickedElement == 'moreReasons') {
		boolMoreReasons = true;
	} else if (clickedElement == 'suggestions') {
		boolSuggestions = true;
	}

	if(boolStar && boolLogo && boolSuggestions && boolMoreReasons && boolCheckBox){
		document.getElementById("nextDeptBtn").disabled = false;
		document.getElementById("nextDeptBtn").style.backgroundColor = "#27b585";
	}


}



