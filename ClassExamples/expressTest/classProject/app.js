let express = require('express'); //SETUP
let app = express(); //SETUP
let port = 3000; //SETUP
app.use(express.static('public')); //SETUP
app.use('view engine', 'ejs'); //SETUP TELLING EXPRESS OBJECT THAT THE ENGINE WE'RE USEING IS 'EJS'
app.use('views', 'views');//SETUP FIRST 'VIEWS' IS STANDARD. SECOND 'VIEWS' IS NAME OF FOLDER

app.set(require('./routes/index'));//SETUP
app.set(require('./routes/speakers'));//SETUP



app.listen(port, ()=>{ //SETUP
    console.log(`listening on port ${port}`)
});