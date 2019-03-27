	//Basic DOM ----------------------------------------------------------

	let parent = document.getElementById('parent');
	let child = document.getElementById('child');
	let kid = document.getElementById('kid');

	let but1 = document.getElementById('but1');
	let cssBut = document.getElementById('cssBut');
	let list1 = document.getElementById('list1');

	parent.addEventListener('click', clickParent);
	child.addEventListener('click', clickChild);
	kid.addEventListener('click', clickKid);

	but1.addEventListener('click', showList);
	cssBut.addEventListener('click', addItem);
	
	function clickParent() { 
		console.log('the parent has been clicked');
	}

	function clickChild() { 
		console.log('the child has been clicked');
	}

	function clickKid() { 
		console.log('the kid has been clicked');
	}

	// could also use "show chrildren"
	function showList() {
		let storeChild = document.getElementById('list1').textContent;
		console.log(storeChild);
		window.alert(storeChild);
	}

		let count = 4;  
	function addItem() {
		 var node = document.createElement("LI");
 		 var textnode = document.createTextNode("Item " + count++);
 		 node.appendChild(textnode);
 		 document.getElementById("list1").appendChild(node);
	}

	//Working with Cards -------------------------------------------------

	const addCard = document.getElementById('globalButton');
	const parentLeft = document.getElementById('parentLeft');

	addCard.addEventListener('click', newCard);
	
	let numCount = 1;
	function newCard() {
		const newDiv = document.createElement('div');
		newDiv.setAttribute('class', 'card1');
		const text = document.createElement('h3');
		var textTop = document.createTextNode('Card ' + numCount++);
		text.appendChild(textTop);
		newDiv.appendChild(text);
		
		let element = document.getElementById('parentLeft');
		element.appendChild(newDiv);
		
		const abc = document.createElement('Button');
		const textabc = document.createTextNode('Add Before');
		abc.appendChild(textabc);
		newDiv.appendChild(abc);
		
		const abcd = document.createElement('Button');
		const textabcd = document.createTextNode('Add After');
		abcd.appendChild(textabcd);
		newDiv.appendChild(abcd);
		
		const abcde = document.createElement('Button');
		const textabcde = document.createTextNode('Delete');
		abcde.appendChild(textabcde);
		newDiv.appendChild(abcde);
	
		abc.addEventListener('click', addAbove);
		abcd.addEventListener('click', addBelow);
		abcde.addEventListener('click', deleteDiv);
			
		function deleteDiv() {
			newDiv.parentNode.removeChild(newDiv);
		}	
	}
			
	function addAbove(e) {
		const newDiv = document.createElement('div');
		newDiv.setAttribute('class', 'card1');
		const text = document.createElement('h3');
		var textTop = document.createTextNode('Card ' + numCount++);
		text.appendChild(textTop);
		newDiv.appendChild(text);
		
		tarBut = e.target.parentElement;		
		parentLeft.insertBefore(newDiv, tarBut);
																		console.log(tarBut);		
		const abc = document.createElement('Button');
		const textabc = document.createTextNode('Add Before');
		abc.appendChild(textabc);
		newDiv.appendChild(abc);
		
		const abcd = document.createElement('Button');
		const textabcd = document.createTextNode('Add After');
		abcd.appendChild(textabcd);
		newDiv.appendChild(abcd);
		
		const abcde = document.createElement('Button');
		const textabcde = document.createTextNode('Delete');
		abcde.appendChild(textabcde);
		newDiv.appendChild(abcde);

		abc.addEventListener('click', addAbove);
		abcd.addEventListener('click', addBelow);
		abcde.addEventListener('click', deleteDiv);
			
		function deleteDiv() {
			newDiv.parentNode.removeChild(newDiv);
		}	
	}
	
	function addBelow(e) {
		const newDiv = document.createElement('div');
		newDiv.setAttribute('class', 'card1');
		const text = document.createElement('h3');
		var textTop = document.createTextNode('Card ' + numCount++);
		text.appendChild(textTop);
		newDiv.appendChild(text);
		
		tarBut = e.target.parentElement;		
		tarBut.parentNode.insertBefore(newDiv, tarBut.nextSibling);
																		console.log(tarBut);		
		const abc = document.createElement('Button');
		const textabc = document.createTextNode('Add Before');
		abc.appendChild(textabc);
		newDiv.appendChild(abc);
		
		const abcd = document.createElement('Button');
		const textabcd = document.createTextNode('Add After');
		abcd.appendChild(textabcd);
		newDiv.appendChild(abcd);
		
		const abcde = document.createElement('Button');
		const textabcde = document.createTextNode('Delete');
		abcde.appendChild(textabcde);
		newDiv.appendChild(abcde);

		abc.addEventListener('click', addAbove);
		abcd.addEventListener('click', addBelow);
		abcde.addEventListener('click', deleteDiv);
			
		function deleteDiv() {
			newDiv.parentNode.removeChild(newDiv);
		}	
	}

	