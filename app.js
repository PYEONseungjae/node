const express = require('express');//노드 모듈의 익스프레스를 익스프레스라는 변수에 할당함. const는 고정변수
const app = express();

const ejs = require("ejs");//ejs 엔진 설치
const db = require('./model/db');//데이터베이스 가져오기!

const helmet = require('helmet');//기본적인 보안을 적용함
app.use(helmet());//미들웨어에 헬멧 npm을 넣어주는? 익스프레스 명령

app.set('view engine', 'ejs')//그림파일을 보여줄 때 무슨 엔진 사용할지 설정
app.set('views', './views')//그림파일(html 저장 위치)
app.use('/public',express.static(__dirname + '/public'))
//포스트 방식의 api를 사용하기 위한 기본 설정이라고 생각하기
app.use(express.json());
app.use(express.urlencoded());

const mainRouter = require('./router/mainRouter')
app.use('/',mainRouter)

// 이 pc의 3000번 포트를 사용하겠다!
app.listen(3000, function(req, res){
    db.sequelize.sync({force:false})//데이터 테이블이 새로 생성 시 덮어씀 트루로 하면 아예 다시 시작
    console.log("서버 실행 중!")
})