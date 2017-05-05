/**
 * @date 2014-12-11
 * @author 综合应用部门-陈琪
 * 该控件主要用户视频播放页面的初始化
 */
(function($){
	$.videoUI=function(o,p){
		var fn={
				param:{
					data:[{name:"摄像头分组1",data:[{id:1,name:"摄像头1"}]}],	//摄像头列表数据
					selectObjectEvent:false,
					objectSelectEvent:"",
					videoBody:function(){return $("<object classid='1'><param name='wmode' value='transparent'></object>");},
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
				},
				initParam:function(){
					p=$.extend(window.videoInterface,p);
					p=$.extend(fn.param,p);
				},
				initView:function(){
					var $this=$(o);
					$this.empty();
					$this.addClass("video-ui");
					
					fn.vedeoUIIndex=$('<div class="video-ui-index">'+
									'<label class="video-ui-index-title">摄像头列表</label>'+
									'<div class="video-ui-index-group"></div>'+
								'</div>');
					
					fn.vedeoUITool=$('<div class="video-ui-tool">'+
							'<label class="video-ui-tool-title">云台控制</label>'+
							'<div>'+
								'<ul>'+
									'<li title="镜头拉近" class="video-ui-tool-zoomIn">放大</li>'+
									'<li title="镜头拉远" class="video-ui-tool-zoomOut">缩小</li>'+
									'<li title="镜头上转" class="video-ui-tool-top">上</li>'+
									'<li title="镜头右转" class="video-ui-tool-right">右</li>'+
									'<li title="镜头下转" class="video-ui-tool-bottom">下</li>'+
									'<li title="镜头左转" class="video-ui-tool-left">左</li>'+
									'<li title="回到预置位" class="video-ui-tool-reset">中</li>'+
									'<li title="暂停" class="video-ui-tool-pause">暂停</li>'+
									'<li title="播放" class="video-ui-tool-start">开始</li>'+
									
									'<li title="缩小焦距" class="video-ui-tool-zoomOutFocal">缩小焦距</li>'+
									'<li title="放大焦距" class="video-ui-tool-zoomInFocal">放大焦距</li>'+
									'<li title="关闭雨刷" class="video-ui-tool-openWiper">关闭雨刷</li>'+
									'<li title="打开雨刷" class="video-ui-tool-closeWiper">打开雨刷</li>'+
									'<li title="缩小光圈" class="video-ui-tool-zoomOutAperture">缩小光圈</li>'+
									'<li title="放大光圈" class="video-ui-tool-zoomInAperture">放大光圈</li>'+
								'</ul>'+
						    '</div>'+
						'</div>');
					
					fn.vedeoUIModel=$('<div class="video-ui-model">'+
							'<ul>'+
							'<li class="video-ui-model-item" model="16">&nbsp;</li>'+
							'<li class="video-ui-model-item" model="9">&nbsp;</li>'+
							'<li class="video-ui-model-item" model="6">&nbsp;</li>'+
							'<li class="video-ui-model-item" model="4">&nbsp;</li>'+
							'<li class="video-ui-model-item selected" model="1">&nbsp;</li>'+
						'</ul>'+
					'</div>');
					
					fn.vedeoUIBody=$('<div class="video-ui-body">'+
										'<div class="video-ui-body-item" model="16">'+
											'<ul>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
											'</ul>'+
										'</div>'+
										'<div class="video-ui-body-item" model="9">'+
											'<ul>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
											'</ul>'+
										'</div>'+
										'<div class="video-ui-body-item" model="6">'+
											'<ul>'+
												'<li class="4"></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
											'</ul>'+
										'</div>'+
										'<div class="video-ui-body-item" model="4">'+
											'<ul>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
												'<li><div>&nbsp;</div></li>'+
											'</ul>'+
										'</div>'+
										'<div class="video-ui-body-item selected" model="1">'+
											'<ul>'+
												'<li><div>&nbsp;</div></li>'+
											'</ul>'+
										'</div>'+
									'</div>');
					
					fn.vedeoUIProgress=$('<div class="video-ui-progress">'+
						'<ul>'+
							'<li class="video-ui-tool-printScreen">截图</li>'+
							'<li class="video-ui-tool-allScreen">全屏</li>'+
						'</ul>'+
					'</div>');
					
					$this.append(fn.vedeoUIIndex);
					$this.append(fn.vedeoUITool);
					$this.append(fn.vedeoUIModel);
					$this.append(fn.vedeoUIBody);
					$this.append(fn.vedeoUIProgress);
					
					
					var data=p.data;
					var groupHeight=$this.height()-215;
					if(data){
						var videoUIIndexGroup=$this.find("div.video-ui-index-group");
						for(var index in data){
							videoUIIndexGroup.height(groupHeight);
							var ul=$('<ul><label>'+data[index].name+'</label></ul>');
							videoUIIndexGroup.append(ul);
							var data_=data[index].data;
							for(var index_ in data_){
								var li=$("<li id='"+data_[index_].id+"'>"+data_[index_].name+"</li>");
								ul.append(li);
								
								li.get(0).data=data_[index_];
							}
						}
					}
					
					

					var container=$this.find("div.video-ui-body");
					var containerWidth=container.width();
					var containerHeight=container.height();
					var containerMargin=0;
					var marginWidth=6;
					
					fn.initVideoBody(fn.vedeoUIBody.find("div.video-ui-body-item[model='1'] ul li"), containerWidth, containerHeight, containerMargin, 1, 1, marginWidth);
					fn.initVideoBody(fn.vedeoUIBody.find("div.video-ui-body-item[model='4'] ul li"), containerWidth, containerHeight, containerMargin, 2, 2, marginWidth);
					fn.initVideoBody(fn.vedeoUIBody.find("div.video-ui-body-item[model='9'] ul li"), containerWidth, containerHeight, containerMargin, 3, 3, marginWidth);
					fn.initVideoBody(fn.vedeoUIBody.find("div.video-ui-body-item[model='16'] ul li"), containerWidth, containerHeight, containerMargin, 4, 4, marginWidth);
					
					var obj=fn.vedeoUIBody.find("div.video-ui-body-item[model='6'] ul li.4");
					var width=(containerWidth-containerMargin)/3-marginWidth;
					var height=(containerHeight-containerMargin)/3-marginWidth;
					var i=0;
					var j=0;
					obj.css({top:(height+marginWidth)*i,left:(width+marginWidth)*j,width:containerWidth-width-marginWidth-marginWidth,height:containerHeight-height-marginWidth-marginWidth});
					obj=obj.next();
					i=0;j=2;
					obj.css({top:(height+marginWidth)*i,left:(width+marginWidth)*j,width:width,height:height});
					obj=obj.next();
					i=1;j=2;
					obj.css({top:(height+marginWidth)*i,left:(width+marginWidth)*j,width:width,height:height});
					obj=obj.next();
					i=2;j=0;
					obj.css({top:(height+marginWidth)*i,left:(width+marginWidth)*j,width:width,height:height});
					obj=obj.next();
					i=2;j=1;
					obj.css({top:(height+marginWidth)*i,left:(width+marginWidth)*j,width:width,height:height});
					obj=obj.next();
					i=2;j=2;
					obj.css({top:(height+marginWidth)*i,left:(width+marginWidth)*j,width:width,height:height});
				
					$this.find("div.video-ui-body div ul li").each(function(i){
						var li=$(this);
						var object=$(p.videoBody());
						$(this).append(object);
						object.attr("id","object_"+i);
						if(p.selectObjectEvent){
							object.get(0).attachEvent(p.selectObjectEvent, function(){li.click();});
						}
//						if(p.videoInit.apply(object.get(0),[object.get(0).dat])){}
					});
					
					$this.find("div.video-ui-body-item[model='1'] ul li:first").click();
				},
				initVideoBody:function(list,containerWidth,containerHeight,containerMargin, rows,cells, marginWidth){
					var width=(containerWidth-containerMargin)/cells-marginWidth;
					var height=(containerHeight-containerMargin)/rows-marginWidth;
					for(var i=0;i<rows;i++){
						for(var j=0;j<cells;j++){
							var top=i*(height+marginWidth);
							var left=j*(width+marginWidth);
							list.eq(i*cells+j).css({top:top,left:left,width:width,height:height});
						}
					}
				},
				initEvent:function(){
					var $this=$(o);
					
					$this.on("dblclick","div.video-ui-index-group ul label",function(){
						$(this).parent().toggleClass("selected");
					});

					$this.on("click","div.video-ui-model ul li",function(){
						
						$this.find("div.video-ui-model ul li").removeClass("selected");
						$this.find("div.video-ui-body div").removeClass("selected");
						$(this).addClass("selected");
						$this.find("div.video-ui-body-item[model='"+$(this).attr("model")+"']").addClass("selected");
						
						
						$this.find("div.video-ui-body div ul li").removeClass("selected");
						$this.find("div.video-ui-index-group ul li").removeClass("selected");
						fn.body=null;
						
						$this.find("div.video-ui-body-item ul li[inited] object").each(function(){
							if(p.videoDestory.apply($(this).get(0),[$(this).get(0).data])){
								$(this).get(0).inited=false;
								$(this).parent().removeAttr("inited");
							}
						});
						

						$this.find("div.video-ui-body-item[model='"+$(this).attr("model")+"'] ul li:first").click();
					});
					
					//
					$this.on("click","div.video-ui-body div ul li",function(){
						$this.find("div.video-ui-body div ul li").removeClass("selected");
						$(this).addClass("selected");
						fn.body=this;
					});

					$this.on("dblclick","div.video-ui-index-group ul li",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}

						var object=$(fn.body).find("object");
						if(object.length==0){
							object=$(p.videoBody());
							$(fn.body).append(object);
						}
						if(!object.get(0).inited){
							if(!p.videoInit.apply(object.get(0),[$(this).get(0).data])){
								return false;
							}
							object.get(0).inited=true;
							$(fn.body).attr("inited",true);
						}else if(object.get(0).dat!=null&&object.get(0).dat.ipGroup!=$(this).get(0).data.ipGroup){
							if(!p.videoDestory.apply(object.get(0),[object.get(0).dat])){
								return false;
							}
							if(!p.videoInit.apply(object.get(0),[$(this).get(0).data])){
								return false;
							}
							object.get(0).inited=true;
							$(fn.body).attr("inited",true);
						}
						if(p.videoStart.apply(object.get(0),[$(this).get(0).data])){
							$this.find("div.video-ui-index-group ul li").removeClass("selected");
							$(this).addClass("selected");
							object.get(0).dat=$(this).get(0).data;
						}						
					});
					
					$this.on("click","li.video-ui-tool-zoomIn",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						

						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoZoomIn.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					

					$this.on("click","li.video-ui-tool-zoomOut",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}

						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoZoomOut.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-top",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoTop.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-bottom",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoBottom.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-left",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoLeft.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-right",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoRight.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-reset",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoReset.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});

					$this.on("click","li.video-ui-tool-start",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoStart.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					$this.on("click","li.video-ui-tool-pause",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoPause.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-zoomOutFocal",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoZoomOutFocal.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-zoomInFocal",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoZoomInFocal.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-openWiper",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoOpenWiper.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-closeWiper",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoCloseWiper.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-zoomOutAperture",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoZoomOutAperture.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-zoomInAperture",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoZoomInAperture.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-printScreen",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoPrintScreen.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					
					$this.on("click","li.video-ui-tool-allScreen",function(){
						if(!fn.body){
							alert(p.selectBodyPrompt);
							return false;
						}
						
						var object=$(fn.body).find("object");
						if(!object.get(0).dat){
							return false;
						}
						if(p.videoAllScreen.apply(object.get(0),[object.get(0).dat])){
							
						}						
					});
					
					$this.on("mousemove","div.video-ui-body",function(e){
						p.left=e.pageX;
						p.top=e.pageY;
					});
					
				},
				select:function(){
					$this=$(o);
					$this.find("div.video-ui-body-item.selected ul li").each(function(){
						var left=$(this).offset().left;
						var right=left+$(this).width();
						var top=$(this).offset().top;
						var bottom=top+$(this).height();
						if(p.left>=left&&p.left<=right&&p.top>=top&&p.top<=bottom){
							$(this).click();
						}
					});
				},
				reload:function(){
					fn.initParam(p);
					fn.initEvent();
					fn.initView();
				}
		};
		fn.reload();
		return fn;
	};
	$.fn.videoUI=function(p){
		$(this).each(function(){
			if(this.videoUI){
				this.reload();
			}else{
				this.videoUI=$.videoUI(this,p);
			}
		});
	};
	$.fn.videoUISelect=function(){
		$(this).each(function(){
			if(this.videoUI){
				this.videoUI.select();
			}
		});
	}
})(jQuery);