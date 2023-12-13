import { MissionUtils } from '@woowacourse/mission-utils';

function getCoachName() {
  const coach = MissionUtils.Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n');

  return coach;
}

getCoachName();
