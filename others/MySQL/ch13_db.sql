-- --------------------------------------------------------
-- 主機:                           127.0.0.1
-- 服務器版本:                        5.7.10-log - MySQL Community Server (GPL)
-- 服務器操作系統:                      Win64
-- HeidiSQL 版本:                  9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 導出 ch13_db 的資料庫結構
CREATE DATABASE IF NOT EXISTS `ch13_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ch13_db`;


-- 導出  表 ch13_db.學生成績表 結構
CREATE TABLE IF NOT EXISTS `學生成績表` (
  `學號` char(5) NOT NULL,
  `姓名` char(4) NOT NULL,
  `資料庫` int(11) DEFAULT NULL,
  `資料結構` int(11) DEFAULT NULL,
  `程式設計` int(11) DEFAULT NULL,
  PRIMARY KEY (`學號`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch13_db.學生成績表 的資料：~10 rows (大約)
/*!40000 ALTER TABLE `學生成績表` DISABLE KEYS */;
INSERT INTO `學生成績表` (`學號`, `姓名`, `資料庫`, `資料結構`, `程式設計`) VALUES
	('S0001', '一心', 100, 85, 80),
	('S0002', '二聖', 70, 75, 90),
	('S0003', '三多', 85, 75, 80),
	('S0004', '四維', 95, 100, 100),
	('S0005', '五福', 80, 65, 70),
	('S0006', '六合', 60, 55, 80),
	('S0007', '七賢', 45, 45, 70),
	('S0008', '八德', 55, 30, 50),
	('S0009', '九如', 70, 65, 70),
	('S0010', '十全', 60, 55, 80);
/*!40000 ALTER TABLE `學生成績表` ENABLE KEYS */;


-- 導出  表 ch13_db.學生檔 結構
CREATE TABLE IF NOT EXISTS `學生檔` (
  `學號` char(8) NOT NULL,
  `姓名` char(4) NOT NULL,
  `性別` char(1) DEFAULT '男',
  `電話` char(12) DEFAULT NULL,
  `地址` char(20) DEFAULT NULL,
  PRIMARY KEY (`學號`),
  UNIQUE KEY `電話` (`電話`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch13_db.學生檔 的資料：~5 rows (大約)
/*!40000 ALTER TABLE `學生檔` DISABLE KEYS */;
INSERT INTO `學生檔` (`學號`, `姓名`, `性別`, `電話`, `地址`) VALUES
	('S001', '一心', '男', '1111111', '前金區'),
	('S002', '二聖', '男', '2222222', '小港區'),
	('S003', '三多', '女', '3333333', '新興區'),
	('S004', '四維', '男', '4444444', '三民區'),
	('S005', '五福', '女', '5555555', '小港區');
/*!40000 ALTER TABLE `學生檔` ENABLE KEYS */;


-- 導出  表 ch13_db.學生表 結構
CREATE TABLE IF NOT EXISTS `學生表` (
  `學號` char(5) NOT NULL,
  `姓名` char(5) NOT NULL,
  `課號` char(4) NOT NULL DEFAULT '男',
  PRIMARY KEY (`學號`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch13_db.學生表 的資料：~2 rows (大約)
/*!40000 ALTER TABLE `學生表` DISABLE KEYS */;
INSERT INTO `學生表` (`學號`, `姓名`, `課號`) VALUES
	('S0001', '張三', 'C001'),
	('S0002', '李四', 'C002');
/*!40000 ALTER TABLE `學生表` ENABLE KEYS */;


-- 導出  表 ch13_db.學生資料表 結構
CREATE TABLE IF NOT EXISTS `學生資料表` (
  `學號` char(5) NOT NULL,
  `姓名` char(4) NOT NULL,
  `系碼` char(4) DEFAULT NULL,
  PRIMARY KEY (`學號`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch13_db.學生資料表 的資料：~4 rows (大約)
/*!40000 ALTER TABLE `學生資料表` DISABLE KEYS */;
INSERT INTO `學生資料表` (`學號`, `姓名`, `系碼`) VALUES
	('S0001', '張三', 'D001'),
	('S0002', '李四', 'D001'),
	('S0003', '王五', 'D002'),
	('S0004', '李安', 'D003');
/*!40000 ALTER TABLE `學生資料表` ENABLE KEYS */;


-- 導出  表 ch13_db.老師資料表 結構
CREATE TABLE IF NOT EXISTS `老師資料表` (
  `老師編號` char(5) NOT NULL,
  `老師姓名` char(4) NOT NULL,
  PRIMARY KEY (`老師編號`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch13_db.老師資料表 的資料：~4 rows (大約)
/*!40000 ALTER TABLE `老師資料表` DISABLE KEYS */;
INSERT INTO `老師資料表` (`老師編號`, `老師姓名`) VALUES
	('T0001', '張三'),
	('T0002', '李四'),
	('T0003', '王五'),
	('T0004', '李安');
/*!40000 ALTER TABLE `老師資料表` ENABLE KEYS */;


-- 導出  表 ch13_db.課程檔 結構
CREATE TABLE IF NOT EXISTS `課程檔` (
  `課號` char(5) NOT NULL,
  `課名` char(20) NOT NULL,
  `學分數` int(11) DEFAULT '3',
  PRIMARY KEY (`課號`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch13_db.課程檔 的資料：~8 rows (大約)
/*!40000 ALTER TABLE `課程檔` DISABLE KEYS */;
INSERT INTO `課程檔` (`課號`, `課名`, `學分數`) VALUES
	('C001', '程式設計', 4),
	('C002', '計算機概論', 3),
	('C003', '資料結構', 3),
	('C004', '系統分析', 4),
	('C005', '資料庫系統', 4),
	('C006', '數位學習', 3),
	('C007', '手機程式', 3),
	('C008', '機器人程式', 3);
/*!40000 ALTER TABLE `課程檔` ENABLE KEYS */;


-- 導出  表 ch13_db.課程表 結構
CREATE TABLE IF NOT EXISTS `課程表` (
  `課號` char(4) NOT NULL,
  `課名` char(20) NOT NULL,
  `學分數` int(11) DEFAULT '3',
  PRIMARY KEY (`課號`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch13_db.課程表 的資料：~3 rows (大約)
/*!40000 ALTER TABLE `課程表` DISABLE KEYS */;
INSERT INTO `課程表` (`課號`, `課名`, `學分數`) VALUES
	('C001', '手機', 3),
	('C002', '機器人', 3),
	('C003', '物聯網', 2);
/*!40000 ALTER TABLE `課程表` ENABLE KEYS */;


-- 導出  表 ch13_db.課程資料表 結構
CREATE TABLE IF NOT EXISTS `課程資料表` (
  `課程代碼` char(4) NOT NULL,
  `課程名稱` char(10) NOT NULL,
  `老師編號` char(5) DEFAULT NULL,
  PRIMARY KEY (`課程代碼`),
  KEY `老師編號` (`老師編號`),
  CONSTRAINT `課程資料表_ibfk_1` FOREIGN KEY (`老師編號`) REFERENCES `老師資料表` (`老師編號`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch13_db.課程資料表 的資料：~4 rows (大約)
/*!40000 ALTER TABLE `課程資料表` DISABLE KEYS */;
INSERT INTO `課程資料表` (`課程代碼`, `課程名稱`, `老師編號`) VALUES
	('C001', '資料庫', 'T0001'),
	('C002', '資料結構', 'T0002'),
	('C003', '程式設計', NULL),
	('C004', '系統分析', NULL);
/*!40000 ALTER TABLE `課程資料表` ENABLE KEYS */;


-- 導出  表 ch13_db.選課檔 結構
CREATE TABLE IF NOT EXISTS `選課檔` (
  `學號` char(8) NOT NULL,
  `課號` char(5) NOT NULL,
  `成績` int(11) NOT NULL,
  PRIMARY KEY (`學號`,`課號`),
  KEY `課號` (`課號`),
  CONSTRAINT `選課檔_ibfk_1` FOREIGN KEY (`學號`) REFERENCES `學生檔` (`學號`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `選課檔_ibfk_2` FOREIGN KEY (`課號`) REFERENCES `課程檔` (`課號`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch13_db.選課檔 的資料：~10 rows (大約)
/*!40000 ALTER TABLE `選課檔` DISABLE KEYS */;
INSERT INTO `選課檔` (`學號`, `課號`, `成績`) VALUES
	('S001', 'C001', 56),
	('S001', 'C005', 73),
	('S002', 'C002', 92),
	('S002', 'C005', 63),
	('S003', 'C004', 92),
	('S003', 'C005', 70),
	('S004', 'C003', 75),
	('S004', 'C004', 88),
	('S004', 'C005', 68),
	('S005', 'C005', 95);
/*!40000 ALTER TABLE `選課檔` ENABLE KEYS */;


-- 導出  表 ch13_db.選課資料表 結構
CREATE TABLE IF NOT EXISTS `選課資料表` (
  `學號` char(5) NOT NULL,
  `課號` char(4) NOT NULL,
  `成績` int(11) DEFAULT NULL,
  PRIMARY KEY (`學號`,`課號`),
  CONSTRAINT `選課資料表_ibfk_1` FOREIGN KEY (`學號`) REFERENCES `學生資料表` (`學號`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch13_db.選課資料表 的資料：~5 rows (大約)
/*!40000 ALTER TABLE `選課資料表` DISABLE KEYS */;
INSERT INTO `選課資料表` (`學號`, `課號`, `成績`) VALUES
	('S0001', 'C001', 67),
	('S0001', 'C002', 85),
	('S0001', 'C003', 100),
	('S0002', 'C004', 89),
	('S0003', 'C002', 90);
/*!40000 ALTER TABLE `選課資料表` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
