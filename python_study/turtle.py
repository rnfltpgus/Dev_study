import turtle as t

#1. 정사각형 그리기
for i in range(4):
t.fd(100)
t.left(90)

print(t.pos)





#4. 기하학적인 도형 그리기
t.up()
t.goto(0,300)
t.down()

t.color('red', 'yellow')
t.begin_fill()

while(True):
    t.forward(100)
    t.left(170)
    x, y = t.pos()
    if int(x) == 0 and int(y) == 300:
        break
t.end_fill()
t.done()
