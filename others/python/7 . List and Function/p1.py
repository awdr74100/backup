# range使用
arr = [1,2,3,4,5]
for i in range(0,len(arr)):
    print(arr[i])

# 章節測驗
n = [[1,2,3],[4,5,6,7,8,9]]
def flattien(lists):
    results = []
    for i in lists:
        for u in i:
            results.append(u)
    return results

print(flattien(n))