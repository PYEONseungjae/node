//라우터 구조
const express = require('express');//노드 모듈의 익스프레스를 익스프레스라는 변수에 할당함. const는 고정변수
const router = express.Router();

// get 방식의 api 만들기 주소를 만들어주는 도구라고 생각
router.get("/", function(req, res){
    res.render('index', {title:"EJS 메인페이지"})//그림파일전달 응답
    //render함수는 app.js에서 설정한 app.set('view', './views')로 인해 항상 views 폴더를 보고있음
})

router.get("/about", function(req, res){
    res.send("About page")
})

//포스트 방식의 api 사용법
router.post("/postapi", function(req, res){
    let body = req.body;
    console.log(body);
    res.send("postapi")
    
})
module.exports = router