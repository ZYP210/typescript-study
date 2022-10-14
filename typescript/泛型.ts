(function () {
  //在定义函数或是类时，如果遇到类型不明确就可以使用泛型。
  // function fn(a: any): any {
  //   return a
  // }
  //只有在函数执行时拿到入参，才知道类型。比使用any忽略类型检查更好
  function fn<T>(a: T): T {
    return a
  }

  //直接调用具有泛型的函数，ts会根据入参自动推断
  fn(10);
  //手动指定泛型
  fn<string>('20')
  //泛型的类型可以是一个类
  fn<{ name: string }>({ name: 'FF' })

  //指定多个泛型
  function fn2<K, T, S>(a: K, b: T, c: S): K {
    return a
  }
  //
  interface Inter {
    length: number;
  }
  function fn3<T extends Inter>(a: T): number {
    return a.length
  }
  //当前传参需要有length属性
  const fn_3 = fn3("123")

  //在类中使用泛型
  class MyClass<T>{
    name: T;
    constructor(name: T) {
      this.name = name
    }
  }
  const mc = new MyClass<number>(123)


})()