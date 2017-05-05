window.videoInterface={
		selectObjectEvent:"LButtonDown",													//object选中时触发的事件
		videoBody:function(){return $("<object classid='1'><param name='wmode' value='opaque'><embed wmode='opaque'></object>");},
		videoInit:function(data){console.log("初始化控件");return true;},						//初始化
		videoStart:function(data){console.log("开始播放视频,控件dom节点是"+this+",视频源的ID是："+data.id+"，名称是："+data.name);return true;},		//播放
		videoReset:function(data){console.log("重置到预置位");return true;},						//重置到预置位
		videoPause:function(data){console.log("暂停");return true;},							//暂停
		videoZoomIn:function(data){console.log("放大");return true;},							//放大
		videoZoomOut:function(data){console.log("缩小");return true;},						//缩小
		videoTop:function(data){console.log("上");return true;},								//上
		videoBottom:function(data){console.log("下");return true;},							//下
		videoLeft:function(data){console.log("左");return true;},							//左
		videoRight:function(data){console.log("右");return true;},							//右
		videoZoomOutFocal:function(data){console.log("缩小焦距");return true;},				//缩小焦距
		videoZoomInFocal:function(data){console.log("扩大焦距");return true;},					//扩大焦距
		videoOpenWiper:function(data){console.log("打开雨刷");return true;},					//打开雨刷
		videoCloseWiper:function(data){console.log("关闭雨刷");return true;},					//关闭雨刷
		videoZoomOutAperture:function(data){console.log("缩小光圈");return true;},				//缩小光圈
		videoZoomInAperture:function(data){console.log("扩大光圈");return true;},				//扩大光圈
		videoPrintScreen:function(data){console.log("截屏");return true;},					//截屏
		videoAllScreen:function(data){console.log("全屏");return true;},						//全屏
		videoDestory:function(data){console.log("控件释放资源,dom节点是:"+this);return true;}		//控件释放资源
}