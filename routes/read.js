const express=require('express');
const router=express.Router();
const Employee=require('../models/employee.js');

router.get('/',async(req,res)=>{
  try{
    const newEmployee=await Employee.find();
    res.json(newEmployee);
  }catch(error){
    console.log('unable to get data',error);
  }
});

module.exports=router;