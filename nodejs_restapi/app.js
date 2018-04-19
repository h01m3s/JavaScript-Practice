// load app server using express

const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('short'))

app.get("/", (req, res) => {
    console.log("responding to root route")
    res.send("Hello World. sup")
})

app.get("/users", (req, res) => {
    var user1 = {firstName: "aaa", lastName: "bbb"}
    const user2 = {firstName: "bbb", lastName: "ccc"}
    res.json([user1, user2])
    // res.send("responding users.")
})

app.listen(2333, () => {
    console.log("Server is up and listening on 2333...")
})
