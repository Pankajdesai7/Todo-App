const todo1=require('../models/todo_data');
module.exports.home=function(req,res){
    todo1.find({},function(err,todo_list){
        if(err)
        {
            console.log("error");
            return;
        }
        res.render('home',{
            title:'Todo App',
            todolist:todo_list
        });
    });
}


//module.exports.actionName=function(req,res){};