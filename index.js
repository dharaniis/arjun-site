import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/fatloss", (req, res) => {
    res.render("fatloss.ejs");
});


app.get("/bulking", (req, res) => {
    res.render("bulking.ejs");
});

app.get("/bodyRecomp", (req, res) => {
    res.render("bodyRecomp.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/blog", (req, res) => {
    res.render("blog.ejs");
});

app.listen(port, () => {
console.log(`Listening on port ${port}`);
});