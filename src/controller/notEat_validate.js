import { notEat } from '../view/inputView.js';
import { Console } from '@woowacourse/mission-utils';
import { CATEGORY, NUM } from '../constants/contants.js';

class NotEatValidaLte {
  #notEat;
  /**
   * name 반드시 전달받아야.
   * @param {string} name
   * @returns
   */
  async righitNotEat(name) {
    let valid = true;

    while (valid) {
      try {
        this.#notEat = await this.#notEatArray(name);
        this.#notEatValidCheck();
        valid = false;
      } catch (error) {}
    }
    return this.#notEat;
  }

  async #notEatArray(name) {
    const food = await notEat(name);
    const array = food.split(',').map((element) => element.trim());

    //지금 아무것도 입력하지 않을 때 [ '' ]이렇게 반환하는데 나중에 뭔가 아예 빈게 필요하면 if~예외처리 ㄱㄱ
    return array;
  }

  #notEatValidCheck() {
    if (this.#notEat[0] === '') return true;
    if (!this.#isRightMenu()) {
      Console.print(`[ERROR] 메뉴 이름은 메뉴 안에 있어야 합니다.`);
      throw new Error(`[ERROR]`);
    }
    if (this.#isRightMenuNum()) {
      Console.print(`[ERROR] 메뉴 이름은 두개까지만 입력 가능합니다.`);
      throw new Error(`[ERROR]`);
    }
    if (this.#isDuplication()) {
      Console.print(`[ERROR] 메뉴 이름은 중복될 수 없습니다.`);
      throw new Error(`[ERROR]`);
    }
  }

  #isRightMenu() {
    return this.#notEat.every((food) => Object.values(CATEGORY).flat().includes(food));
  }

  #isRightMenuNum() {
    if (this.#notEat.length < NUM.ZERO || this.#notEat.length > NUM.TWO) return true;
  }

  #isDuplication() {
    const menuSet = new Set(this.#notEat);
    if (this.#notEat.length !== menuSet.size) return true;
  }
}
export default NotEatValidaLte;

//const play = new NotEatValidaLte();
//const name = 'pobi';
//const x = await play.righitNotEat(name);
//console.log(x);
