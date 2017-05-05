$(function(){
	//1、画出ul
	//获取要填充的ul
    //var $ul=$('.dropdown-list');
	//2、选出数据	
	//3、填充数据
	//定时器
	var pageNum=1; 
	var index=pageNum;
	var total;
	
	// 当前页码
	var $div=$('#prompt');
	$div.append('<div id="search-page">显示的结果：<label id=lvalue1>'+'0</label>-<label id=lvalue2>'+'0</label>'+
		'<button class="pre" ></button><button class="next" ></button></div>');	
	//告警数据按页面查询
	var page="http://localhost:8080"+window.location.pathname;     //判断当前所处的页面
	var re = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i; 
    var arr = page.match(re); 
	var system = arr[4];
	systemNum=systemType[system];
	myInterval(index);
	//判断进入的是不是SCADA系统，是报警和弹框
	$('#main').load(function() { 
		judgeAlarm(); 		
		setInterval(function(){
			myInterval(index);
			judgeAlarm();	
		},60*1000);//1000为1秒钟
	
	}); 

    //分页
	//getPageData(index);    
	$("#search-page button").click(function(event)
	{    	
		var Btncla= $(event.currentTarget).attr("class");
		var a='pre';
		var b='next';  		  
		if(Btncla==a)
		{
			if(pageNum>1)
			{
				pageNum--;
				myInterval(pageNum);				
				//alert(pageNum);
			} 
			if(pageNum==1){
				$(".pre").attr("disabled", true); 
				$(".next").attr("disabled", false); 
			}
		} 
		else if(Btncla== b)
		{
			if(pageNum<totalPages)
			{
				pageNum++;
				myInterval(pageNum);
				//alert(pageNum);
			}
			if(pageNum==totalPages){
				$(".next").attr("disabled", true); 
				$(".pre").attr("disabled", false); 
			}
		}
	});	
});

function initStationIds() {
	$.each(getConfigList("gis_stationTypeConfig"), function(i, config) {
		executeAjaxUrlForResult("action/device/listDeviceByDeviceType", {data:{deviceType: config.value}, async: false}, function(result) {
			$.each(result.data, function(index, idValue) {
				stationIds.push(idValue.id);
			});
		});
	});
}

var totalPages;
var ids=[];
var systemNum;
var deviceIds=[];
var pagaNum=1;
//判断当前所属系统，并执行相应操作
function  judgeAlarm(){
	if(systemNum==null) {
		
	} else {
		getWarnData();
		if (systemNum==5){
			alarmRed(deviceIds);
		}
	}	
}

//7是数据专题，11是设备，对应部分没有找到，到时候在修改
var systemType = {
	'/water-gis/' : '1',
	'/water-model/' : '2',
	'/water-schedule/action/':'3',
	'/water-burst/':'4',
	'/water-scada/action/' : '5',
	'/water-dafeng/action/':'6',	
	'/callCenter/':'8',
	'/water-patrol/':'9',
	'/water-repair/':'10',	
	'/water-emergency/action/':'12',
	'/water-meter-new/':'13',
	'/water-warn/':null
}

//告警弹窗
function getWarnData() {  
	//这个是以后正式的要用的
	var d = new Date();
	var endTime = timeStamp2String(d, "yyyy-MM-dd HH:mm:ss");
	//var m = d.getMinutes()-1;       //当前时间的分钟数减一
	//d.setMinutes(m);
	//var startTime = timeStamp2String(d, "yyyy-MM-dd HH:mm:ss");
	
	//测试时间
	var startTime = "2015-12-28 13:05:30";
	//var endTime = "2017-2-12 13:06:31";
	if (ids.length!==0)
		{
		var url="../water-warn/alarmData/getWarningDataByConditionsIds";
		executeAjaxUrlForResult(url, {data:{startTime:startTime,endTime:endTime,alarmState:0,ids:ids}, async:false}, function(result) {
			if(result.length > 0) {
				var warnIframe = $("<iframe id='irc' name='irc' frameborder='1' src='../water-warn/warningData/alarmData/warnTips?startTime=" + startTime + "&endTime=" + endTime + "&alarmState=0&ids="+ids+"' iframeborder='0' style='position:absolute;right:0px;bottom:0px; width:600px; height:400px; border: 0px solid #0988CF;'></iframe>");		
				$('#irc').remove();
				$("body").append(warnIframe); //弹出告警框
				//等待10秒未处理自动关闭
				//setTimeout(function(){
				//    $('#irc').remove();
	            //    },10*1000);
				$.each(result,function(i1,n1){
					deviceIds.push(n1.deviceId);
				})					
			}
		}); 
		}
}

