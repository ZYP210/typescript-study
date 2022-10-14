(function () {
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  /**子类继承父类，子类将会拥有父类所有的方法和属性
   * 通过继承可以将多个类中共有的代码写在一个父类中
   * 方法重写：如果在子类中添加了一个同名的方法，那么子类中的方法会覆盖父类中的方法
   */
  class Dog extends Animal {
    sex: string
    constructor(name: string, age: number, sex: string) {
      super(name, age);
      this.sex = sex
    };
    sayHello() {
      console.log(this.name + '汪汪汪');
    }
  }

  class Cat extends Dog {
    sayHello() {
      console.log(this.name + '喵喵喵');
    }
  }

  const dog = new Dog('小白', 2, "男");
  const cat = new Cat('咪咪', 3, "女");


  //定义一个类型 
  type myType = { name: string }
  //定义一个接口继承这个类型
  interface myInterface extends myType {
    age: number
  }
  const zyp: myInterface = { age: 1, name: 'zzz' }

  /**
   * 
   * @param arr 
   */
  function fn<T extends { id: number, render(n: number): number }>(arr: T[]) {
    arr.map(a => a.render(a.id))
  }
  fn([{ id: 1, render(n) { return n } }])


  type ZMH = { name: string, age: number, skill: string }
  //keyof 将T类型中的类型以联合类型形式返回

  //相当于for in 返回 { name: string, age: number} , ts提供了Pick类型，
  type PICK<T, U extends keyof T> = {
    [P in U]: T[P]
  }

  type HD = PICK<ZMH, 'age' | 'name'>

  let zmh: HD = { age: 1, name: 'zzz' }
})()