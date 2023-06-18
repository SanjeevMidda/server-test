let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/*+json' }))

let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

let PORT = 8080;

let fruits = ["strawberry", "apples", "cherries"];

app.get("/", (req, res) => {
    res.json(fruits);
})

app.post("/post", urlencodedParser, (req,res) => {
    console.log(req.body);
    res.json("Successfully received content" + req.body);
})

app.listen(PORT, () => console.log("Server is up and running on port: " + PORT))