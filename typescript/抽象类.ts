(function () {
  /** 以abstract开头的类是抽象类
   *  抽象类和其他类相似，只是不能用来创建对象
   *  抽象类就是专门被继承的类
   *  抽象类可以添加抽象方法（只声明方法，没有方法体。具体的函数体由继承类去实现，继承它的类必须重写父类的抽象方法），
   *  也可以添加正常方法
   */
  abstract class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    abstract sayHello(): void;
    test(): void {
      console.log('我是测试');
    }
  }
  class Dog extends Animal {
    sayHello() {
      console.log(this.name + '汪汪汪');
    }
  }
  const dog = new Dog('小白', 2);
  dog.test()
})()