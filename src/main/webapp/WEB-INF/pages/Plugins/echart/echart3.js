var initEchart = function(){
	// 路径配置
	require.config({
	    paths:{ 
	        'echarts' : '../../p/echart/dist'
	    }
	});
	// 使用
	require(
	    [
	        'echarts',
	        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
	        'echarts/chart/line'
	    ],
	    function (ec) {
	    	initAngular();
	    }
	);
}
//initEchart();

var getEchartOption = function(station) {
	
	var tempp = [];
	for (var int = 0; int < station.p.length; int++) {
		tempp.push(station.p[int] * 10);
	}
	
	var tempf = [];
	for (var int = 0; int < station.f.length; int++) {
		tempf[int] = station.f[int].toFixed(0);
	}
	
	var option = {
        	title:{
        		text:station.cname,
        		x:'left'
        	},
        	legend:{
        		data:['压力','流量'],
        		x:'right'
        	},
			tooltip : {
				trigger: 'axis',
		        formatter: function (params,ticket,callback) {
		            var res = params[0][1];
		            for (var i = 0, l = params.length; i < l; i++) {
		                res += '<br/>' + params[i][0] + ' : ' ;
		                
		                
		                if (i==0) {
		                	res += (params[i][2]/10).toFixed(3);
		                	res +=  ' Mpa';
						} else if(i==1) {
							res += (params[i][2]);
							res +=  ' 方/时';
						}
		            }
		            return res;
		        }
			},
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
				}
			],
			yAxis : [
				{
					type : 'value',
					name : "压力（兆帕）",
					min : 0,
					max : 9,
					splitNumber : 3,
					axisLabel : {
		                formatter: function (value) {
		                    // Function formatter
		                    return value / 10;
		                }
		            }
				},
				{
					type : 'value',
					name : "流量（立方米/小时）",
					min : 1000,
					max : 10000,
					splitNumber : 3
				}
				
			],
			series : [
				{
					name:'压力',
					type:'line',
					yAxisIndex: 0,//默认是0
					data:tempp
				},
				{
					name:'流量',
					type:'bar',
					//barGap:50,//柱间间距，默认30
					data:tempf,
					yAxisIndex: 1
				}
			]
		};
	
	return option;
}

var getTotalWaterEchartOption = function(obj) {
	
	var temp = [];
	for (var int = 0; int < obj.length; int++) {
		temp[int] = obj[int].toFixed(0);
	}
	
	var option = {
        	title:{
        		text:'',
        		x:'left'
        	},
        	legend:{
        		data:['流量'],
        		x:'600',
        		
        	},
			tooltip : {
				trigger: 'axis',
		        formatter: function (params,ticket,callback) {
		            var res = params[0][1];
		            for (var i = 0, l = params.length; i < l; i++) {
		                res += '<br/>' + params[i][0] + ' : ' ;
		                
		                
		                if (i==0) {
		                	res += (params[i][2]);
							res +=  ' 方/时';
						} 
		            }
		            return res;
		        }
			},
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
				}
			],
			yAxis : [
				{
					type : 'value',
					name : "流量（立方米/小时）",
					min : 3000,
					max : 6000,
					splitNumber : 3
				}
				
			],
			series : [
				{
					name:'流量',
					type:'line',
					//barGap:50,//柱间间距，默认30
					data:temp,
					yAxisIndex: 0
				}
			]
		};
	
	return option;
}


var getInlineOption = function(station) {
	var tempp = [];
	for (var int = 0; int < station.p.length; int++) {
		tempp.push(station.p[int] * 10);
	}
	
	var tempf = [];
	for (var int = 0; int < station.f.length; int++) {
		tempf[int] = station.f[int].toFixed(0);
	}
	
	var temptp = [];
	for (var int = 0; int < station.tp.length; int++) {
		if (typeof station.tp[int]!="string") {
			temptp.push(station.tp[int] * 10);
		} else {
			temptp.push(station.tp[int]);
		}
		
	}
	
	var option = {
        	title:{
        		text:station.cname,
        		x:'left'
        	},
			tooltip : {
				trigger: 'axis',
		        formatter: function (params,ticket,callback) {
		            var res = params[0][1];
		            for (var i = 0, l = params.length; i < l; i++) {
		                res += '<br/>' + params[i][0] + ' : ' ;
		                
		                
		                if (i==0) {
		                	res += (params[i][2]/10).toFixed(3);
		                	res +=  ' Mpa';
						} else if(i==1) {
							res += (params[i][2]);
							res +=  ' 方/时';
						} else if(i==3) {
							if (typeof params[i][2]!="string") {
								res += (params[i][2]/10).toFixed(3);
							} else {
								res += params[i][2];
							}
							res +=  ' Mpa';
						} else if(i==2) {
							res += (params[i][2]);
							res +=  ' 方/时';
						}
		            }
		            return res;
		        }
			},
			dataZoom : {
		        show : true,
		        realtime : true,
		        start : 0,
		        end : 90
		    },
			calculable : false,
			xAxis : [
				{
					type : 'category',
					data : station.x
				}
			],
			yAxis : [
				{
					type : 'value',
					name : "压力（兆帕）",
					min : 0,
					max : 9,
					splitNumber : 3,
					axisLabel : {
		                formatter: function (value) {
		                    // Function formatter
		                    return value / 10;
		                }
		            }
				},
				{
					type : 'value',
					name : "流量（立方米/小时）",
					min : 2000,
					max : 3500,
					splitNumber : 3
				}
				
			],
			legend: {
		        data:['预测压力','预测流量','实测压力','实测流量']
		    },
			series : [
				{
					name:'预测压力',
					type:'line',
					symbol:'none',
					yAxisIndex: 0,//默认是0
					data:tempp
				},
				{
					name:'预测流量',
					type:'line',
					symbol:'none',
					data:tempf,
					yAxisIndex: 1
				},
				{
					name:'实测压力',
					type:'line',
					symbol:'none',
					data:temptp,
					yAxisIndex: 0
				},
				{
					name:'实测流量',
					type:'line',
					symbol:'none',
					data:station.tf,
					yAxisIndex: 1
				}
			]
		};
	
	return option;
}

