// load app server using express

const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('short'))

app.get('/user/:id', (req, res) => {
    console.log("Fetching user with id: " + req.params.id)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        // password: ''
        database: 'test_mysql'
    })

    const userId = req.params.id
    const queryString = "SELECT * FROM users WHERE id = ?"
    connection.query(queryString, [userId], (err, results, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Fetched users successfully.")

        const users = results.map((results) => {
            return {firstName: results.first_name, lastName: results.last_name}
        })
        res.json(results)
    })

})

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

