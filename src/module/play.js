import CoachValidate from '../controller/coach_validate.js';
import NotEatValidaLte from '../controller/notEat_validate.js';

class Play {
  //객체
  #coachNotEat = {};

  async getObject() {
    const coachName = await new CoachValidate().righitCoach();

    for (const name of coachName) {
      let notEat = await new NotEatValidaLte().righitNotEat(name);
      this.#coachNotEat[name] = { notEat };
    }

    return this.#coachNotEat;
  }
}
export default Play;

const play = new Play();
const x = await play.getObject();
console.log(x);
