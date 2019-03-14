const fastify = require('fastify')
const fs = require('fs')

const port = 3001
const app = fastify()

app.get('/', (req, res) => {
    res.type('text/html')
    const file = fs.readFileSync('./index.html')
    res.send(file)
})

const {register, login, authorize} = require('./controllers/user.js')

app.post('/register', async (req, res) => {
    const {email, password} = req.body
    const user = {email, password}
    console.log(email, password)
    let result = await register(user)
    console.log(result)
    res.send(result)
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const user = {email, password}
    console.log(email, password)
    let result = await register(user)
    console.log(result)
    res.send(result)
})

app.listen(port, (err) => {
    if (err) {
        console.error(err)
    }

    console.log(`Listening on port ${port}`)
})
