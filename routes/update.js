const express=require('express');
const router=express.Router();
const Employee=require('../models/employee.js');

router.put('/:id',async(req,res)=>{
  try{
    const Updated=await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );
    res.json(Updated);

  }catch(error){
    console.log(error);
    res.status(500).send('error updating the employee');
  }
})

module.exports=router;