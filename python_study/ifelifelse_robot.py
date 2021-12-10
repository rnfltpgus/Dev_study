#로봇 청소기의 행위를 if문으로 구현하여라.
#x 변수에 0(벽)이 전달되면 "우회전" 출력
#x 변수에 1(언덕)보다 크면 "점프" 출력
#x 변수에 -1(난간)보다 작으면 "유턴" 출력
#이 중 아무것도 아니면 "전진" 출력

def robot_action(x):
    #x = int(input("x?: "))

    if x == 0:
        print("우회전")
    elif x > 1:
        print("점프")
    elif x < -1:
        print("유턴")
    else:
        print("전진")

    
