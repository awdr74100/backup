# 陣列宣告
array = ['red', 'blue', 'black', 'yellow']

# array 修改
array[0] = 'green'

# array 增加
array.append('gray')

# array 插入
array.insert(0,'white')

# array 刪除  - item
array.remove('gray')

# array 刪除 - index - 會回傳
array.pop(0)

# array 刪除  - index - 不會回傳
del array[0]

# array 長度
len(array)

# array 排序
array.sort()

# array 切片
array[0:2]

# 搜尋陣列索引值
array.index('black')

# 隨機變數
from random import randint
print(randint(0,5))

# 陣列取用
for i in array:
    print(i)

# 陣列取用
for i in range(0,len(array)):
    print(array[i])
print()

# 陣列取用
n = [[1,2,3],[4,5,6,7]]
results = []
for i in n:
    for u in i:
        results.append(u)
print(results)

# 陣列取用
num = 10
if num not in range(10):
    print('yes')
else:
    print('no')