let express = require('express'); //SETUP
let router = express.Router();//SETUP

router.get('/speakers', (req, res)=>{//SETUP PATH IS DIFFERENT
    res.send('speakers');//SETUP
})

module.exports = router;//SETUP