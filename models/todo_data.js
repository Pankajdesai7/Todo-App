const mongoose=require('mongoose');


//create a schema

const todoSchema = new mongoose.Schema({

    desp:{
        type:String,
        required:true
    }
    
});

const todo= mongoose.model('todo',todoSchema);

module.exports=todo;