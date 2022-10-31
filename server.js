const express = require('express');
const hbs = require('hbs');
const port = 3001;
const path = require("path");
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.send("<h1>You're learning to render dynamic content with Handelerbas</h1>");
})
app.get("/dynamic", (req, res) => {
    res.render("dynamic", {
        msg : "Hello, world. Welcome to Handlerbas",
        title : "Rendering dynamic content",
        name : "Jospin",
        secondName : "Kanane",
        age : 22,
        sex : "male",
        nationality : "congolese",
        province : "North Kivu"
    })
});

app.get("/static", (req, res) => {
    res.render("static")
});

app.listen(port, () => console.log(`listening on ${port}`));