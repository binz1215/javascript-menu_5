import CoachValidate from '../controller/coach_validate.js';
import NotEatValidaLte from '../controller/notEat_validate.js';
import Category from './category_make.js';
//import PersonerMenu from './coach_menu.js';

class Play {
  //객체
  #coachNotEat = {};
  #catagory;

  async getObject() {
    const coachName = await new CoachValidate().righitCoach();

    for (const name of coachName) {
      let notEat = await new NotEatValidaLte().righitNotEat(name);
      this.#coachNotEat[name] = { notEat };
    }
    this.#catagory = new Category().matchCategory();
    return this.#coachNotEat;
  }

  //personerMenu() {
  //  const personer = new PersonerMenu();
  //  personer.setObject(this.#coachNotEat, this.#catagory);
  //}
}
export default Play;

const play = new Play();
const x = await play.getObject();
console.log(x);
