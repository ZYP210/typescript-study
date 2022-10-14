class Dog {
  // name: string = '旺财'
  // age: number = 3
  //构造函数 ：在函数创建时调用（new的时候）

  name: string;
  age: number;
  constructor(name: string, age: number) {
    console.log('构造函数执行了');
    //在实例方法中，this表示当前的实例
    //在构造函数中当前对象就是当前new对象
    this.name = name;
    this.age = age;
  }
  sayHello() {
    alert(this.name + "汪汪汪")
  }
}

// const dog1 = new Dog('小黑', 3)

// dog1.sayHello.apply({ name: 'zzz' })

