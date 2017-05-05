define(['jquery', 'layerbar/topic/sumlate/const', 'layerbar/topic/sumlate/sumlate',"window/window","eventStack"],function($, con, sumlate,window,eventStack) {
	return {init:function(id) {
		//管网模型面板显示
//		$("#netModel").showDialog({title:'水龄'});
//		$("#search-content .nano-content table").empty();
//		f2net.window.clearTempLayer('PoiLayer');
//		sumlate.analysis(con.configLayer.slValue);
		
		//调用layerbar的窗口打开和关闭功能
		eventStack.add({
			"id":id,
			"destroy":function(){
				$("#netModel").closeDialog({
					onclose:function(){
						sumlate.cleanAnalysis()
					}
				});
				sumlate.cleanAnalysis();
			},
			"init":function(){
				$("#netModel").showDialog({title:'水龄'});
				$("#search-content .nano-content table").empty();
				f2net.window.clearTempLayer('PoiLayer');
				sumlate.analysis(con.configLayer.slValue);
			}
		})//添加关闭功能
		.addRule({"id":id,"open":[id,'baselayer','countylayer']})//制定规则
		.applyRule();//应用规则
	}};
	
});