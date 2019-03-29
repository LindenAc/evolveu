const people = [
	{name: 'Linden', age: 30},
	{name: 'Bob', age: 45},
	{name: 'John', age: 35},
	{name: 'bill', age: 25},
	{name: 'sam', age: 10}
];

function total(z) {
	t = 0;
	let i=0;
	for (i=0; i < z.length; i++) {
		t += (z[i].age);
	}
		return t;
}

console.log('Total', total(people));

function averageAge(z) {
	const w = total(z) / z.length;
	return w;
}

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


console.log('Average',averageAge(people));

assertEquals(total(people), 145);
assertEquals(averageAge(people), 29);
