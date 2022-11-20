// let user = {
//   name: "John",
//   age: 30,
// };

// let key = "name";

// // 변수로 접근
// console.log(user[key]); // John (프롬프트 창에 "name"을 입력한 경우)

// let fruit = "apple";

// let bag = {
//   [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
// };

// console.log(bag.apple); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.

// let fruit = "apple";
// let bag = {
//   [fruit + "Computers"]: 5, // bag.appleComputers = 5
// };

// console.log(bag.appleComputers); // 5

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
// };

// console.log(obj.for + obj.let + obj.return);

// let obj = {
//   0: "test", // "0": "test"와 동일합니다.
// };

// // 숫자 0은 문자열 "0"으로 변환되기 때문에 두 얼럿 창은 같은 프로퍼티에 접근합니다,
// console.log(obj["0"]); // test
// console.log(obj[0]); // test (동일한 프로퍼티)

// let obj = {};
// obj.__proto__ = 5; // 숫자를 할당합니다.
// console.log(obj.__proto__);

// let user = { name: "John", age: 30 };

// console.log("age" in user); // user.age가 존재하므로 true가 출력됩니다.
// console.log("blabla" in user); // user.blabla는 존재하지 않기 때문에 false가 출력됩니다.

// var d = "X";
// function outer() {
//   var a = 1;
//   var b = "B";
//   function inner() {
//     var a = 2;
//     console.log(b);
//   }
//   return inner;
// }
// var someFun = outer();
// someFun();

// let obj = {
//   test: undefined,
// };

// console.log(obj.test); // 값이 `undefined`이므로, 얼럿 창엔 undefined가 출력됩니다. 그런데 프로퍼티 test는 존재합니다.

// console.log("test" in obj); // `in`을 사용하면 프로퍼티 유무를 제대로 확인할 수 있습니다(true가 출력됨).

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   // 키
//   console.log(key); // name, age, isAdmin
//   // 키에 해당하는 값
//   console.log(user[key]); // John, 30, true
// }

// let codes = {
//   49: "독일",
//   41: "스위스",
//   44: "영국",
//   // ..,
//   1: "미국",
// };

// for (let code in codes) {
//   console.log(code); // 1, 41, 44, 49
// }

// // 함수 Math.trunc는 소수점 아래를 버리고 숫자의 정수부만 반환합니다.
// console.log(String(Math.trunc(Number("49")))); // '49'가 출력됩니다. 기존에 입력한 값과 같으므로 정수 프로퍼티입니다.
// console.log(String(Math.trunc(Number("+49")))); // '49'가 출력됩니다. 기존에 입력한 값(+49)과 다르므로 정수 프로퍼티가 아닙니다.
// console.log(String(Math.trunc(Number("1.2")))); // '1'이 출력됩니다. 기존에 입력한 값(1.2)과 다르므로 정수 프로퍼티가 아닙니다.

// let codes = {
//   "+49": "독일",
//   "+41": "스위스",
//   "+44": "영국",
//   // ..,
//   "+1": "미국",
// };

// for (let code in codes) {
//   console.log(+code); // 49, 41, 44, 1
// }

// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = {}; // 새로운 빈 객체

// // 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
// for (let key in user) {
//   clone[key] = user[key];
// }

// // 이제 clone은 완전히 독립적인 복제본이 되었습니다.
// clone.name = "Pete"; // clone의 데이터를 변경합니다.

// console.log(user.name); // 기존 객체에는 여전히 John이 있습니다.

// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// console.log(user.sizes.height); // 182

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // 'this'는 '현재 객체'를 나타냅니다.
//     console.log(this.name);
//   },
// };

// user.sayHi(); // John
// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     console.log(user.name); // Error: Cannot read property 'name' of null
//   },
// };

// let admin = user;
// user = null; // user를 null로 덮어씁니다.

// admin.sayHi(); // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생했습니다.

// function BigUser() {
//   this.name = "원숭이";
//   return;
// }

// console.log(new BigUser().name); // 고릴라

// let id = Symbol("id");
// console.log(id.toString()); // Symbol(id)가 얼럿 창에 출력됨

// // 객체를 출력하려고 함
// console.log(obj);

// // 객체를 프로퍼티 키로 사용하고 있음
// anotherObj[obj] = 123;

// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   },
// };

// // 데모:
// console.log(user); // hint: string -> {name: "John"}
// console.log(+user); // hint: number -> 1000
// console.log(user + 500); // hint: default -> 1500

// let user = { name: "John" };
// console.log(user);
// console.log(user.valueOf() === user); //true

//1
// let a = 20;
// do {
//   a++;
// } while (a < 30);
// console.log(a);

// //2.
// function func(a, b) {
//   return;
// }

// console.log(func() === undefined);
// true

//3.

// let a = 10;
// let b = 5;
// switch (a) {
//   case 8:
//     console.log(a + b);
//   case 9:
//     console.log(a - b);
//   case 10:
//     console.log(a * b);
//   case 11:
//     console.log(a / b);
// }
// 50
// 2

//4.

// Hello(10);

// function Hello(Number) {
//   console.log(`이 숫자는 ${Number}`);
// }

//5,

// let abc = function (a, b) {
//   return a + b;
// };
// console.log(abc(10, 20));

// let abc = (a, b) => a + b;
// console.log(abc(10, 20));

// let fruit = {
//   name: "apple",
//   price: 20,
// };

// console.log(fruit.name);

// fruit.num = 5;

// console.log(fruit);

// delete fruit.price;
// console.log(fruit);

// function User() {
//   return {
//     name: "John",
//     age: this,
//   };
// }

// let man = User();

// console.log(man.ref.name);

// let team = {};

// // set
// team["soccer mesi"] = false;

// //get
// console.log(team["soccer mesi"]);

//delete

const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    console.log(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    console.log("Hi! I'm " + this.name[0] + ".");
  },
};
person.age = 45;
person["name"]["last"] = "Cratchit";

console.log(person["age"]);
console.log(person.name.last);

// person["eyes"] = "hazel";
// person.farewell = function () {
//   console.log("Bye everybody!");
// };

// person["eyes"];
// person.farewell();

// var person1 = {
//   name: "Chris",
//   greeting: function () {
//     console.log("Hi! I'm " + this.name + ".");
//   },
// };

// var person2 = {
//   name: "Deepti",
//   greeting: function () {
//     console.log("Hi! I'm " + this.name + ".");
//   },
// };

// console.log(person1.greeting());
// console.log(person2.greeting());


let john ={
  name:"John"
}