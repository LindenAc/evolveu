const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

function assertEquals(p1,p2) {
	if (p1 === p2) {
		console.log(`OK-> ${p1}`);
		result = true
	} else {
		console.log(`the two values are not the same: 
			p1--> ${p1} 
			p2--> ${p2}`); 
		result = false
	}
	return result
}

let tot = data.staff.reduce(function(a, curr) {
	return parseInt(a) + parseInt(curr.balance);
},0);

console.log(tot);

assertEquals(tot, 3823);