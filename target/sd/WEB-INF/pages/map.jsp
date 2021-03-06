<%@ page import="com.imudges.entity.PipeWeb" %>
<%@ page import="java.util.List" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<style type="text/css">
	body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
	</style>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=ow6HkArpmfGisypGOmAU9cILjNUWmh3v"></script>
	<title>地图展示</title>
</head>
<body>
	<div id="allmap"></div>
</body>
</html>
<script type="text/javascript">
	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	var marker = new BMap.Marker(new BMap.Point(116.404, 39.915));        // 创建标注
    <%List<PipeWeb> allPipeWeb = (List<PipeWeb>)request.getAttribute("allPipeWeb");
    PipeWeb pipeWeb = allPipeWeb.get(0);
    %>
	map.addOverlay(marker);                     // 将标注添加到地图中
	var opts = {    
	 width : 250,     // 信息窗口宽度    
	 height: 100,     // 信息窗口高度    
	 title : "压力：<%=pipeWeb.getPwPress()%>"  // 信息窗口标题
	}    
	var infoWindow = new BMap.InfoWindow("液位：<%=pipeWeb.getPwFlow()%>", opts);  // 创建信息窗口对象
	map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
</script>
