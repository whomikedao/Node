var express = require('express');
var router = express.Router();
let bodyParser = require('body-parser');

router.get('/', (req, res)=>{

    res.render('index');
});

router.use(bodyParser.urlencoded({extended: false}));

router.post('/', (req, res)=>{
    console.log(`name: ${req.body.name} email: ${req.body.email} number: ${req.body.number}`);
    console.log(req.body);
    // res.send('inside of post');
});

module.exports = router;