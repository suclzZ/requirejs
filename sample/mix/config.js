requirejs.config({
  baseUrl: './',          //js 依赖文件基础路径
  
  paths : {
  	jquery :'lib/jquery.min',		//直接指向
  	fruits :'../../common/fruits',	//定义路径
  	func : 'depend/udfunc',		// func指向文件， 必须和下面相同
  	fpath : 'depend'
  },
  
  shim : {//下面的名称必须和 require相同
  		func : {
  			exports : 'funcc'	//funcc尾udfunc.js对象名称
  		},
  		'fpath/udfunc2' : {
  			exports : 'funcc2'
  		}
  }
  
});

//对应的文件路径不管是直接路径 ，还是通过path路由路径，必须指向js文件
require(['fruits/apple','fruits/grape','fruits/orange','jquery','func','fpath/udfunc2'],function(a,g,o,j,u,u2){
	
	console.info(a);
	
	console.info(o);
	
	console.info(o);
	
	console.info(j);
	
	console.info(u);
	
	console.info(u2);
	
});

