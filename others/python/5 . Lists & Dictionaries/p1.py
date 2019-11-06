# 陣列取用
array = ['red', 'blue', 'black', 'yellow']
print(array[2])

# 項目修改
array[2] = 'pink'
print(array[2])

# 項目增加
array.append(10)
print(array)

# 項目刪除 - 項目值
array.remove('red')
print(array)

# 項目刪除 - 索引值
array.pop(1)
print(array)

# 項目刪除 - 索引
del array[1]

# 陣列長度
print(len(array))

# 陣列排序
aa = [1,5,3,8,6]
aa.sort()
print(aa)

# 指定陣列
print(array[1:5])
print(array[:2])
print(array[2:])

# 搜尋陣列索引值
print(array.index('blue'))

# 插入項目到陣列
array.insert(0,'white')
print(array)

# 基本迴圈
for item in array:
    print(item)

# 物件取用
obj = {'blue':10,'red':20,'black':30}
print(obj['red'])

# 物件長度
print(len(obj))

# 物件增加
obj['pink'] = 40
print(obj)





