var express = require('express');
var router = express.Router();
let bodyParser = require('body-parser');

router.get('/', (req, res)=>{

    res.render('index');
})

router.post('/', (req, res)=>{
    console.log('inside of post');
    res.send('inside of post');
}) 

module.exports = router;