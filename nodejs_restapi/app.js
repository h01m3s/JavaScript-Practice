// load app server using express

const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

app.use(morgan('short'))

app.post('/user_create', (req, res) => {
    console.log("Trying to create a new user...")
    console.log("First name: " + req.body.create_first_name)
    const firstName = req.body.create_first_name
    const lastName = req.body.create_last_name

    const queryString = "INSERT INTO users (first_name, last_name) VALUES (?, ?)"
    getConnection().query(queryString, [firstName, lastName], (err, results, fields) => {
        if (err) {
            console.log("Failed to insert new user: "+ err)
            res.sendStatus(500)
            return
        }
        console.log("Inserted a new user with id: ", results.insertId)
        res.end()
    })
})

function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        // password: ''
        database: 'test_mysql'
    })
}

app.get('/user/:id', (req, res) => {
    console.log("Fetching user with id: " + req.params.id)

    const connection = getConnection()

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

