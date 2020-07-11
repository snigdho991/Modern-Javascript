/*Function*/

const name = "Ramkrishno Majumder";
const channel = "Dev Ed";

function toUpper(text){
	const upperCase = text.toUpperCase();
	console.log(upperCase);
}
/*toUpper(name);
toUpper(channel);*/

//2nd Way
const toUpper2 = function(text){
	//stuff here
}

//3rd Way
const toUpper3 = () => {
	//stuff here
}

/*Function end*/


/*String*/

const combined = "string";
//console.log(typeof combined);

/*String End*/


/*Object*/

const user = {
	name: 'Name',
	age: 24,
	maried: false,
	purchases: ['book', 'pen', 'paper'],

	sayName: function() {
		console.log(this.name)
	}

};
	user.sayName();

	function sayAge() {
		console.log(user.age)
	}

	this.sayAge();


/*For Loop*/

const names = ['me', 'you', 'hello'];

for (singlename of names) {
	console.log(singlename);
}


/*While Loop*/

let loading = 0;

while (loading < 100) {
	console.log("Still Loading")
	loading++;
}
