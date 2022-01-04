let list: (number | string)[] = [1, 2, 3, "4"];
[39, "Mark"];

// 위의 방법을 선호함 : 아래의 방식은 jsx, tsx에서 충돌의 여부가 있기 때문
// 유니온 방식을 사용하여 숫자,문자열을 같이 사용할 수 있음

// let list: Array<number> = [1, 2, 3];