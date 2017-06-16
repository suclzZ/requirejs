requirejs(['depend/color'],function(color){
	
	console.info(typeof color);
	
	console.info(color.getColor('red'));
	
	console.info(color.show());
	
});
