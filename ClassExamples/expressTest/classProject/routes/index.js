let express = require('express');//SETUP
let router = express.Router();//SETUP
let dataFile = require('../')

router.get('/', (req, res)=>{//SETUP
    res.send('homepage');//SETUP
})


module.exports = router;//SETUP