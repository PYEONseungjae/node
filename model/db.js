// 데이터베이스 관련 설정부
var Sequelize = require("sequelize")
var sequelize;

sequelize = new Sequelize("class101","root","djflsdl1@",{
    host : "localhost",
    port : 3306,//이 포트번호는 뭔가 약속임
    dialect : "mysql",//시퀄라이즈는 몽고 등 다른 db도 지원하기 때문에 mysql를 사용하겠다고 지정
    timezone : "+09:00",
    define : {
        charset : "utf8",
        collate : "utf8_general_ci",
        timestamps : true,
        freezeTableName : true
    }
})

var db = {};
//db.users = sequelize.import(__dirname + "/users.js");
//만들어낸 테이블은 시퀄라이즈 임폴트로 가지고 와야함.
//__dirname 은 상대주소를 의미함. 해당 코드 바로 근처부터 찾는다는 의미

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;