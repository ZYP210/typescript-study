(function () {
  //通过别名的方式声明一个对象的类型
  type myType = {
    name: string;
    age: number;
    sex: string;
  };
  const obj1: myType = { name: 'zzz', age: 19, sex: '1' };
  /** 接口用来定义一个类的结构 
   *  用来定义一个类中应该包含哪些属性和方法
   *  可以当成类型声明使用
   * 接口可以重复声明，并将所有同名接口的属性组合到一起；
   * 接口可以在定义类的时候去限制类的结构
   * 接口中的所有属性都不能有实际的值
   * 接口只定义对象的结构，而不考虑实际的值，在接口中所有方法都是抽象方法
   * 自我总结：相当于进一步简化抽象类，只专注于定义类的结构，不关心类的实际值
   * 
   */
  interface myInterface {
    name: string;
    age: number;
    sex: string;
  }
  interface myInterface {
    name: string;
    sayHello(): void
  }
  //定义类时，可以使类去实现一个接口，实现接口就是满足接口的要求 
  class MyClass implements myInterface {
    name: string;
    age: number;
    sex: string;
    constructor(name: string, age: number, sex: string) {
      this.name = name;
      this.age = age;
      this.sex = sex;
    }
    sayHello(): void {
      console.log('我是实现类');
    }

  }

})()