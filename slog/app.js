const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const connection = mysql.createConnection({
  host: "172.18.0.3",
  //host: "mysql",
  user: "root",
  password: "password",
  database: "slog",
  port:`3306`,
});

app.use(express.json());
app.use(cors());

//json 형태로 데이터 주고받도록 셋팅
//app.use(bodyParser.json())

connection.connect();

app.get("/students", (req, res) => {
  connection.query("SELECT * from students", (error, rows, fields) => {
    if (error) throw error;
    console.log("User info is : ", rows);
    res.send(rows);
  });
});

app.post("/students", (req, res) => {
  
  let values = [req.body.name, req.body.age]
  let sql = `INSERT INTO students(name, age) VALUES(?, ?)`

  connection.query(sql, values, (error, rows, fields) => {
    if(error) throw error;
    res.status(200).json({ status: 200, msg: "학생 추가 성공" });
  })
})

app.put("/students/modify", (req, res) => {
  let values = [req.body.name, req.body.age, req.body.id]
  let updatesql = "UPDATE students SET name = ?, age = ? WHERE id = ?"

  connection.query(updatesql, values, (error, rows, fields) => {
      if(error) throw error;
      res.status(200).json({ status: 200, msg: "수정 성공" });
  })
})

app.delete("/students/delete", (req, res) => {
    let values = [req.body.id]
    let deletesql = "Delete from students where id = ?"

    connection.query(deletesql, values, (error, rows, fields) => {
        if(error) throw error;
        res.status(200).json({ status: 200, msg: "삭제 성공" });
    })
})

app.get("/", (req, res) => {
  res.send("hi");
});
app.listen('5000', () => {
  console.log(app.get('port') + "listening");
});
