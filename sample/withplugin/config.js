requirejs.config({
  baseUrl: './',          //js 依赖文件基础路径
  
  paths : {
  	jquery :'lib/jquery.min',		//直接指向
  	fruits :'../../common/fruits'	//定义路径
  }
  
});

require(['jquery','depend/person'],function(j,p){
	//j jq都是jquery对象
	
	console.info('---------jquery-----------');
	
	console.info(j);
	
	var jq = require('jquery');
	
	console.info(jq);
	
	console.info(p);
});

require(['fruits/apple','fruits/grape','fruits/orange'],function(a,g,o){
	
	console.info('---------fruits-----------');
	
	console.info(a);
	
	console.info(o);
	
	console.info(o);
	
});

