requirejs(['depend/person','depend/work'],function(person,work){
	
	console.info(typeof person);
	
	console.info(person.name);
	
	console.info(person.age);
	
	console.info(person.sayHi('jack'));
	
	console.info(work);
	
});
