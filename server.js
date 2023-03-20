import http from 'http';
import url from 'url';
import qs from 'qs';
console.dir(http);// ? 남이 만든 모듈 객체
import fs from 'fs';
import { json } from 'stream/consumers';

let title;
let area;

let test =
  `<form action="/post_test" method="post">
  <p><input type="text" name="title" placeholder="title"></p>
  <p><textarea name="area" placeholder="test = text"></textarea></p>
  <p><input type="submit"></p>
</form>`

let testwrite = (a,b) => {fs.writeFileSync("./"+a +".js",b)};

const server = http.createServer((request, response) => {
  // 여기서 작업이 진행됩니다!
let _url = request.url;
var pathname = url.parse(_url, true).pathname;

  // ! 비지닉스 로직 부분 내가 만들어야 할 부분
  if (request.method === 'GET' && _url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    let example = test;
    
    response.write(example);
    response.end();
  }
  // ? 이 함수의 매개변수 request, response 객체이다.
  if (pathname === '/post_test') {
    var body = '';
    request.on('data', function (data) {
      body = body + data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      //쿼리 스트링형식을 객체로 변환 해줘
      console.log(post);
      title = post.title;
     area = post.area;
      // response.end(`
      //     <!doctype html>
      //     <html>
      //     <head>
      //       <title>POST</title>
      //       <meta charset="utf-8">
      //     </head>
      //     <body>
      //       <p>title : ${title}</p>
      //       <p>description : ${area}</p>
      //     </body>
      //     </html>
      //     `);
      response.end(testwrite(title,area));
    });
  }
});// * 인자를 전달 받았다.


server.listen(2080, function (error) {
  if (error) {
    console.log('서버 안돌아감');
  }
  else {
    console.log('서버 돌아감');
  }
});