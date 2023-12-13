import { CATEGORY, NUM } from '../constants/contants.js';
import { Random } from '@woowacourse/mission-utils';
class Category {
  #categories = {
    카테고리: [],
  };

  matchCategory() {
    const numArray = this.#randomCategory();
    const menu = Object.keys(CATEGORY);
    numArray.forEach((day) => {
      this.#categories.카테고리.push(menu[day - 1]);
    });
    return this.#categories;
  }

  #randomCategory() {
    // 예시 코드. 사용하는 자료 구조에 따라 난수를 적절하게 가공해도 된다.
    let categories = [];
    while (categories.length < NUM.FIVE) {
      const random = Random.pickNumberInRange(1, 5);
      if (this.#countCheck(categories, random) < NUM.TWO) {
        categories.push(random);
      }
    }
    return categories;
  }

  //현재 배열 안의 target숫자 개수를 알려줌
  #countCheck(array, target) {
    return array.filter((value) => value === target).length;
  }
}
export default Category;

//const play = new Category();
//const x = play.matchCategory();
//console.log(x);
