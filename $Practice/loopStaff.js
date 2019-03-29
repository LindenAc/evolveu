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

// Write the function after this comment ---

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

function loopStaff(a) {
	newArray=[];
	let i=0;
	for (i=0; i < a.length; i++) {
	newArray.push(makeEmail(a[i]));
		console.log('in for loop', newArray);
	};
		return newArray;
}

// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);

// console.log(staffEmail);

assertEquals('Jane.Smith@evolveu.ca', staffEmail[0])
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);
