	class Living extends Object  {
		constructor (age) {
				super();
			this.age = age;	
		}

		show() {
		console.log('Living', this.age);
		}

		birthday() {
			this.age++

		}

	}
	
	let linden = new Living(3);
	console.log('my age', linden.age);

	linden.show()

	linden.birthday()

	linden.show()

	let y = new Living(100);

	y.show()

	y.birthday()
	y.birthday()

	y.show()

	linden.show()

	class Animal extends Living{
		constructor(age, name) {
			super(age);
			this.name = name;
		}
		show() {
			console.log('animal', this.age + " " + this.name)
		}

	}

	let pig = new Animal(10, 'linden');

	pig.show()

	pig.show()
	
	y.show()




