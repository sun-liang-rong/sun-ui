<template>
  <div class="container">
    <!-- <myMode/> -->
    <!-- <modal /> -->
    <shi-jian></shi-jian>
    <sliding-door>
      <div class="slidingdoor">
        <div class="box">
          <div style="width: 375px; height: 500px; background-color: orange">
            slidingdoor
          </div>
          <div
            style="width: 375px; height: 500px; background-color: yellowgreen"
          >
            slidingdoor
          </div>
          <div style="width: 375px; height: 500px; background-color: hotpink">
            slidingdoor
          </div>
        </div>
      </div>
    </sliding-door>
  </div>
</template>

<script lang="ts" setup>
import { stringify } from "querystring";
import { reactive, toRefs } from "vue";
import myMode from "./components/demo/index.vue";
import modal from "./components/modal/index.vue";
import shiJian from "./components/Learn/事件委托/index.vue";
import { throttled } from "./components/Learn/防抖节流";
import SlidingDoor from "./components/SlidingDoor/index.vue";
import("./components/modal/index").then((moudle) => {
  // const { ahh } = moudle
  console.log(moudle.ahh(), "lll");
  const ss = new moudle.soldier();
  console.log(ss);
});
const request = (method: string, url: string, data: any) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send(data);
    xhr.onload = function () {
      console.log(xhr.responseText);
      resolve(xhr.responseText);
    };
  });
};
const httpRequest = function (method: string, url: string, data: any) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.send(data);
  xhr.onload = function () {
    console.log(xhr.responseText);
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    console.log(document.cookie.match(reg));
  };
};
for (let [index, elm] of ["a", "b"].entries()) {
  console.log(index, elm);
}
const obj = {
  a: 12,
  b: "sss",
  c: "34",
};
for (let item in obj) {
  console.log(item);
}
console.log(
  Object.values(obj),
  Object.keys(obj),
  Object.getOwnPropertyNames(obj)
);
const sss = function six() {
  let a = 20;
  return function xx() {
    let b = 30;
    console.log(a);
  };
};
// const s1 = sss()
// s1()
// console.log(s1())
// function Person(name: string, age: number) {
//   this.name = name;
//   this.age = age;
//   this.hello = function () {
//     console.log("hello");
//     return "hello";
//   };
// }
// Person.prototype.ss = function () {
//   console.log("ss");
//   return "ss";
// };
// const p1 = new Person("slr", 12);

// console.log(p1.name, p1.age, p1.hello(), p1.ss());

/**
 * 原型链继承
 */
// function Parent() {
//   this.name = "parent1";
//   this.play = [1, 2, 3];
// }
// function Child() {
//   this.type = "child2";
// }
// Child.prototype = new Parent();
// console.log(new Child());
// var s1 = new Child();
// var s2 = new Child();
// s1.play.push(4);
// console.log(s1.play, s2.play);

/**
 * 构造函数继承
 *
 * 可以看到，父类原型对象中一旦存在父类之前自己定义的方法，那么子类将无法继承这些方法
 */

// function Parent(){
//     this.name = 'parent1';
// }

// Parent.prototype.getName = function () {
//     return this.name;
// }

// function Child(){
//     Parent.call(this);
//     this.type = 'child'
// }

// let child = new Child();
// console.log(child);  // 没问题
// console.log(child.getName());  // 会报错

/**
 * 组合继承
 */
// function Person(){
//   this.name = 'Person'
//   this.age = 18
//   this.play = [1, 2, 3];
// }
// Person.prototype.getName = function(){
//   return this.name
// }
// function Child(){
//   Person.call(this)
//   this.type = 'Child'
// }

// Child.prototype = new Person();
// // 手动挂上构造器，指向自己的构造函数
// Child.prototype.constructor = Child

// var s3 = new Child();
// var s4 = new Child();
// s3.play.push(4);
// console.log(s3.play, s4.play);  // 不互相影响
// console.log(s3.getName()); // 正常输出'parent3'
// console.log(s4.getName()); // 正常输出'parent3'

/**
 * 原型式继承
 * 这种继承方式的缺点也很明显，因为Object.create方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能
 */
// const Person = {
//   name: "parent4",
//   friends: ["p1", "p2", "p3"],
//   getName: function () {
//     return this.name;
//   },
// };

// let p1 = Object.create(Person)
// p1.name = 'tom'
// p1.friends.push('slr')
// let p2 = Object.create(Person)
// p2.name = 'slr'
// p2.friends.push('slr')

// console.log(p1.name) //tom
// console.log(p2.name) //slr
// console.log(p1.friends) //['p1', 'p2', 'p3', 'slr', 'slr']
// console.log(p2.friends)//['p1', 'p2', 'p3', 'slr', 'slr']

/**
 * 寄生继承
 * 其优缺点也很明显，跟上面讲的原型式继承一样
 */
// let parson = {
//   name: "parent4",
//   friends: ["p1", "p2", "p3"],
//   getName: function () {
//     return this.name;
//   },
// }
// function clone(parson: any){
//   let clone = Object.create(parson)
//   clone.getFriends = function(){
//     return this.friends
//   }
//   return clone
// }

// let p1 = clone(parson)
// let p2 = clone(parson)

// p1.friends.push('p4')
// console.log(p1.name)//parent4
// console.log(p2.name) //parent4
// console.log(p1.friends) //['p1', 'p2', 'p3', 'p4']
// console.log(p2.friends) //['p1', 'p2', 'p3', 'p4']

/**
 * 寄生组合式继承
 */

//  function clone(Person, Child){
//   Child.prototype = Object.create(Person.prototype)
//   Child.prototype.constructor = Child
//  }
//  function Person(){
//   this.name = 'slr'
//   this.play = [1, 2, 3]
//  }
//  Person.prototype.getName = function(){
//   return this.name
//  }
//  function Child(){
//   Person.call(this)
//   this.friends = 'sss'
//  }
//  clone(Person,Child)

//  Child.prototype.getFriend = function(){
//   return this.friends
//  }

//  let c1 = new Child()
//  let c2 = new Child()
//  console.log(c1.friends)
//  console.log(c1.name)
//  console.log(c1.getName())
//  console.log(c1.getFriend())
//  c1.play.push(5)
//  console.log(c1.play)
//  console.log(c2.play)

// httpRequest("get", "https://sunsunblog.top:5000", {});
//request
// request("get", "https://sunsunblog.top:5000/tags?search=%7B%22grade%22:%222%22%7D&limit=100", {});
</script>

<style lang="less" scoped>
.container {
  .slidingdoor {
    width: 100%;
    height: 500px;
    background-color: pink;
    display: flex;
    justify-content: space-evenly;
    .box {
      width: 100%;
      display: flex;
      overflow: hidden;
      overflow-x: auto;
      div {
        flex: 0 0 auto;
      }
    }
  }
}
</style>
