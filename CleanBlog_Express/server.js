// Load Enviroment Variables
require('dotenv').config()

// Grab application Dependancies
const express = require('express')
const app = express()
const expressEjsLayout= require('express-ejs-layouts')
const port = process.env.PORT

// Set Static Folder
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))



// Set View Engine
app.set('view engine', 'ejs')
app.use(expressEjsLayout)
app.set("layout", "layout"); 

// Set Application Routes
app.use(require('./routes/pages_routes.js'))

// Run Application server
app.listen(port, () => {
    console.log(`Server runnong on localhost:${port}`)
}
)

