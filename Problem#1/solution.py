def solution(list,k):
    for i in range(len(list)):
        for j in range(i+1, len(list)):
            if(list[i] + list[j] == k):
                return True
    return False

list = [10, 15, 2, 3]
k = 17

result = solution(list,k)
print(result)
