const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
const notes = [
    {
        id: 1,
        note: "Test1",
    }, 
    {
        id: 2,
        note: "Test2"
    }
]

router.get('/', (req, res, next) => {
    res.render('index', {title: "Welcome to guestbook!!!"})
})

router.get('/leave', (req, res, next) => {
    res.render('leaveNote', {title: 'Leave a note'})
})

router.get('/read', (req, res, next) => {
    res.render('readNote', {title: "read notes left by others", notes: notes, test: 'test'})
})

//add note
router.post('/add-note', (req, res, next) => {
    console.log(req.body.note);
    notes.push({
        id: Math.random(),
        note: req.body.note
    })
    
    fs.writeFile(path.join(__dirname, '..', 'notes.json'), JSON.stringify(notes, null, 2), () => {
        res.status(302).redirect('/')
    })
})



module.exports = router