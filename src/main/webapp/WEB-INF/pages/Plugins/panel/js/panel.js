(function(factory) {
  if (typeof define === 'function' && define.amd) {
    return define(['jquery'], function($) {
      return factory($, window, document);
    });
  } else {
    return factory(jQuery, window, document);
  }
})(function($, window, document){
	
	//关闭panel-box功能
	var closeWindow = {
		close : function(){
			this.initClose();
		},
		initClose : function(){
		}
	};
	//
	$(".panel-box>.panel-box-header >.panel-box-header-tool>.panel-tool-close").click(function(){
		closeWindow.close();
	})
	
	
	return {
		setTitle:function(title){
			$(".panel-box>.panel-box-header >.panel-box-header-title").html(title);
		},
		close:function(fun){
			closeWindow.close = function(){
				closeWindow.initClose();
				fun();
			};
			
		}
	}
})