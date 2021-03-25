$(document).ready(function() {
	// This function is a "wrapper function" for jQuery use //
	// ########## TIMER - 1: ########## Placing a clock in the jumbotron header section
	const dayMom = moment();
	function update() {
		$('#currentDay').html(moment().format('dddd, D MMMM YYYY, H:mm:ss'));
	}
	setInterval(update, 1000);

	// ########## TIMER - 2: ########## Times:left div, Changes: mid div, Saves: right div
		var currentTime = moment().format('H');
// ===== Looping through 9am to 17pm ===== //
	for (i = 9; i < 18; i++) {
		//var inputValue = localStorage.getItem('time'+i) || ''  // Grab value from local storage. The two pipes || are not OR here, they are short circuit js --- Leaving this as a learning reference for future!
var inputValue = localStorage.getItem('time'+i); 
			if(!inputValue){
			inputValue = '';
		}

		makeRow(i);
		var divEl = document.getElementById('midDiv' + i);
		console.log('midDiv' + i); // Prints total 9 to 17 midDiv values
		if (currentTime == i) {
			divEl.style.backgroundColor = '#FF6961';
		} else if (currentTime > 18) {
			divEl.style.backgroundColor = '#F6E5F5';
		} else {
			divEl.style.backgroundColor = '#77DD77';
		}
	}

	// ########## Creating rows for 9:00AM-17:00PM, and middle input field ##########
	function makeRow(i) {
		// Targeting timeBlock div DOM element to create rows
		var timeBlockEl = document.getElementById('timeBlock');
		// Creating a div to make rows and add to the timeBlock div DOM element
		var rowEl = document.createElement('div');
		// Adding the div to the existing timeBlock div
		timeBlockEl.appendChild(rowEl);
		// Using template literals to format the rows
		rowEl.innerHTML = `	
		<div id="leftDiv" class="leftDivs"> 
		   ${i > 12 ? i + ':00PM' : i + ':00AM'} 
		</div>
		<div id="midDiv${i}" class="midDivs">
		   <input id="inputField${i}" class="inputBoxes" value='${inputValue}'>
		</div>
			`;

		// ########## Creating save buttons column and adding event listeners to them ##########
		var saveButton = document.createElement('div');
		saveButton.innerHTML = `
		<div class="rightDiv"> 
		<i class="fas fa-save" value='${i}'></i>
		</div>
		`;
		
		saveButton.addEventListener('click', function(e) {
				var inputValue = document.getElementById('inputField' + i).value;
				
				localStorage.setItem('time'+i, inputValue);
			});
		rowEl.appendChild(saveButton);
	}

	// ====================================================================
}); // "wrapper function" ending
