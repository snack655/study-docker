const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

console.log(`test = `,process.env.DATABASE_HOST);

const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "1234",
  database: "modo",
  port:`3306`,
});

app.use(express.json());
app.use(cors());

//json 형태로 데이터 주고받도록 셋팅
//app.use(bodyParser.json())

connection.connect();

app.get("/todos", (req, res) => {
  connection.query("SELECT * from todo", (error, rows, fields) => {
    if (error) throw error;
    console.log("TODO is : ", rows);
    res.send(rows);
  });
});

app.get("/todos/", (req, res) => {
  connection.query("SELECT * from todo", (error, rows, fields) => {
    if (error) throw error;
    console.log("TODO is : ", rows);
    res.send(rows);
  });
});

app.post("/todos", (req, res) => {
  
  let values = [req.body.title, req.body.content, req.body.timestamp, req.body.color];
  let sql = `INSERT INTO todo(title, content, timestamp, color) VALUES(?, ?, ?, ?);`

  connection.query(sql, values, (error, rows, fields) => {
    if(error) throw error;
    res.status(200).json({ status: 200, msg: "투두 추가 성공" });
  })
})

app.put("/todo/modify", (req, res) => {
  let values = [req.body.title, req.body.content, req.body.timestamp, req.body.color, req.body.isComplete, req.body.id];
  let updatesql = "UPDATE todo SET title = ?, content = ?, timestamp = ?, color = ?, isComplete = ? WHERE id = ?"

  connection.query(updatesql, values, (error, rows, fields) => {
      if(error) throw error;
      res.status(200).json({ status: 200, msg: "수정 성공" });
  })
})

app.delete("/todo/delete", (req, res) => {
    let values = [req.body.id]
    let deletesql = "Delete from todo where id = ?"

    connection.query(deletesql, values, (error, rows, fields) => {
        if(error) throw error;
        res.status(200).json({ status: 200, msg: "삭제 성공" });
    })
})

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen('9000', () => {
  console.log(" 9000 listening");
});
