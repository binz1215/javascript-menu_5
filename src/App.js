import Play from './module/play.js';
import { WEEK } from './constants/contants.js';
import { printLunchStart, printResult, printDone, printInFormat } from './view/outputView.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  #categoryArray;
  #coachMenuArray;
  async play() {
    printLunchStart();
    const play = new Play();
    const { category, coachMenu } = await play.run();
    printResult();
    this.#categoryArray = this.#makeArray(category);
    this.#makeCoachArray(coachMenu);
    this.#printAll();
    printDone();
  }
  #makeArray(object) {
    const key = Object.keys(object);
    const value = Object.values(object)[0];
    const categoryArray = [...key, ...value];

    return categoryArray;
  }

  #makeCoachArray(object) {
    const resultArray = [];

    for (const key in object) {
      const category = object[key];
      resultArray.push([key, ...category]);
    }
    this.#coachMenuArray = resultArray;
  }

  #printAll(array) {
    printInFormat(WEEK);
    printInFormat(this.#categoryArray);
    this.#coachMenuArray.forEach((coach) => {
      printInFormat(coach);
    });
  }
}

export default App;

//const play = new App();

//const x = await play.play();
////play.printAll(coachArray);

//console.log(x);
