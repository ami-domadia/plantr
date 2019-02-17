const express = require('express')
const app = express()
const morgan = require('morgan')
const {showOne, showAll} = require('./gardeners.js')
const {orm, Gardener, Plot, Vegetable} = require('./model.js')
const seed = require('./seed.js')


app.use(morgan('dev'))

app.get('/', (req, res, next)=>{
    res.redirect('/gardeners')
    
})

app.get('/gardeners', (req, res, next)=>{
    Gardener.findAll()
    .then((all)=>{
        res.send(showAll(all))
        
    })
    .catch((error)=>{console.log(error)})

})

app.get('/gardener/:name', (req, res, next)=>{
    Gardener.findOne({where: {
            name: req.params.name
        },
        include: [
            {
                model: Vegetable,
                as: 'favorite_vegetable'
            }, 
            {
                model: Plot,
                include: [
                    {model: Vegetable,
                    through: 'vegetable_plot'}
            ]
        }]
    })
    .then((one)=>{
        res.send(showOne(one))
        
    })
    .catch((error)=>{console.log(error)})
})

const PORT= process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
    seed()
})