const express=require('express');
const port=8000;

const app=express();



// use router

app.use('/',require('./routes'));


app.listen(port, function(err){

    if(err)
    {
        console.log(`Error in running Server : ${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);
});