(function(factory) {
  if (typeof define === 'function' && define.amd) {
    return define(['jquery'], function($) {
      return factory($, window, document);
    });
  } else {
    return factory(jQuery, window, document);
  }
})(function($, window, document){
	   //给tab页编码
	   $(".tabpage>header li").each(function(index){
		   $(this).attr("index",index);
	   })
	   //点击头部的时候，内容页进行切换
	   $(".tabpage>header li").click(function(){
		   $(".tabpage>header li").removeClass("active");
		   $(this).addClass("active");
		   $(".tabpage> section>article").removeClass("active");
		   $($(".tabpage> section> article")[$(this).attr("index")]).addClass("active");
		   tabs.onSelect($(this).attr("index"));
	   })
	  
	   var tabs = {
		   onSelect:function(index){
			   
		   }
	   }
	   return {
		   onSelect:function(fun){
			   tabs.onSelect = function(index){
				   fun(index);
			   }
		   }
	   }
	   
})
	