-- 新增資料
INSERT INTO `學生表` (`學號`, `姓名`, `性別`, `電話`, `地址`) VALUES ('S006', '六路', '男', '6666666', '東南區');

-- 更新資料
UPDATE `選課表` SET `成績` = `成績` * 1.2 WHERE `成績` < 70

-- 請找出「學生表」表中，「性別」是「女」的學生紀錄
SELECT * FROM `學生表` WHERE `性別` = '女'

-- 在學生表中顯示所有學生基本資料
SELECT * FROM `學生表`

-- 使用別名 (AS 可省略不寫)
SELECT `課名` AS '課程名稱',`學分數` FROM `課程表`

-- 加減 (需設置在原始欄位)
SELECT `學號`,`課號`,`成績`,`成績` + 5 AS '調整後成績' FROM `選課表`

-- 條件
SELECT `學號`,`課號`,`成績`,`成績` + 5 AS '調整後成績' FROM `選課表` WHERE `成績` >= 80

-- 邏輯
SELECT `學號`,`成績` FROM `選課表` WHERE `課號` = 'C005' AND `成績` >= 60
SELECT `學號`,`課號`,`成績` FROM `選課表` WHERE `課號` = 'C004' OR `課號` = 'C005'
SELECT `學號`,`成績` FROM `選課表` WHERE `課號` = 'C001' AND NOT `成績` >= 60

-- 空值 (要用 IS，不能用 =)
SELECT `學號`,`課號`,`成績` FROM `選課表` WHERE `成績` IS NULL
SELECT `學號`,`課號`,`成績` FROM `選課表` WHERE `成績` IS NOT NULL

-- 模糊運算
SELECT * FROM `學生表` WHERE `地址` LIKE '小%' -- % 等同於多個字元，Like 是匹配字
SELECT * FROM `選課表` WHERE `課號` IN ('C004','C005') -- IN 類似於 .includes
SELECT `學號`,`課號`,`成績` FROM `選課表` WHERE `成績` BETWEEN 60 AND 90 -- 可用 >= AND <= 代替

-- 隨堂測驗
SELECT `學號`,`課號`,`成績` FROM `選課表` WHERE `課號` IN ('C004','C005') AND `成績` BETWEEN 60 AND 90
SELECT `學號`,`課號`,`成績` FROM `選課表` WHERE `課號` IN ('C004','C005') AND `成績` >=60 AND `成績` <=90

-- 加減 (可在 WHERE 使用)
SELECT * FROM `選課表` WHERE `成績` *1.2 < 70

-- 聚合函數
SELECT COUNT(*) AS '全班人數' FROM `選課表`
SELECT COUNT(`成績`) AS 有成績總比數 FROM `選課表` -- 計算指定欄位不含 NULL 的個數
SELECT COUNT(*) FROM `選課表` WHERE `成績` IS NOT NULL
SELECT `學號`,AVG(`成績`) AS '平均成績' FROM `選課表` WHERE `課號` = 'C005' GROUP BY `學號`
SELECT SUM(`成績`) FROM `選課表` WHERE `課號` = 'C005'
SELECT SUM(`成績`) FROM `選課表` WHERE `學號` = 'S001'
SELECT MAX(`成績`) FROM `選課表` WHERE `課號` = 'C005'
SELECT MAX(`成績`) FROM `選課表` WHERE `成績` BETWEEN 60 AND 80
SELECT MIN(`成績`) FROM `選課表` WHERE `成績` >= 60

-- 排序 (ASC 為預設)
SELECT * FROM `選課表` ORDER BY `成績` ASC -- 小到大
SELECT * FROM `選課表` ORDER BY `成績` DESC -- 大到小
SELECT * FROM `選課表` ORDER BY `學號`,`成績` ASC -- 先排學號在排成績
SELECT * FROM `選課表` ORDER BY `學號` ASC,`成績` DESC

-- 限制比數
SELECT * FROM `選課表` WHERE `課號` = 'C005' ORDER BY `成績` DESC LIMIT 2

-- Group By 欄位
SELECT `學號`,COUNT(*) FROM `選課表` GROUP BY `學號`
SELECT `學號`,AVG(`成績`) FROM `選課表` GROUP BY `學號`
SELECT `課號`,COUNT(*) FROM `選課表` GROUP BY `課號` ORDER BY `課號` DESC
SELECT `課號`,COUNT(*) AS '選課人數',MAX(`成績`) AS '最高分' FROM `選課表` GROUP BY `課號` ORDER BY `課號` ASC
SELECT `課號`,COUNT(*) AS '選修人數' , AVG(`成績`) AS '平均成績' FROM `選課表` GROUP BY `課號` ORDER BY `課號` ASC

