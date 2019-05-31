let express = require('express');//SETUP
let router = express.Router();//SETUP

router.get('/', (req, res)=>{//SETUP
    res.send('homepage');//SETUP
})

module.exports = router;//SETUP