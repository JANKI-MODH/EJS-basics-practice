const express = require("express")
const app = express();
const port = 3000;

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("home.ejs")
}
)

app.get("/ig/:username", (req, res) => {
    const { username } = req.params;
    const instaData = require("./data.json")
    const data = instaData[username];
    if (data) {
        res.render("insta.ejs", { data });
    }
    else {
        res.render("error.ejs")
    }

}
)

app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { dicevalue: num })
}
)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
}
)