import fs from 'fs';
// ? 파일 시스템?
let name = "kwonyejun";
let date = new Date();
let fileName = date.getSeconds() + name +".js";
fs.writeFileSync("./testjs" + fileName,name);
// ? 파일을 동기 방식으로 쓰다
// ! 파일을 만들어 주었다. 백엔드의 시작
// ! 파일이름 자동 생성기도 만들수 있다.