const mongoose=require('mongoose');


//create a schema

   
const todoSchema1= new mongoose.Schema({

    desp:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    due_date:{
        type:Date,
        required:true
    }
    
});

const todo1= mongoose.model('todo_new',todoSchema1);

module.exports=todo1;
