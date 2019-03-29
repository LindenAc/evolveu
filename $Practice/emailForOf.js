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


function makeEmail(z) {
	return `${z.fname}.${z.lname}@evolveu.ca`;
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

function loopWithForOf() {
	newArray=[];
	for(let a of data.staff) {
		console.log(a)
	newArray.push(makeEmail(a));
		console.log('in for loop', newArray);
	};
		return newArray;
}


// function loopWithForOf(a) {
// 	newArray=[];
// 	let i=0;
// 	for (i=0; i < a.length; i++) {
// 	newArray.push(makeEmail(a[i]));
// 		console.log('in for loop', newArray);
// 	};
// 		return newArray;
// }

// and before this comment ---

console.log('-----emailForOf')
const emailForOf = loopWithForOf(data.staff);
// console.log(emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
// console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);
