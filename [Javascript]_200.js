// Javasscript 200제

let obj = { a: 1, b: 2, c: 30, d: 44, e: 5 };

let { a, c } = obj;
console.log("a", a); // 1
console.log("c", c); // 30
// 원하는 속성명을 넣으면, 비구조화하여 해당 속성명에 따른 값을 각 변수에 할당한다.

let { a: newA = 10, f: newF = 5 } = obj;
// a:newA=10은 객체의 a 속성값을 새로운 변수 newA로 다시 할당하되, undefined로 값이 없는 경우에는 기본값 10을 할당한다는 의미.

// 스코프 체인 이해하기
// 실행 컨텍스트와 렉시컬 환경에 대해 알아야 한다.

// arrow function
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

// 자바스크립트는 프로토타입 기반으로 객체지향 프로그래밍을 지원한다. 자바의 클래스 기반과의 큰 차이점으로 프로토타입으로 객체에 공통 사항을 적용할 수 있다.

const studentProto = {
  gainExp: function () {
    this.exp++;
  },
};

const harin = {
  name: "하린",
  age: 10,
  exp: 0,
  __proto__: studentProto,
};

// 생성자 함수 : 객체를 생성하는 역할을 하는 함수. new 키워드를 사용하지 않으면 일반적인 함수와 동일하게 동작하며 새로운 객체를 반환하지 않는다.
// 객체에 타입이 적용되면 해당 객체는 그 타입의 '인스턴스'라고 한다.
/*
객체 생성 과정
1. 빈 객체를 만든다.
2. 만든 빈 객체를 this에 할당
3. 생성자 함수 바디의 코드를 실행한다. (this에 속성 및 메소드 추가)
4. 만든 빈 객체의 __proto__에 생성자 함수의 prototype 속성을 대입
5. this를 생성자의 반환값으로 변환
*/

// 프로토타입 기반 상속

function Storage() {
  this.dataStore = {};
}
Storage.prototype.put = function (key, data) {
  this.dataStore[key] = data;
};
Storage.prototype.getData = function (key) {
  return this.dataStore[key];
};

function RemovableStorage() {
  Storage.call(this);
}

// ES6 class
// ex) 붕어빵은 객체 붕어빵 틀이 클래스
// 클래스를 통해 객체가 가져야 할 상태와 행위들을 속성과 메소드로 정의할 수 있다.
// 특정 클래스를 통해 만들어진 객체를 해당 클래스의 인스턴스.

class Cart {
  constructor() {
    this.store = {};
  }

  addProduct(product) {
    this.store[product.id] = product;
  }

  getProduct(id) {
    return this.store[id];
  }
}
// 클래스 상속 이해
class Chart {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  drawLine() {
    console.log("draw line");
  }
}

class BarChart extends Chart {
  constructor(width, height) {
    super(width, height);
  }

  draw() {
    this.drawLine();
    console.log(`draw ${this.width} X ${this.height} barChart`);
  }
}

// class 정적 메소드와 속성
// 일반적인 메소드는 해당 클래스의 인스턴스를 통해 호출한다. 하지만 정적 메소드는 클래스를 통해 직접 호출하는 메소드를 말한다. 'static' 키워드를 사용
class Product {
  static build(name, price) {
    const id = Math.floor(Math.random() * 1000);
    return new Product(id, name, price);
  }

