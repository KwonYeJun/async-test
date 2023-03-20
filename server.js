import http from 'http';
console.dir(http);// ? 남이 만든 모듈 객체
const server = http.createServer((request, response) => {
  // 여기서 작업이 진행됩니다!

  let body = [];
body += "<!DOCTYPE html>";
body += "<html>";
body += "<head>";
body += "<title>Node.js</title>";
body += "</head>";
body += "<body>";
body += "<h1>Hello World</h1>";
body += "</html>";



  response.statusCode = 200;
  response.setHeader('Content-Type', 'test/plain');
  response.end('Hello World');
  // ? 이 함수의 매개변수 request, response 객체이다.
});// * 인자를 전달 받았다.
