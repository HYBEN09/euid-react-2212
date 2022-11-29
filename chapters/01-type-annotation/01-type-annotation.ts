// -----------------------------------------------------------------------------------------
// 📌 타입 주석(Type Annotation)이란?
// ⭐️ URL : https://bit.ly/3XFFSFg
// -----------------------------------------------------------------------------------------
// - "이 변수는 string 타입이다."
// - "이 함수는 boolean 타입을 반환한다."
// - "이 함수는 2개의 number 타입을 전달 받고, number 타입을 반환한다."
// - "이 객체는 colors 프로퍼티를 꼭 포함해야 하며, string 타입으로만 구성된 array 타입이어야 한다."

// -----------------------------------------------------------------------------------------
// 📌 변수 타입(Variable Types) → `let variable:type = value`
// -----------------------------------------------------------------------------------------
// - 변수 선언 과정에서 설정된 타입 이외의 다른 타입이 할당 시도된 경우, 타입 오류입니다.
//
// - PRIMITIVE TYPES
//   - undefined, null, string, number, boolean, symbol
//   - any, unknown, never, void

// - OBJECT TYPES
//   - object, array, function
//   - enum, tuple, etc.
// -----------------------------------------------------------------------------------------

{
  // 정의 되지 않음(undefined)
  let notDefined:undefined;

  // 비어 있음(null)
  let empty:null;

  // 문자 타입(string type)
  let message:string = `변수 타입은 변수 이름 뒤에 ':type'을 작성하는 것을 말하며 이를 "타입 에너테이션"이라 부릅니다.`;

  // 숫자 타입(number type)
  let currentYear:number = 2022;

  // 불리언 타입(boolean type)
  let isWatch:boolean = false;

  // 심볼(symbol type)
  let uniqueId:symbol = Symbol('uniqueId');

  // 객체(object type)
  const rectangle:{
    width:number;
    height:number;
  } = {
    width: 100,
    height: 80,
  };

  // 배열(array type)
  // generic 문법
  // const namesList:Array<string> = ['최수영', '한영주', '박호연'];

  const namesList:string[] = ['최수영', '한영주', '박호연'];

  // 함수(function type)
  const sum = (x:number, y:number, printable:boolean): void | number => {
    // if (typeof x !== 'number' || typeof y !== 'number') {
    //   throw new TypeError('x, y 전달인자는 숫자 값만 허용합니다.');
    // }
    // if (typeof printable !== 'boolean') {
    //   throw new TypeError('printable 전달인자는 불리언 값만 허용합니다.');
    // }

    if (printable) {
      console.log(x + y);  // undefined
    } else {
      return x + y;  // number
    }
  };
}
