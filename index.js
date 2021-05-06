const express = require('express')
const path = require('path')
const mainRoutes = require('./routes/main-routes')

//set up
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', 'views')
// app.get('/', (req, res) => {
//     res.send("<h1>Hello</h1>")
// })
// app.get('/leave', (req, res, next) => {
//     res.sendFile(path.join(__dirname, 'views','leaveNote.ejs'))
// })

//middlewere
app.use(mainRoutes)

// app.use((req, res) => {
//     res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
// })

app.use((req, res) => {
    res.status(404).send("404 Not!")
})

//server 
const PORT = process.env.PORT || 7000
app.listen(PORT, ()=> console.log(`Server has started on port ${PORT}...`))