  static getTaxPrice(product) {
    return product.price * 0.1 + product.price;
  }

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class DeposableProduct extends Product {
  depose() {
    this.deposed = true;
  }
}

// module
// import / export 키워드 사용

export function hello(name) {
  console.log(`hello ${name}`);
}

import { hello } from "./hello.js";

hello("es6 module");

/*번들링(Bundling) : 번들링은 의존 관계가 형성된 모듈들을 하나의 파일로 묶어준다. 
그리고 애플리케이션이 구동할 때 묶여진 이 파일을 로드한다. 번들링은 개발 시점에 이루어지게 되고
브라우저에서 이루어지지 않고 대체로 node.js 환경에서 이루어지게 된다. 대표적으로 Webpack이 있다. */

// ES6 모듈 시스템에서는 default 키워드를 사용하여 모듈에서 기본으로 내보내는 값을 정의할 수 있다.
// default 키워드 사용에 있어, 하나의 모듈에서 한 번만 사용할 수 있다. 즉, 한 파일에서는 하나의 값만 default로 정의 할 수 있다.

// 내장 함수 객체는 new 지시자를 사용하여 함수 형태로 호출하며, 생성자를 생성한다.
const str = new String("자바스크립트");
/*
자바스크립트 표준 내장 객체의 종류
1. Object : 다른 표준 내장 객체의 기본이 되는 일반 객체
2. Number : 숫자형을 감싼 객체이다. 숫자형과 관련된 함수와 속성을 갖고 있다.
3. String : 문자형을 감싼 객체이다. 문자형을 조작하거나 특정 문자열을 찾고 추출하는 등의 메소드와 속성을 활용할 수 있다.
4. Array : 모든 배열은 Array.prototype을 상속받는다. Array객체는 리스트처럼 배열 역할을 지닌다.
5. Math : 수리 연산을 하기 위한 속성과 메소드를 지닌 내장 객체이다. 다른 내장 객체와 달리 Math 객체는 new를 통해 인스턴스를 생성하지 않는다.
6. Date : 시간에 관련된 객체
7. JSON : Javascript Object Notaion을 의미한다. 이를 다른 자료형으로 변환하거나 다시 JSON으로 변환하는 등의 메소드를 제공한다.
8. RegExp : 정규표현식은 특정 문자열 처리를 위해 사용하는 문자열 패턴 정의를 의미
9. Map : ES6부터 표준으로 추가된 Map 객체는 키 : 값 데이터 구조를 지닌 데이터 집합체(Collection)이다. Iterator를 통해 Map의 데이터를 순회한다는 특징
10. Set : ES6부터 표준으로 추가된 객체형으로, 오직 값으로 이루어진 데이터 집합체이다. 값의 중복성을 허용하지 않는 차이점.
*/

// 문자열자르기
// 'String'.substring(시작 인덱스, 종료 인덱스)
// 'String'.substr(시작 인덱스, 길이)
const sentence = "Wakanda Forever!!!";
console.log(sentence.substr(8)); // 8번째 인덱스의 문자부터 뒤이어 7개의 문자들을 반환

// 자바스크립트의 모든 객체는 Object를 상속받기 때문에, 다른 모든 객체는 prototype을 통해 Object의 내장 메소드 toString()에 접근하고, 재정의(Override)한다.

// 두개의 문자열 하나로 합치기(concat)
const str1 = "very";
const str2 = "Good";

console.log(str1.concat(str2)); // very Good
// but +연산자가 concat 메서드보다 성능상 더 빠르기 때문에, +연산자의 사용을 권장하고 있다.

// Reduce
/*
Array 객체의 메소드 reduce는 배열 요소를 순환하면서, 정의된 callback ㅎ마수에 의해 단일 값으로 누적시킬 수 있다.
배열.reduce((누적된 값, 현재 요소값, 현재 인덱스, 원본 배열) => {
  return  누적값으로 반환되는 값
}, 초기값);
*/

// 객체에서 키만 추출
// Object.keys(obj) -> 배열의 형태로 key값들만 반환

// 객체 변경되지 않도록 하기(freeze)
// Object 객체의 메소드 freeze는 단어 그대로 객체를 동결(freeze)한다. freeze 메소드로 객체를 동결한 이후에는 다른 속성을 추가하거나 제거할 수 없다.

// UTC 기준 날짜 출력하기(Date.UTC) : 세계 표준 현재 시간을 나타내는 방법
const date = new Date();
const dataUTC = Date.UTC(date.getUTCFullYear());

// 문자열 순환하기(for-of)
/*
for(변수 of 반복 가능한 객체){
  실행할 문장
}
*/

const str = "hello";

for (const item of str) {
  console.log(item);
}

const iter = str[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
/*
h
e
l
l
o
{value: "h", done: false}
{value: "e", done: false}
...
{value: "o", done: false}
{value: undefined, done: true}
*/

// Promise
/*
두 가지 메소드를 가진다
1. then(onFulFilled, onReject) : 약속이 완료됐을 때 호출될 함수들을 정의한다. 이때 첫번째 인자로 전달되는
함수는 약속이 성공적으로 이행됐을 때 호출되고 두 번째 인자로 전달된 함수는 거부됐을 때 호출된다. 두 전달
인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해 전달된다.
2. catch(onReject) : 약속이 거부됐을 때 호출될 함수(onReject)를 등록한다.
*/

// 이벤트 처리하기
/*
모든 요소는 이벤트를 발생하는데 addEventlistener를 통하여 해당 요소에서 발생하는 이벤트를 듣고 원하는 로직을 수행할 수 있다.
1. 첫번째 인자로 문자열을 전달하는데 이 문자열이 이벤트 종류(type)이다.
2. 두번째 인자로 첫번째 인자로 전달한 이벤트가 발생할 경우 호출될 함수를 전달한다. -> 리스너 함수라고 부른다.
이벤트 리스너 함수는 이벤트 객체를 매개변수로 가진다. 이벤트 객체에는 target, type과 같은 속성과 preventDefault와 stopPropagation과 
같은 메소드들이 있다.
*/

// 이벤트 흐름 이해하기
/*
트리 형태로 구성되는 DOM은 이벤트가 발생하면, 이벤트가 부모에서 자식으로 자식에서 부모로 흘러간다.
이렇게 이벤트가 전파되는 방향에 따라 이벤트 버블링과 이벤트 캡처링으로 구분된다.
*/
