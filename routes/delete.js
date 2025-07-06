const express=require('express');
const router=express.Router();
const Employee=require('../models/employee.js');

router.delete('/:id',async(req,res)=>{
  try{
    const Deleted=await Employee.findByIdAndDelete(req.params.id);
    if(!Deleted){
      return res.status(404).send('employee not found');
    }
    res.send('employee deleted');
  }catch(error){
    console.log(error);
  }
});

module.exports=router;