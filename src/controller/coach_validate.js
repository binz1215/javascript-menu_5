import { getCoachName } from '../view/inputView.js';
import { Console } from '@woowacourse/mission-utils';
import { NUM } from '../constants/contants.js';

class CoachValidate {
  #coach;

  async righitCoach() {
    let valid = true;

    while (valid) {
      try {
        this.#coach = await this.#coachArray();
        this.#coachNameValidCheck();
        valid = false;
      } catch (error) {}
    }
    return this.#coach;
  }

  async #coachArray() {
    const coach = await getCoachName();
    const array = coach.split(',').map((element) => element.trim());

    return array;
  }

  #coachNameValidCheck() {
    if (!this.#isString()) {
      Console.print(`[ERROR] 코치 이름은 한글로만 적어야 합니다.`);
      throw new Error(`[ERROR]`);
    }
    if (this.#isRightCoachNum()) {
      Console.print(`[ERROR] 코치진은 2~5명 사이입니다.`);
      throw new Error(`[ERROR]`);
    }
    if (this.#isRightCoachName()) {
      Console.print(`[ERROR] 코치 이름의 길이는 두글자에서 네글자 사이입니다.`);
      throw new Error(`[ERROR]`);
    }
    if (this.#isDuplication()) {
      Console.print(`[ERROR] 코치 이름은 중복될 수 없습니다.`);
      throw new Error(`[ERROR]`);
    }
  }
  #isString() {
    const koreanRegExp = /^[가-힣]+$/;
    for (const element of this.#coach) {
      if (!koreanRegExp.test(element)) {
        return false;
      }
    }

    return true;
  }

  #isRightCoachNum() {
    if (this.#coach.length < NUM.TWO || this.#coach.length > NUM.FIVE) return true;
  }

  #isRightCoachName() {
    return this.#coach.some((name) => name.length < NUM.TWO || name.length > NUM.FOUR);
  }

  #isDuplication() {
    const coachSet = new Set(this.#coach);
    if (this.#coach.length !== coachSet.size) return true;
  }
}
export default CoachValidate;

//const play = new CoachValidate();
//const x = await play.righitCoach();
//console.log(x);
