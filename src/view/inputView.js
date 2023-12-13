import {Console} from '@woowacourse/mission-utils';

async function getCoachName() {
  const coach = await Console.readLineAsync('코치의 이름을 입력해 주세요. (, 로 구분)\n');

  return coach;
}

getCoachName();
