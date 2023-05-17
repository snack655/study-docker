const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const {sequelize,Board} = require("./board.js");

const PORT = 5001

app.get("/", function (req, res) {
    res.send("text");
});

app.get("/json", function (req, res) {
    res.json("json");
});

app.post("/freeboard/insert", (req, res)=> {
    Board.create({
        title: "title111",
        content: "content",
        writer: "writer",
    })
    res.send("insert 됨");
})

app.get("/freebord/list", (req, res) => {
    res.json([
        {id:1, title:"title111"},
        {id:2, title:"title222"},
        {id:3, title:"title333"}
    ])
})

app.listen(PORT, function() {
    console.log("Example app listening on port : " + PORT);
});