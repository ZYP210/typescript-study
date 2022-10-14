//定义食物类
class Food {
  element: HTMLElement;
  constructor() {
    /**
     * 获取页面中的food元素，并将其赋值给element
     * 末尾！：断言当前值不可能为空，否则会报错
     */
    this.element = document.querySelector(".food")!;
  }

  //定义一个获取食物X，Y轴坐标的方法
  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop
  }

  //修改食物位置方法
  change() {
    //生成一个随机位置（0~290）
    const top = Math.round(Math.random() * 29) * 10
    const left = Math.round(Math.random() * 29) * 10
    //蛇移动一次是一格，10px ，所以食物坐标必须是10的倍数
    this.element.style.left = top + "px"
    this.element.style.top = left + "px"
  }
}

export default Food;