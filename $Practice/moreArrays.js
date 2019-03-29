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

const newArray=[];

function loopWithmap() {
	data.staff.map(function(x) {
		newArray.push(`${parseInt(x.balance)}`);
			// console.log('in forEach', newArray);
});
	return parseInt(newArray)	
}

const total = function(accumulator, curr) {
		return accumulator + curr;
}

console.log(loopWithmap());
console.log(newArray.reduce(total));

