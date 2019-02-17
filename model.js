const Sequelize = require('sequelize')
const DATABASE_URL=process.env.DATABASE_URL || 'postgres://localhost:5432/plantr'
const orm = new Sequelize(DATABASE_URL, {logging: false})

const Gardener = orm.define('gardener', 
{
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
})

const Plot = orm.define('plot',
{
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN
})

const Vegetable = orm.define('vegetable',
{
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE
})

Plot.belongsTo(Gardener)
Gardener.hasOne(Plot)

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

module.exports = {orm, Gardener, Plot, Vegetable}