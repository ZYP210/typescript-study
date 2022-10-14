import Snake from './Snake';
import Food from './Food';
import ScorePanel from './scorePanel';
//游戏控制器，控制所有其他类
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  //存储蛇的移动方向（按键的方向）
  direction: string = ''

  //记录游戏是否结束
  isLive = true;

  timer: number = 0;

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }
  //初始化游戏
  init() {
    //绑定键盘按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }
  //创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    /**  ArrowUp
         ArrowLeft
         ArrowRight
         ArrowDown 
        */
    //检查是否正确按键
    this.direction = event.key
  }

  //创建蛇移动的方法
  run() {
    //获取当前蛇的位置
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case 'ArrowUp': Y -= 10
        break;
      case 'ArrowLeft': X -= 10
        break;
      case 'ArrowRight': X += 10
        break;
      case 'ArrowDown': Y += 10
        break;
    }

    if (this.isCheckEat(X, Y)) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody()
    }

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error: any) {
      this.isLive = false
      alert(error.message)
    }
    if (this.isLive) {
      clearTimeout(this.timer)
      this.timer = window.setTimeout(this.run.bind(this), 100 - this.scorePanel.level * 30)
    }
  }
  //检查蛇是否吃到食物
  isCheckEat(X: number, Y: number): boolean {
    return X === this.food.X && Y === this.food.Y
  }

}
export default GameControl