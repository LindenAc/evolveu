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

	let newArray=[];

function loopWithMap() {
	const rmap = data.staff.map(function(x) {
		newArray.push(`${x.fname}.${x.lname}@evolveu.ca`);
			console.log('in forEach', newArray);
			
});
	return newArray	
}

// console.log('-----emailWithEach')
// const emailWithEach = loopWithEach(data.staff);
// // console.log(emailWithEach);
// assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
// assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
// assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);

console.log('-----emailWithMap')
const emailWithMap = loopWithMap(data.staff);
// console.log(emailWithMap);
assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);