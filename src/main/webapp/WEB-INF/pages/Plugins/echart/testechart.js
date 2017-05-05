// 路径配置
require.config({
    paths:{ 
        'echarts' : 'http://echarts.baidu.com/build/echarts',
        'echarts/chart/bar' : 'http://echarts.baidu.com/build/echarts'
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/bar',
        'echarts/chart/line'
    ],
    function (ec) {
    	initAngular();
    }
);

var gettestechartOption = function(){
    var option = {
    	title:{
    		text: "cname",
    		x:'center'
    	},
		tooltip : {
			trigger: 'axis'
		},
		calculable : true,
		legend: {
			data:['预测值','目标压力','运行状态'],
			x:'right'
		},
		xAxis : [
			{
				type : 'category',
				data : ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
			}
		],
		yAxis : [
			{
				type : 'value',
				name : "压力（兆帕）"
			},
		],
		series : [
	
			{
				//name:'蒸发量',
				type:'bar',
				barGap:50,//柱间间距，默认30
				data:[2.0, 4.9, 7.0, 23.2, 25.6, 20.7, 13.6, 16.2, 32.6, 20.0, 6.4, 3.3,2.0, 4.9, 7.0, 23.2, 25.6, 26.7, 15.6, 16.2, 32.6, 20.0, 6.4, 3.3]
			},
			{
				name:'预测值',
				type:'line',
				yAxisIndex: 0,//默认是0
				data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			},
			{
				name:'目标压力',
				type:'line',
				yAxisIndex: 0,
				data:[3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,2.0, 2.2]
			},
			{
				name:'运行状态',
				type:'line',
				yAxisIndex: 0,
				data:[6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,2.0, 2.2, 3.3, 4.5]
			}
		]
	};
    return option;
}
