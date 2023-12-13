import {Console} from '@woowacourse/mission-utils';

export async function getCoachName() {
  const coach = await Console.readLineAsync('코치의 이름을 입력해 주세요. (, 로 구분)\n');

  return coach;
}

/**
 * 
 * @param {String} name 
 */
export async function notEat(name) {
  Console.print('');
  const notEatFood = await Console.readLineAsync(name +'(이)가 못 먹는 메뉴를 입력해 주세요.\n');

  return notEatFood;
}

