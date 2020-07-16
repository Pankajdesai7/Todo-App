const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');
var deleteid;
const todo1=require('../models/todo_data');
router.get('/',homeController.home);

router.post('/get-data',function(req,res){

    //console.log(req.body);
    todo1.create(req.body,function(err,newTodo){

        if(err)
        {
            console.log("error occured");
            return;
        }
      return  res.redirect('back');
    });
});
router.get('/get-id/',function(req,res){
    //fetching the unique id for contact from url
     deleteid=req.query.id;
   return res.redirect('back');
  /* todo1.findByIdAndDelete(id,function(err){
    if(err)
    {
        window.alert("Error Occured");
        return;
    }
    
});  */  
});
router.get('/delete',function(req,res){
    //var id=req.query.id;
    todo1.findByIdAndDelete(deleteid,function(err){
        if(err)
        {
            window.alert("Error Occured");
            return;
        }
        return res.redirect('back');
    }); 
});


console.log("Router loaded");




module.exports=router;