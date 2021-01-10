const express = require("express");
const cors = require("cors");
const app = express();

var questionsJson = require("../shehacks_backend/questions.json");

//app.use(express.json());
app.use(cors());


app.get('/questions', (req, res) => {
    res.json(questionsJson);
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("connected"));