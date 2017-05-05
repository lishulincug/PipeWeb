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

var getEsEchartOption = function(station){
	
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
        	legend: {
                data:['压力','流量','分级'],
                x:'right'
            },
			tooltip : {
				trigger: 'axis',
		        formatter: function (params,ticket,callback) {
		            var res = params[0][1];
		            for (var i = 0, l = params.length; i < l; i++) {
		                res += '<br/>' + params[i][0] + ' : ' ;
		                var judge = params[i][0];
		                //console.log(judge);
		                if (judge == "压力") {
		                	res += (params[i][2]/10).toFixed(3);
		                	res +=  ' Mpa';
						} else if(judge == "流量") {
							res += (params[i][2]);
							res +=  ' 方/时';
						} else if(judge == "分级"){
							var x = params[i].dataIndex;
							var aa = params[i].series.divide[x];
							res += (aa);
							res += '级';
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
				},
			],
			series : [
				
				{
					name:'流量',
					type:'bar',
					//barGap:50,//柱间间距，默认30
					data:tempf,
					yAxisIndex: 1
				},
				{
					name:'压力',
					type:'line',
					yAxisIndex: 0,//默认是0
					data:tempp
				},
			]
		};
	return option;
}