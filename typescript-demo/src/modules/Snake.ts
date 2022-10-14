class Snake {
  //蛇
  element: HTMLElement;
  //蛇头
  head: HTMLElement;
  //蛇身（包括蛇头）
  bodys: HTMLCollection;

  constructor() {
    this.element = document.querySelector(".snake")!
    this.head = document.querySelector(".snake > div")!
    this.bodys = this.element.getElementsByTagName('div')!
  }

  //获取蛇的坐标（蛇头坐标）
  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }

  set X(value: number) {
    if (this.X === value) {
      return
    }
    if (value < 0 || value > 290) {
      throw new Error("撞墙了")
    }
    //解决掉头问题
    if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetLeft === value) {
      if (value > this.X) {
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }

  set Y(value: number) {
    if (this.Y === value) {
      return
    }
    if (value < 0 || value > 290) {
      throw new Error("撞墙了")
    }
    if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px';
    this.checkHeadBody()
  }

  //蛇增加身体的方法
  addBody() {
    //往当前dom添加html，beforeend：在结束标签前添加
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  /**
   * 将后面身体设置为前面身体的位置
   * @memberof Snake
   */
  moveBody() {
    for (let i = this.bodys.length - 1; i > 0; i--) {
      //获取前面身体的位置
      let X = (this.bodys[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodys[i - 1] as HTMLElement).offsetTop;
      //
      (this.bodys[i] as HTMLElement).style.left = X + 'px';
      (this.bodys[i] as HTMLElement).style.top = Y + 'px'
    }
  }
  checkHeadBody() {
    //检查所有身体，检查是否和蛇头坐标发生重叠
    if (Array.from(this.bodys).slice(1, this.bodys.length).some(cur => (cur as HTMLElement).offsetLeft === this.X && (cur as HTMLElement).offsetTop === this.Y)) {
      throw new Error('撞到自己了')
    };
  }
}

export default Snake