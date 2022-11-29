/**
 * 두 수의 합을 출력하거나, 값을 반환하는 유틸리티 함수
 * @param {number} x 첫번째 매개변수
 * @param {number} y 두번째 매개변수
 * @param {boolean} printable 프린트 여부
 * @returns {number | void}
 */

export const sum = (x, y, printable) => {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("x, y 전달인자는 숫자 값만 허용합니다.");
  }
  if (typeof printable !== "boolean") {
    throw new TypeError("printable 전달인자는 불리언 값만 허용합니다.");
  }

  if (printable) {
    console.log(x + y);
  } else {
    return x + y;
  }
};

// sum(Number("101"), "hey".length, !!"true");
