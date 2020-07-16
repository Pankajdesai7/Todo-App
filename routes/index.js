const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');

const todo=require('../models/todo_data');
router.get('/',homeController.home);

router.post('/get-data',function(req,res){
    todo.create(req.body,function(err,newTodo){

        if(err)
        {
            console.log("error occured");
            return;
        }
      return  res.redirect('back');
    });
});

console.log("Router loaded");




module.exports=router;