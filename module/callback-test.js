function six(number, append) {
  return number + append;
} //함수는 복잡하지만 버그는 잡아 냈다.
function seven(number, append) {
  return number - append;
}//선언 할 때
function eight(number, append,callback) {
  let a = number + 1;
  let b = append + 2;
  return callback(a,b);
}//callback이라고 많이 써준다 그래야 나중에 혼돈이 없다.
//파라미터를 전달 받았다. 매개변수가 꼭 스트링 숫자일 필요 없고 함수일수도 있다.

const a = eight(2, 3,function(a,b){
return a - b;
}); // 호출 할 때 결정된다. 인자를 전달 받았다.
console.log(a);
// console.log(eight(3,4, seven));
//무엇을 한다음에 하고 싶다면 