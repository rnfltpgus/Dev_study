numbers = input("숫자를 4개를 공백으로 구분해서 넣어주세요.") # 1 2 3 4
a, b, c, d = numbers.split(' ')
e = int(a) + int(b) + int(c)+ int(d)
print("{}, {}. {} .{}의 합은 {}이다.".format(a, b, c, d, e))



# int() : 문자형 데이터나 실수 형 데이터를 정수로 변환( 실패시 에러)
# str() : 각종 데이터를 문자열로 변환
# float() : 문자형 데이터나 정수형 데이터를 부동소수점으로 변환
