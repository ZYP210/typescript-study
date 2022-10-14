(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name
    };
    sayHello() {
      console.log(this.name + '啊啊啊');
    }
  }
  class Dog extends Animal {
    //如果在子类中写了构造函数 ，就必须对父类的构造函数进行调用，因为如果不调用，子类的构造函数就会覆盖父类的构造函数，此时继承的父类属性就拿不到值，就会出错。不写会默认调用
    constructor(name: string, age: number) {
      //调用父类的构造函数
      super(name);
    }
    sayHello() {
      console.log(super.name);
      //在类的方法中，super表示当前类的父类
      super.sayHello();
    }
  }

  const dog = new Dog('小黑', 3);
})()