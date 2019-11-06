# while 迴圈
a = 10
while a < 20:
    a += 1

# 中斷迴圈
count = 0
while True:
    count += 1
    if(count >= 10):
        break

# 獲得索引數列
choice = ['a','b','c']
for index,item in enumerate(choice):
    print(index,item)

# 相互比較 - 較短的
listA = [1,4,6,3,8,2]
listB = [5,7,9,2,6,4,2,8]
for a,b in zip(listA,listB):
    print(max(a,b))