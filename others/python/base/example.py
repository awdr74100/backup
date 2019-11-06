# 變數宣告
a1 = 12
a2 = 21.2
a3 = 'helli'
a4 = ['red', 'black', 'yellow']
a5 = {'n1': 10, 'n2': 20}
a6 = True

# 型態轉換
float(a1)
int(a2)
str(a3)

# 驗證型態
type(a1)

# 反斜線列印 (避免錯誤)
# print('there\'s a sanke')

# 字串陣列
strArr = 'hi boy'
# print(strArr[1])

# 字串相關方法
len(strArr)  # 計算字串長度
strArr.lower()  # 字串轉成小寫
strArr.upper()  # 字串轉成大寫
strArr.isalpha() # 檢查字串是否不包含任何非字母字串 (數字、空白)
strArr[1:4] # 類似 slice 功能

# 字串格式化
cc1 = 2
cc2 = 'red'
# print('I have %s %s pen' % (cc1, cc2))

# 使用者輸入
# userName = input('What your name：')
# userAge = input('your Age is：')

# 時間模組
# from datetime import datetime
# now = datetime.now()
# print('%02d/%02d/%04d %02d:%02d:%02d' % (now.month, now.day,
#                                          now.year, now.hour, now.minute, now.second))

# 邏輯判斷
response = 'answer'
if response.upper() == 'ANSWER':
    print('yes')
else:
    print('no')

# 多重判斷
def cc(num):
    if(num < 10):
        return 'sayYes'
    elif num < 20:
        return 'sayNo'
    else:
        return 'other'
print(cc(20))

# 數學模組
from math import sqrt
# print(sqrt(25))

# 最大值、最小值、絕對值
max(1,2,3)
min(1,2,3)
abs(-10)

