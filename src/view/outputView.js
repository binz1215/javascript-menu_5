import { Console } from '@woowacourse/mission-utils';

export function printLunchStart() {
  Console.print(`점심 메뉴 추천을 시작합니다.`);
  //Console.print(``);
}

export function printResult() {
  //Console.print(``);
  Console.print(`메뉴 추천 결과입니다.`);
}

export function printDone() {
  //Console.print(``);
  Console.print(`추천을 완료했습니다.`);
}

export function printInFormat(array) {
  const makeString = array.join(' | ');
  Console.print(`[ ${makeString} ]`);
}
