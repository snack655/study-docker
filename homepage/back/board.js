// Sequelize를 사용하기 위한 모듈 로드
const Sequelize = require('sequelize');

// Sequelize 인스턴스 생성
const sequelize = new Sequelize('test', 'root', 'cmj655655@', {
  host: 'localhost',
  dialect: 'mysql' // 사용하는 데이터베이스 종류에 따라 변경 가능
});

// Board 모델 정의
const Board = sequelize.define('board', {
    id: {
        type:Sequelize.INTEGER,
        primaryKey :true,
        autoIncrement : true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    writer: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

// 테이블 생성
Board.sync({ force: true }).then(() => {
  console.log('테이블이 생성되었습니다.');
});

module.exports = {sequelize,Board}