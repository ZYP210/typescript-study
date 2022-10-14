//使用class关键字定义类
/** 对象中包含两部分：
 *    属性：
 *    方法：
 */
class Person {
  //定义实例属性，直接定义的属性是实例属性，需要通过对象的实例去访问
  name: string = '张三';
  age: number = 18;

  //只读属性
  readonly id: number = 1;

  //在属性前使用static关键字可以定义 类属性（静态属性，不需要创建对象直接将类当作对象访问其类属性）
  static sex: string = "male"

  //定义实例方法 类方法同类属性
  sayHello() {
    console.log();
  }
}

const per = new Person();