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

-- 導出 ch12_db 的資料庫結構
CREATE DATABASE IF NOT EXISTS `ch12_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ch12_db`;


-- 導出  表 ch12_db.學生表 結構
CREATE TABLE IF NOT EXISTS `學生表` (
  `學號` char(8) NOT NULL,
  `姓名` char(4) NOT NULL,
  `性別` char(1) DEFAULT '男',
  `電話` char(12) DEFAULT NULL,
  `地址` char(20) DEFAULT NULL,
  PRIMARY KEY (`學號`),
  UNIQUE KEY `電話` (`電話`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch12_db.學生表 的資料：~5 rows (大約)
/*!40000 ALTER TABLE `學生表` DISABLE KEYS */;
INSERT INTO `學生表` (`學號`, `姓名`, `性別`, `電話`, `地址`) VALUES
	('S001', '一心', '男', '1111111', '前金區'),
	('S002', '二聖', '男', '2222222', '小港區'),
	('S003', '三多', '女', '3333333', '新興區'),
	('S004', '四維', '男', '4444444', '三民區'),
	('S005', '五福', '女', '5555555', '小港區');
/*!40000 ALTER TABLE `學生表` ENABLE KEYS */;


-- 導出  表 ch12_db.課程表 結構
CREATE TABLE IF NOT EXISTS `課程表` (
  `課號` char(5) NOT NULL,
  `課名` char(20) NOT NULL,
  `學分數` int(11) DEFAULT '3',
  PRIMARY KEY (`課號`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch12_db.課程表 的資料：~8 rows (大約)
/*!40000 ALTER TABLE `課程表` DISABLE KEYS */;
INSERT INTO `課程表` (`課號`, `課名`, `學分數`) VALUES
	('C001', '程式設計', 4),
	('C002', '計算機概論', 3),
	('C003', '資料結構', 3),
	('C004', '系統分析', 4),
	('C005', '資料庫系統', 4),
	('C006', '數位學習', 3),
	('C007', '手機程式', 3),
	('C008', '機器人程式', 3);
/*!40000 ALTER TABLE `課程表` ENABLE KEYS */;


-- 導出  表 ch12_db.選課表 結構
CREATE TABLE IF NOT EXISTS `選課表` (
  `學號` char(8) NOT NULL,
  `課號` char(5) NOT NULL,
  `成績` int(11) NOT NULL,
  PRIMARY KEY (`學號`,`課號`),
  KEY `課號` (`課號`),
  CONSTRAINT `選課表_ibfk_1` FOREIGN KEY (`學號`) REFERENCES `學生表` (`學號`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `選課表_ibfk_2` FOREIGN KEY (`課號`) REFERENCES `課程表` (`課號`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在導出表  ch12_db.選課表 的資料：~10 rows (大約)
/*!40000 ALTER TABLE `選課表` DISABLE KEYS */;
INSERT INTO `選課表` (`學號`, `課號`, `成績`) VALUES
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
/*!40000 ALTER TABLE `選課表` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
