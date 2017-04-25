-- 创建数据库
create database if not EXISTS `waterpipe`;
-- 使用数据库
use waterpipe;
-- 删除已创建的管网表
DROP TABLE pipeweb;
-- 创建管网表
CREATE TABLE `waterpipe`.`pipeweb` (
  `pw_id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '唯一标识' ,
  `pw_local` VARCHAR(40) NULL COMMENT '水源位置' ,
  `pw_flow` BIGINT NULL COMMENT '流量' ,
  `pw_press` DOUBLE  NULL COMMENT '压力' ,
  PRIMARY KEY (`pw_id`))
  ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT = '管网';
-- 管网表中插入数据
INSERT INTO `pipeweb` ( `pw_local`, `pw_flow`, `pw_press`) VALUES ('调度中心', '4950588', '0.253');
INSERT INTO `pipeweb` ( `pw_local`, `pw_flow`, `pw_press`) VALUES ('妇幼保健站', '4950588', '0.253');
INSERT INTO `pipeweb` ( `pw_local`, `pw_flow`, `pw_press`) VALUES ('市政公司', '4950588', '0.253');
INSERT INTO `pipeweb` ( `pw_local`, `pw_flow`, `pw_press`) VALUES ('保税区松下', '4950588', '0.253');
-- 删除水厂表
DROP TABLE waterpipe.waterfactory;
-- 创建水厂表
CREATE TABLE `waterpipe`.`waterfactory` (
  `wf_id` BIGINT NOT NULL AUTO_INCREMENT ,
  `wf_local` VARCHAR(40) NULL DEFAULT NULL COMMENT '水源地' ,
  `wf_voltage` INT NULL DEFAULT NULL COMMENT '电压' ,
  `wf_current` INT NULL DEFAULT NULL COMMENT '电流' ,
  `wf_press` DOUBLE NULL DEFAULT NULL COMMENT '压力' ,
  `wf_flow` BIGINT NULL DEFAULT NULL COMMENT '流量' ,
  `wf_level` INT NULL DEFAULT NULL COMMENT '液位' ,
  `wf_valve` INT NULL DEFAULT '0' COMMENT '阀门控制' ,
  PRIMARY KEY (`wf_id`)) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT = '水厂表';
-- 向水厂表中插入数据
INSERT INTO `waterfactory` ( `wf_local`, `wf_voltage`, `wf_current`, `wf_press`, `wf_flow`, `wf_level`, `wf_valve`)
VALUES ( '管家楼', '220', '400', '2.54545', '4545', '45', '0');
INSERT INTO `waterfactory` ( `wf_local`, `wf_voltage`, `wf_current`, `wf_press`, `wf_flow`, `wf_level`, `wf_valve`)
VALUES ( '管家楼', '220', '400', '2.54545', '4545', '45', '0');
INSERT INTO `waterfactory` ( `wf_local`, `wf_voltage`, `wf_current`, `wf_press`, `wf_flow`, `wf_level`, `wf_valve`)
VALUES ( '管家楼', '220', '400', '2.54545', '4545', '45', '0');
INSERT INTO `waterfactory` ( `wf_local`, `wf_voltage`, `wf_current`, `wf_press`, `wf_flow`, `wf_level`, `wf_valve`)
VALUES ( '管家楼', '220', '400', '2.54545', '4545', '45', '0');
INSERT INTO `waterfactory` ( `wf_local`, `wf_voltage`, `wf_current`, `wf_press`, `wf_flow`, `wf_level`, `wf_valve`)
VALUES ( '管家楼', '220', '400', '2.54545', '4545', '45', '0');
