
const {orm, Gardener, Plot, Vegetable} = require('./model.js')

orm.sync({force: true})
.then(()=>{
    console.log('DB connected through the ORM!')
})
.then(()=>{
    const veg1 = Vegetable.create({name: 'brinjal', color: 'purple', planted_on: '2018-01-01'})
    const veg2 = Vegetable.create({name: 'potato', color: 'brown', planted_on: '2018-02-01'})
    return Promise.all([veg1, veg2])
})
.then(([veg1, veg2])=>{
    const tom = Gardener.create({name: 'tom', age: 2, favoriteVegetableId: veg1.id})
    const carl = Gardener.create({name: 'carl', age: 4, favoriteVegetableId: veg2.id})
    return Promise.all([tom, carl, veg1, veg2])
}) 
.then(([tom, carl, veg1, veg2])=>{
    const plot1 = Plot.create({size: 22, shaded: true, gardenerId: tom.id})
    const plot2 = Plot.create({size: 32, shaded: false, gardenerId: carl.id})
    return Promise.all([veg1, veg2, plot1, plot2])
})
.then(([veg1, veg2, plot1, plot2])=>{
    veg1.setPlot(plot1)
    veg2.setPlot(plot2)
})
.catch((err)=>{
    console.log('Errors while working the ORM!')
    console.log(err)
})
.finally(()=>{
    orm.close()
})

