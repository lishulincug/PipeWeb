window.videoInterface={
		videoBody:function(){return $("<object classid='CLSID:31AB0C88-6C6E-4924-8E25-C9B3612C3438'><param name='wmode' value='transparent'></object>");},
		videoInit:function(data){
			//var isInit = this.Init(data.type);
			var isInit = -1;
			isInit = this.Init(1);			
			if(isInit==0) 
			{
				var ret = -1;
				//ret = this.Login(data.username,data.password,data.ipAddr,data.ipPort);
				ret = this.Login("admin","12345","116.52.156.78",8000);
				alert(ret);
			}
			//console.log("初始化控件");
			return true;
		},						//初始化
		videoStart:function(data){
			var ret = -1;
			// ret = data.PlayByChannel(data.channel);
			ret = this.PlayByChannel(1);
			//console.log("开始播放视频,控件dom节点是"+this+",视频源的ID是："+data.id+"，名称是："+data.name);
			alert(ret);
			return true;
		},		//播放
		videoReset:function(data){console.log("重置到预置位");return true;},						//重置到预置位
		videoPause:function(data){console.log("暂停");return true;},							//暂停
		videoZoomIn:function(data){console.log("放大");return true;},							//放大
		videoZoomOut:function(data){console.log("缩小");return true;},						//缩小
		videoTop:function(data){console.log("上");var ret = this.PTZUp(3);return true;},								//上
		videoBottom:function(data){console.log("下");var ret = this.PTZDown(3);return true;},							//下
		videoLeft:function(data){console.log("左");var ret = this.PTZLeft(3);return true;},							//左
		videoRight:function(data){console.log("右");var ret = this.PTZRight(3);return true;},							//右
		videoZoomOutFocal:function(data){console.log("缩小焦距");return true;},				//缩小焦距
		videoZoomInFocal:function(data){console.log("扩大焦距");return true;},					//扩大焦距
		videoOpenWiper:function(data){console.log("打开雨刷");return true;},					//打开雨刷
		videoCloseWiper:function(data){console.log("关闭雨刷");return true;},					//关闭雨刷
		videoZoomOutAperture:function(data){console.log("缩小光圈");return true;},				//缩小光圈
		videoZoomInAperture:function(data){console.log("扩大光圈");return true;},				//扩大光圈
		videoPrintScreen:function(data){console.log("截屏");var ret = this.CapturePic(data.picFilename);return true;},					//截屏
		videoAllScreen:function(data){console.log("全屏");var ret = this.fullScreen();return true;},						//全屏
		videoDestory:function(data){
			console.log("控件释放资源,dom节点是:"+this);
			this.StopPlay();
			this.Logout();
			var retc = 1;
			retc = this.CleanUp();
			alert(retc);
			return true;
		}		//控件释放资源
}