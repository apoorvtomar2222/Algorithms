# # def findMiss(A):
# #     N = len(A)
# #     print('N', N)
# #     total = (N + 1) * (N + 2) / 2
# #     print(total)
# #     sumA = sum(A)
# #     print(sumA)
# #     return total - sumA


# # A = [1, 2, 3, 4, 5, 6, 7, 9, 10]
# # print(findMiss(A))

# # Majority Element


# # def majorityEle(A):
# #     thisdict = {}
# #     for i in A:
# #         if i in thisdict:
# #             print('key prese')
# #             thisdict[i] += 1
# #         else:
# #             thisdict[i] = 1

# #     print(thisdict)


# # A = [1, 2, 1, 3, 1]
# # majorityEle(A)

# # Leaders in an array

# # Given an array of positive integers. Your task is to find the leaders in the array.
# # Note: An element of array is leader if it is greater than or equal to all the elements to its right side. Also, the rightmost element is always a leader.

# # def leaderInArray(A):
# #     size = len(A)
# #     print('size', size)
# #     for i in range(0, size):
# #         for j in range(i+1, size):
# #             if A[i] <= A[j]:
# #                 break
# #         if j == size - 1:
# #             print(A[i])

# # def printLeaders(arr, size):

# #     max_from_right = arr[size-1]
# #     for i in range(size-2, 0, -1):
# #         if max_from_right < arr[i]:
# #             print(arr[i])
# #             max_from_right = arr[i]


# # # Driver function
# # arr = [18, 17, 4, 3, 5, 2]
# # printLeaders(arr, len(arr))


# # def printLeaders(arr, size):

# #     for i in range(0, size):
# #         for j in range(i+1, size):
# #             if arr[i] <= arr[j]:
# #                 break
# #         if j == size-1:  # If loop didn't break
# #             print arr[i],


# # # Driver function
# # arr = [18, 17, 4, 3, 5, 2]
# # printLeaders(arr, len(arr))

# # def printLeaders(arr, size):

# #     max_from_right = arr[size-1]
# #     print(max_from_right)
# #     for i in reversed(range(0, size - 2,)):

# #         if max_from_right < arr[i]:
# #             print(arr[i])
# #             max_from_right = arr[i]


# # Driver
# # function
# # arr = [17, 18, 17, 4, 3, 5, 2]
# # printLeaders(arr, len(arr))

# # def pivotElement(A):
# #     sum = 0
# #     for i in range(0, len(A)):
# #         sum += A[i]
# #     print('Sum', sum)
# #     leftSum = 0
# #     for i in range(0, len(A)):
# #         sum -= A[i]
# #         if sum == leftSum:
# #             return i
# #         else:
# #             leftSum += A[i]
# #     return -1


# # A = [1, 7, 1, 6, 5, 6, 9]
# # print(pivotElement(A))

# from collections import Counter


# # def ana(input1):
# #     return input1[::-1]

# def dups(x):
#     return list(dict.fromkeys(x))


# dict = {'a': 1, 'b': 2}
# print(list(dict))
# print(dups(['a', 'b', 'v']))


# def KSmallestElement(A, K):
#     for idx, a in enumerate(A):
#         if idx + 1 == k:

#         print(idx)


# KSmallestElement([1, 2, 4, 4, 5], 3)
