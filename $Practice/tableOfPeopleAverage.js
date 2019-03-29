const objects = [
	{name: 'John', age: 17},
	{name: 'Richard', age: 17},
	{name: 'Geoff', age: 17},
	{name: 'Joe', age: 17},
];

const newArray=[];

function loopWithmap() {
	objects.map(function(x) {
		newArray.push(`${x.age}`);
			// console.log('in forEach', newArray);
});
	return newArray	
}

const total = function(accumulator, curr) {
		return (parseInt(accumulator) + parseInt(curr)) /newArray.length;
}

console.log(loopWithmap());
console.log(newArray.reduce(total));