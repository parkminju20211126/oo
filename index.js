const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const app = express();
//body parser를 이용해 body 추출가능
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//ejs 엔진 설정
app.set("view engine", "ejs");
//public 폴더와 연결
app.use(express.static("public/"));
app.use('/openai', require('./routes/openaiRoutes'));

//index.ejs 연결
app.get(
    "/", (req, res) => {
        res.render("index.ejs")
    }
);
app.listen(port, ()=> console.log(`server started`))