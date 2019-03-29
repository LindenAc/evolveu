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

function loopWithForIn() {
	newArray=[];
	i=0;
	for (var i in data.staff) {
		console.log('for in', i);
	newArray.push(`${data.staff[i].fname}.${data.staff[i].lname}@evolveu.ca`);
			console.log('this is the new array', newArray);
	};
		return newArray;
}

// and before this comment ---

// console.log('-----emailForOf')
// const emailForOf = loopWithForOf(data.staff);
// // console.log(emailForOf);
// assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
// assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
// assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
// console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);
