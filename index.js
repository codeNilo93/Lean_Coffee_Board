const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

app.use('/api/cards', require('./routes/cards'))

app.listen(port, () => {
  console.log(`Server listenin at http://localhost:${port}`)
})

// am Ende soll meine App auf den port hören

// zu finden https://expressjs.com/en/starter/hello-world.html