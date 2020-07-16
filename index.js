const express=require('express');
const port=8000;
var bodyParser = require('body-parser')
const app=express();

const db=require('./config/mongoose');
app.use(bodyParser.urlencoded());
// use router

app.use('/',require('./routes'));
//setting view engine
app.set('view engine','ejs');
app.set('views','./views');


app.use(express.static('./assets'));

app.listen(port, function(err){

    if(err)
    {
        console.log(`Error in running Server : ${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);
});