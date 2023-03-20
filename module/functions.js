function one (){
  return 1;
}

function twoReturnString(){
  return "1";
}
function isthree(){
  return true;
}//is를 붙여주면 암묵적으로 블린 형태이다.

function four(){
  return {
    a: 1,
    b: "2",
    c: true,
  }
}

function five(){
  let a = 1+ 1;
}//더하기를 하기만 하는 (실핼만 하는) 함수이다. 
//동작만을 하는 함수 대표적인 함수 for()문이다.
//실행 함수들은 리턴이 목적이 아닌 동작만 하기위함이다.
//domapi는 대부분 return이 없다.

two() === "1";