function error(message: string): never{
  throw new Error(message);
}

function fail() {
  return error("failde");
}

function infiniteLoop(): never {
  while (true) {}
}

let a: string = "hello";

if(typeof a !== 'string') {
  a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

const b: Indexable<{}> = '';