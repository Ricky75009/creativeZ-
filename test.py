x=2


def func():
    global x
    x=27
    return x

func()

print('x',x)

x=12

print('x=',x)

print(func())