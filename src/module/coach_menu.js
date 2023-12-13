import { Random } from '@woowacourse/mission-utils';
import { CATEGORY } from '../constants/contants.js';

class PersonerMenu {
  #paesonMenu = {};
  #notEat;
  #categoris;

  setObject(notEat, category) {
    this.#notEat = notEat;
    this.#categoris = category;
  }

  #shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  //notEat = this.#notEat['name'].notEat : array
  #recomend(country, notEat) {
    const notEatFood = notEat;
    const categoryArray = CATEGORY[country];
    let menu;

    while (true) {
      menu = this.#shuffle(CATEGORY[country])[0];
      if (!notEatFood.includes(menu)) {
        break;
      }
    }
    return menu;
  }

  #foodArray(name) {
    const eachCoachWeekMenu = [];
    const notEat = this.#notEat[name].notEat;
    let recommend;
    this.#categoris['카테고리'].forEach((country) => {
      while (true) {
        recommend = this.#recomend(country, notEat);
        if (!eachCoachWeekMenu.includes(recommend)) {
          break;
        }
      }
      eachCoachWeekMenu.push(recommend);
    });

    return eachCoachWeekMenu;
  }

  personer() {
    const coachs = Object.keys(this.#notEat);
    coachs.forEach((name) => {
      let foodlist = this.#foodArray(name);
      this.#paesonMenu[name] = foodlist;
    });
    return this.#paesonMenu;
  }
}
export default PersonerMenu;

//const play = new PersonerMenu();
//const country = '한식';
//const name = '포코';
//const x = play.personer();
////
//console.log(x);

////this.#coachNotEat[name] = { notEat };
