# factorial
# 0! =1
# 1! = 1
# 2x1
# 3x2x1
# 4x3x2x1
# 5x4x3x2x1
from math import factorial


def fact(n):
    if n < 0:
        return "Must be an interger"
    if n == 0:
        return 1
    elif n == 1:
        return 1
    else:
        res = 1
        while n > 1:
            res *= n
            n -= 1
        return res


def fact_rec(n):
    if n < 0:
        return "Num must be integer!"
    elif n == 0:
        return 1
    elif n == 1:
        return 1
    else:
        return n * fact_rec(n - 1)


# print(factorial(0.5))
print(fact(-10))
