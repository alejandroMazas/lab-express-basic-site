const express = require("express")

const app = express()

const path = require("path")


app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("index-page")
})

app.get("/casas", (req, res) => {
    res.render("casas")
})

app.get("/characters", (req, res) => {
    res.render("characters")
})

app.get("/gallery", (req, res) => {
    res.render("gallery")
})


app.listen(5005, () => console.log('on port 5005'));