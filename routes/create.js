const express=require('express');
const router=express.Router();
// const employee=require('../models/employee.js');
const Employee = require('../models/employee.js');

router.post('/',async(req,res)=>{
    const newEmployee=new Employee({
      name:req.body.name,
      age:req.body.age,
      nationality:req.body.nationality
    })

    try{
      const a1=await newEmployee.save();
      res.json(a1);
    }catch(error){
      console.log('unable to post data',error);
      res.status(500).send('server error');
    }
});

module.exports=router;