//对应告警标红
function  alarmRed(deviceIds){
	//让特定ID的div标红
	for(var i=0;i<deviceIds.length;i++){
		$(main.document).find('#'+deviceIds[i]).parent().parent().children("div:first").attr("class","divNamealarm");
		$(main.document).find('#'+deviceIds[i]).parent().attr("class","divValue");
		$(main.document).find('#'+deviceIds[i]).parent().parent().children("div").parent().attr("class","divDetailalarm");
		}
}

//关闭告警框
function closeWarnIframe(iframeName) {
	$("iframe[name='" + iframeName + "']").hide();
}


 function myInterval(index)
 {   
	 //var urll="../water-warn/warningData/alarmData/getWarningDataBySystemNum?pageNum="+index+"&pageSize=5&systemNum="+systemNum;
	 var urll="../water-warn/alarmData/getWarningDataBySystemNum?pageNum=1&pageSize=999&systemNum="+systemNum;
	 $.ajax({
	    	  url:urll,
	    	  type: "post",
	    	  dataType: "jsonp",
	    	  jsonp: "callbackparam",
	    	  success:function(json){
	    	    $("#message1").attr("class","message toggle");
	    	    $("#message1").text(json.total);		    		  
	    		  if(json.total!=0){	    			 
	    			  totalPages=Math.ceil(json.total/5);
	    		      var $ul=$('.dropdown-list');
	    		      var lab1=5*index-4;
	    		      $.each(json.rows,function(i,n){ 
	    			     ids.push(n.deviceId);
	    		      });
	    		      var lab2;
	    		      if(index==totalPages){
	    			    lab2=json.total;
	    		      }else{
	    			    lab2=5*index;  
	    		       }	
	    		      $('#lvalue1').html(lab1);
	    		      $('#lvalue2').html(lab2);
	    		      $('.dropdown-list li').remove();
	    		      var rows=[];
	    		      var i=(index-1)*5;
	    		      var k=index*5;
	    		      if(k<=json.total){
	    			    for(i;i<k;i++){
		    			  rows.push(json.rows[i]);	    			  
		    		    }
	    		      }else if(k>json.total) {
	    				 for(i;i<json.total;i++){
			    			  rows.push(json.rows[i]);
	    				 }
	    		      }
	    		      $.each(rows,function(i,n){  
	    			  $ul.append('<li class="list-li"><div><img class="imgpic"  src="../Images/imgpic.png" >'+
		    					'</img></div><div class="normaldiv" ><ul class=normal-list><li style="display:none" class="normal-li">'+
		    					'<span  class="name">'+n.id+'</span></li><li class="normal-li">'+
		    					'<span  class="name">'+n.deviceName+'</span></li><li class="normal-li">'+
		    					'<span class="value">时间：'+n.startTime+'</span></li><li class="normal-li"><span class="value">压力值:</span>'+
		    					'<span class="value">'+n.firstWarningValue+'</span><span class="value">超'+n.alarmTypeName+":"+'</span><span class="value">'+n.limitValue+'</span></li></ul></div></li>');	
	    			  			if(n.alarmLevel==1){
	    			  				$(".imgpic").attr('src', '../water-warn/Images/common/icon/warn1.png');
	    			  			}else if(n.alarmLevel==2){
	    			  				$(".imgpic").attr('src', '../water-warn/Images/common/icon/warn2.png');
	    			  			}else if(n.alarmLevel==3){$(".imgpic").attr('src', '../water-warn/Images/common/icon/warn3.png');}
	    			  			else{$(".imgpic").attr('src', '../water-warn/Images/common/icon/warn4.png');}
	    		     });  
	    		      
	    		      
	    		      $(".normal-list").click(function(){
	    		    	  top.window.index.showDialog("编辑菜单项","/water-warn/warningData/alarmData/edit?id="+$(this).children().first().text(),700,290);
	    		    	  })
	    		  }
	    	  },
	    	  error:function(){
	    		 // alert('fail');
	    	  }
	      }); 
  }
