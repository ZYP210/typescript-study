
//定义记分牌的类
class ScorePanel {
  score = 0;
  level = 0;
  scoreELe: HTMLElement;
  levelELe: HTMLElement;

  //设置一个变量限制等级
  maxLevel: number;
  constructor(maxLevel = 10) {
    this.scoreELe = document.querySelector('.score')!
    this.levelELe = document.querySelector('.level')!
    this.maxLevel = maxLevel
  }
  //加分的方法
  addScore() {
    this.scoreELe.innerHTML = ++this.score + ''

    //升级
    if (this.score % 10 === 0) {
      this.levelUp()
    }
  }
  //提升等级的方法
  levelUp() {
    if (this.level < this.maxLevel)
      this.levelELe.innerHTML = ++this.level + ''
  }
}

export default ScorePanel