-- Having 欄位
SELECT `學號`, AVG(`成績`) AS '平均成績' FROM `選課表` GROUP BY `學號` HAVING AVG(`成績`) > 80
SELECT `學號`,COUNT(*) AS '課程總數' FROM `選課表` GROUP BY `學號` HAVING COUNT(*) >= 2

-- DISTINCT (去除重複值)
SELECT DISTINCT `學號` FROM `選課表`

/*
- 先合併資料表
- 去掉重複欄位 (重複選像須擇一)
- 之後如同處理單一資料表
- INNER JOIN 的 ON 與 WHERE 沒有差別
- [LEFT | RIGHT] OUTER JOIN 的 ON 用來主要判斷，WHERE 用來次要判斷 (ON 為必填)
*/



-- Equi-Join
SELECT * FROM `學生表`,`課程表` WHERE `學生表`.`課號` = `課程表`.`課號`
SELECT * FROM `學生資料表` AS A,`選課資料表` AS B WHERE A.`學號` = B.`學號` -- 資料表也可設定暱稱 (非字串形式)
SELECT * FROM `學生資料表` AS A,`選課資料表` AS B WHERE A.`學號` = B.`學號` AND B.`成績` > 70
SELECT A.`學號`,`姓名`,`課號`,`成績` FROM `學生資料表` AS A,`選課資料表` AS B WHERE A.`學號` = B.`學號` AND B.`成績` > 70 -- 重複欄位須擇一
SELECT A.`學號`,`姓名`,`課號`,AVG(`成績`) FROM `學生資料表` AS A,`選課資料表` AS B WHERE A.`學號` = B.`學號` AND B.`成績` > 70 GROUP BY A.`學號`
SELECT A.`學號`,`姓名`,`課號`,AVG(`成績`) FROM `學生資料表` AS A,`選課資料表` AS B WHERE A.`學號` = B.`學號` AND B.`成績` > 70 GROUP BY A.`學號` HAVING AVG(B.`成績`) >= 90
SELECT A.`學號`,`姓名`,`課號`,AVG(`成績`) FROM `學生資料表` AS A,`選課資料表` AS B WHERE A.`學號` = B.`學號` AND B.`成績` > 70 GROUP BY A.`學號` HAVING AVG(B.`成績`) >= 90 ORDER BY `成績` ASC

-- INNER Join (改成 INNER LOIN ... ON ...)
SELECT * FROM `學生表` INNER JOIN `課程表` ON `學生表`.`課號` = `課程表`.`課號`
SELECT A.`學號`,`姓名`,`課號`,AVG(`成績`) AS '平均成績' FROM `學生資料表` AS A INNER JOIN `選課資料表` AS B ON A.`學號` = B.`學號` AND `成績` >= 70 GROUP BY `學號` HAVING AVG(`成績`) >= 90 ORDER BY AVG(`成績`) ASC

-- LEFT OUTER LOIN
SELECT * FROM `老師資料表` AS A LEFT OUTER JOIN `課程資料表` AS B ON A.`老師編號` = B.`老師編號`
SELECT A.`老師編號`,`老師姓名` FROM `老師資料表` AS A LEFT OUTER JOIN `課程資料表` AS B ON A.`老師編號` = B.`老師編號` WHERE B.老師編號 IS NULL

-- RIGHT OUTER JOIN
SELECT * FROM `老師資料表` AS A RIGHT OUTER JOIN `課程資料表` AS B ON A.`老師編號` = B.`老師編號`
SELECT `課程代碼`,`課程名稱` FROM `老師資料表` AS A RIGHT OUTER JOIN `課程資料表` AS B ON A.`老師編號` = B.`老師編號` WHERE `老師姓名` IS NULL

-- 除法
SELECT * FROM `課程檔` AS C WHERE NOT EXISTS
(
SELECT * FROM `學生檔` AS A WHERE NOT EXISTS
(
SELECT * FROM `選課檔` AS B WHERE B.`課號` = C.`課號` AND B.`學號` = A.`學號`  
)
)

-- 子查詢
SELECT * FROM `學生檔` AS A,`選課檔` AS B WHERE A.`學號` = B.`學號` AND B.`課號` = (SELECT C.`課號` FROM `課程檔` AS C WHERE `課名` = '資料庫系統')
SELECT * FROM `學生檔` AS A WHERE A.`學號` = (SELECT B.`學號` FROM `選課檔` AS B WHERE B.`課號` = 'C005' AND B.`學號` = A.`學號`)

-- 子查詢 (測驗)
SELECT * FROM `學生成績表` AS A WHERE A.`資料庫` > (SELECT AVG(`資料庫`) FROM `學生成績表` AS B)
SELECT * FROM `學生成績表` AS A WHERE A.`資料庫` = (SELECT MAX(`資料庫`) FROM `學生成績表`)

