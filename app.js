const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.send("<h1>Hello</h1>")

})

app.listen(3001, ()=> {
    console.log("app running at port 3001");
})