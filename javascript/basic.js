
// {
// 	document.write ("Hello World from basic.js")
// }
	
	//My Calculator -------------------------------------------------

let butPlus = document.getElementById('butPlus');
let butMinus  = document.getElementById('butMinus');
let butMult  = document.getElementById('butMult');
let butDevide  = document.getElementById('butDevide');
let butClear = document.getElementById('butClear');
let display  = document.getElementById('display');


let numEnter1 = document.getElementById('num1');
let numEnter2 = document.getElementById('num2'); 

butPlus.addEventListener('click', add);
butMinus.addEventListener('click', minus);
butMult.addEventListener('click', multiply);
butDevide.addEventListener('click', devide);
butClear.addEventListener('click', clear);
	
function add() {
	let answer = Number(numEnter1.value) + Number(numEnter2.value);
	display.value = answer;
}

function minus() {
	let answer = Number(numEnter1.value) - Number(numEnter2.value);
	display.value = answer;
}

function multiply() {
	let answer = Number(numEnter1.value) * Number(numEnter2.value);
	display.value = answer;
}

function devide() {
	let answer = Number(numEnter1.value) / Number(numEnter2.value);
	display.value = answer;
}

function clear() {
	window.location.reload();
}

	// Canadian Taxes ------------------------------------------------------

let taxIn = document.getElementById('taxableIncome');  // get input value
let butCalculatTax = document.getElementById('butCalculatTax');  // Get button
let effectiveTax = document.getElementById('effectiveTax');

butCalculateTax.addEventListener('click', taxRate);

function taxRate() {
														console.log('test1', taxIn.value); 
														
		if (taxIn.value <= 47630) {						
		let payableTax = taxIn.value * .15; 
		console.log('first if', (payableTax));
		effectiveTax.value = payableTax;

	} else if (taxIn.value > 47630 && taxIn.value <= 95259) {
														
		let payableTax = ((taxIn.value - 47630) * .205) + 7145; 
		console.log('second if', payableTax);
		effectiveTax.value = payableTax;

	} else if (taxIn.value > 95259 && taxIn.value <= 147667) {
														
		let payableTax = ((taxIn.value - 95259) * .26) + 16908; 
		console.log('third if', payableTax);
		effectiveTax.value = payableTax;

	} else if (taxIn.value > 147667 && taxIn.value <= 210371) {
														
		let payableTax = ((taxIn.value - 147667) * .29) + 30535; 
		console.log('forth if', payableTax);
		effectiveTax.value = payableTax;

	} else if (taxIn.value > 210371) {
														
		let payableTax = ((taxIn.value - 210371) * .33) + 48719; 
		console.log('fith if', payableTax);
		effectiveTax.value = payableTax;
	}
	}
	
	//Working with Arrays ------------------------------------------------------

	let inputData = document.getElementById('addNumber');
	let butAdd = document.getElementById('butAdd');
	let butShow = document.getElementById('butShow');
	let	butTotal = document.getElementById('butTotal');
	let	butClear2 = document.getElementById('butClear2');

	butAdd.addEventListener('click', addItem);
	butShow.addEventListener('click', showItems);
	butTotal.addEventListener('click', totalItems);
	butClear2.addEventListener('click', clear2);

	let numberGroup = [];

	function addItem() { 	
		// console.log("not a number", inputData.value);	
		// if (inputData.value === 'string') {
		// 	window.alert(inputData.value + 'is not an number, try again with a number');
		// } else {
			numberGroup.unshift(inputData.value);
	}

	function showItems() {
		window.alert(numberGroup);
		// let showAll = numberGroup.toString();
		// document.getElementById('myarray').textContent = showAll[];
		// console.log('second if', showAll[]);
	}

	function totalItems() {
		// const numberSum = numberGroup => numberGroup.reduce((a,b) => a + b, 0);
		let arraySum = 0;
		for (let i=0; i < numberGroup.length; i++) {
			arraySum = parseInt(arraySum) + parseInt(numberGroup[i]);
			window.alert(arraySum);
		}
	}
	
	function clear2() {
		window.location.reload();
	}

	// Working with Dictionaries ---------------------------------------------

	let butLookup = document.getElementById('butLookup');
	let addLookup = document.getElementById('addLookup');

	butLookup.addEventListener('click', lookUp2);

	function lookUp2() { 
		const canProv = {
		AB:'Alberta', 
		BC:'BritishColumbia',
		SK:'Saskatchewan',
		ON:'Ontario',
		MB:'Manitoba',
		QC:'Quebec',
		NS:'NovaScotia' 
	};
		window.alert(canProv[addLookup.value]);
		console.log(addLookup.value);
	}
