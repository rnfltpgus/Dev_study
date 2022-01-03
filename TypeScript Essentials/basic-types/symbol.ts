console.log(Symbol('foo') === Symbol("foo"));

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym]

// 함수로 선언할때는 대문자 심볼, 타입으로 사용할떄는 소문자 심볼