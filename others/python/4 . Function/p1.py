# 數學模組
# import math 
# from math import *
from math import sqrt
print(sqrt(25))


# 最大、最小值、絕對值
print(max(10,23,22))
print(min(10,11,3))
print(abs(-40))

# 檢查型態
print(type(10))

# 章節測驗
def shut_down(s):
    if s == 'yes':
        return 'Shutting down'
    elif s == 'no':
        return 'Shutting aborted'
    else:
        return 'Sorry'
        
# 章節測驗
def distance_form_zero(s):
    if(type(s) == int or type(s) == float):
        return abs(s)
    else:
        return 'Nope'
print(distance_form_zero('嘿嘿'))



