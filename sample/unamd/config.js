requirejs.config({
  baseUrl: './',         
  
  shim : {
  	// 'depend/func':{
		// exports : 'func1'
  	// },
  	
  	'depend/func' :{
  		init : function(){
  			return {
  				f1:'func1',
  				f2:'func2'
  			};
  		}
  	}
  }
  
});


