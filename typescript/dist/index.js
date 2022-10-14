(function () {
    //在定义函数或是类时，如果遇到类型不明确就可以使用泛型。
    // function fn(a: any): any {
    //   return a
    // }
    //只有在函数执行时拿到入参，才知道类型。比使用any忽略类型检查更好
    function fn(a) {
        return a;
    }
    //直接调用具有泛型的函数，ts会根据入参自动推断
    fn(10);
    //手动指定泛型
    fn('20');
    //泛型的类型可以是一个类
    fn({ name: 'FF' });
    //指定多个泛型
    function fn2(a, b, c) {
        return a;
    }
    function fn3(a) {
        return a.length;
    }
    //当前传参需要有length属性
    const fn_3 = fn3("123");
    //在类中使用泛型
    class MyClass {
        constructor(name) {
            this.name = name;
        }
    }
    const mc = new MyClass(123);
})();
//使用class关键字定义类
/** 对象中包含两部分：
 *    属性：
 *    方法：
 */
class Person {
    constructor() {
        //定义实例属性，直接定义的属性是实例属性，需要通过对象的实例去访问
        this.name = '张三';
        this.age = 18;
        //只读属性
        this.id = 1;
    }
    //定义实例方法 类方法同类属性
    sayHello() {
        console.log();
    }
}
//在属性前使用static关键字可以定义 类属性（静态属性，不需要创建对象直接将类当作对象访问其类属性）
Person.sex = "male";
const per = new Person();
