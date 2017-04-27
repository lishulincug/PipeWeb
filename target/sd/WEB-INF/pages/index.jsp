<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>首页</title>
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/index.css" />
		<script type="text/javascript" src="js/jquery-2.1.0.js" ></script>
		<script type="text/javascript" src="js/bootstrap.min.js" ></script>
	</head>
	<body>
		
		<div class="navbar-fixed-top  head">
			
			<img class="pull-left" src="img/title.png" style="padding-top: 1%;"/>
			<ul class="head_li">
				<li>
					<img src="img/exit.png"/><br>
					<span>注销</span>
				</li>
				
				<li>
					<img src="img/user-icon.png" /><br>
					<span>用户管理</span>
				</li>
				<li>
					<img src="img/yingyong-icon.png" /><br>
					<span>应用中心</span>
				</li>
			</ul>
		</div>
		
		
		<div class="container-fluid content">
			<div class="col-lg-6" id="menu_1">
				<div class="col-lg-6 left">
					<div class="img_icon">
						<a href="#">
							<img src="img/product-icon.png"  class="center img_play"/>
							<p class="text-center  img_title">智慧生产</p>
						</a>
					</div>
					<div class="text_down">
						<p>面向水的生产、输送全过程，数据进行统一组织与展示，实现对供水系统的实时监控、精确模拟、科学调度与高效管理，以保证基本业务正常运行，提高应急能力，保障供水安全。</p>
					</div>
				</div>
				<div class="col-lg-6 right">
					<div class="row">
						<div class="col-lg-6 set-effect" style="background-color:#3ab5d4 ;">
							<a href="/PipeWeb/map">
								<img src="img/shuiyuan.png" class="img_right  img_play img_play"/>
								<h4 class="text-center  right_text">水源监控</h4>
							</a>
						</div>
						<div class="col-lg-6 set-effect" style="background-color: #66aaf3;">
							<a href="#">
								<img src="img/GSM.png" class="img_right  img_play img_play"/>
								<h4 class="text-center  right_text">G-S-M</h4>
							</a>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-4 set-effect" style="background-color: #eeba33;margin-left: 0px;">
							<a href="#">
								<img src="img/zikong.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">生产调度</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #8bc26f;">
							<a href="#">
								<img src="img/SCADA.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="right_text">SCADA</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #3ab5d4;">
							<a href="#">
								<img src="img/guanwang.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">管网模型</h4>
							</a>
						</div>
					</div>
					
					
					<div class="row">
						<div class="col-lg-4 set-effect" style="background-color: #5eb1dd;">
							<a href="#">
								<img src="img/ergong.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">二次供水</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #89c6e5;">
							<a href="#">
								<img src="img/diaodu.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="right_text">排水污水</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #5eb1dd;">
							<a href="#">
								<img src="img/zhiyinshui.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">直饮水</h4>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6" id="menu_2">
				<div class="col-lg-6 left">
					<div class="img_icon">
						<a href="#">
							<img src="img/product-icon.png"  class="center img_play"/>
							<p class="text-center  img_title">智慧运维</p>
						</a>
					</div>
					<div class="text_down">
						<p>面向供水系统所有设备的管理与维护，实现企业设备、资产及业务作业的精细化管理，提升工作效率，保障供水系统可靠运行。</p>
					</div>
				</div>
				<div class="col-lg-6 right">
					<div class="row">
						<div class="col-lg-6 set-effect" style="background-color:#3ab5d4 ;">
							<a href="#">
								<img src="img/shuiyuan.png" class="img_right  img_play"/>
								<h4 class="text-center  right_text">水源监控</h4>
							</a>
						</div>
						<div class="col-lg-6 set-effect" style="background-color: #66aaf3;">
							<a href="#">
								<img src="img/GSM.png" class="img_right  img_play"/>
								<h4 class="text-center  right_text">G-S-M</h4>
							</a>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-4 set-effect" style="background-color: #eeba33;margin-left: 0px;">
							<a href="#">
								<img src="img/zikong.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">生产调度</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #8bc26f;">
							<a href="#">
								<img src="img/SCADA.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="right_text">SCADA</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #3ab5d4;">
							<a href="#">
								<img src="img/guanwang.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">管网模型</h4>
							</a>
						</div>
					</div>
					
					
					<div class="row">
						<div class="col-lg-4 set-effect" style="background-color: #5eb1dd;">
							<a href="#">
								<img src="img/ergong.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">二次供水</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #89c6e5;">
							<a href="#">
								<img src="img/diaodu.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="right_text">排水污水</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #5eb1dd;">
							<a href="#">
								<img src="img/zhiyinshui.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">直饮水</h4>
							</a>
						</div>
					</div>
				</div>
			</div>	
			<div class="col-lg-6" id="menu_3">
				<div class="col-lg-6 left">
					<div class="img_icon">
						<a href="#">
							<img src="img/product-icon.png"  class="center img_play"/>
							<p class="text-center  img_title">智慧服务</p>
						</a>
					</div>
					<div class="text_down">
						<p>以客户服务为中心，是供水系统面向客户的感知层，为系统管理与建设科学决策提供重要依据；智慧服务系统以提高用户体验为目标，高效提升水司的服务能力与公众形象。</p>
					</div>
				</div>
				<div class="col-lg-6 right">
					<div class="row">
						<div class="col-lg-6 set-effect" style="background-color:#3ab5d4 ;">
							<a href="/PipeWeb/map">
								<img src="img/shuiyuan.png" class="img_right  img_play"/>
								<h4 class="text-center  right_text">水源监控</h4>
							</a>
						</div>
						<div class="col-lg-6 set-effect" style="background-color: #66aaf3;">
							<a href="#">
								<img src="img/GSM.png" class="img_right  img_play"/>
								<h4 class="text-center  right_text">G-S-M</h4>
							</a>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-4 set-effect" style="background-color: #eeba33;margin-left: 0px;">
							<a href="#">
								<img src="img/zikong.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">生产调度</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #8bc26f;">
							<a href="#">
								<img src="img/SCADA.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="right_text">SCADA</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #3ab5d4;">
							<a href="#">
								<img src="img/guanwang.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">管网模型</h4>
							</a>
						</div>
					</div>
					
					
					<div class="row">
						<div class="col-lg-4 set-effect" style="background-color: #5eb1dd;">
							<a href="#">
								<img src="img/ergong.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">二次供水</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #89c6e5;">
							<a href="#">
								<img src="img/diaodu.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="right_text">排水污水</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #5eb1dd;">
							<a href="#">
								<img src="img/zhiyinshui.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">直饮水</h4>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6" id="menu_4">
				<div class="col-lg-6 left">
					<div class="img_icon">
						<a href="#">
							<img src="img/product-icon.png"  class="center img_play"/>
							<p class="text-center  img_title">基础支撑</p>
						</a>
					</div>
					<div class="text_down">
						<p>提供业务系统的基础支撑服务与计算分析能力，实现对通用模块的统一管理，有效打破信息孤岛，实现数据、信息与接口服务的共享，是实现智慧水务供水系统统一管理的基础。</p>
					</div>
				</div>
				<div class="col-lg-6 right">
					<div class="row">
						<div class="col-lg-6 set-effect" style="background-color:#3ab5d4 ;">
							<a href="#">
								<img src="img/shuiyuan.png" class="img_right  img_play"/>
								<h4 class="text-center  right_text">水源监控</h4>
							</a>
						</div>
						<div class="col-lg-6 set-effect" style="background-color: #66aaf3;">
							<a href="#">
								<img src="img/GSM.png" class="img_right  img_play"/>
								<h4 class="text-center  right_text">G-S-M</h4>
							</a>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-4 set-effect" style="background-color: #eeba33;margin-left: 0px;">
							<a href="#">
								<img src="img/zikong.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">生产调度</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #8bc26f;">
							<a href="#">
								<img src="img/SCADA.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="right_text">SCADA</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #3ab5d4;">
							<a href="#">
								<img src="img/guanwang.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">管网模型</h4>
							</a>
						</div>
					</div>
					
					
					<div class="row">
						<div class="col-lg-4 set-effect" style="background-color: #5eb1dd;">
							<a href="#">
								<img src="img/ergong.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">二次供水</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #89c6e5;">
							<a href="#">
								<img src="img/diaodu.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="right_text">排水污水</h4>
							</a>
						</div>
						<div class="col-lg-4 set-effect" style="background-color: #5eb1dd;">
							<a href="#">
								<img src="img/zhiyinshui.png" class="img_right  img_play" style="margin-left: -13%;"/>
								<h4 class="  right_text">直饮水</h4>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
