# 基本判斷
a = 'answer'
if a.upper() == 'ANSWER':
    print('yes')
else:
    print('no')

# 利用函式判斷
def go(num):
    if num > 10:
        return 'sayYes'
    else:
        return 'sayNo'
print(go(10))

# 多重判斷
def cc(num):
    if(num < 10):
        return 'sayYes'
    elif num < 20:
        return 'sayNo'
    else:
        return 'other'
print(cc(20))


