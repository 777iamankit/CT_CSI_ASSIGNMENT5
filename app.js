const express=require('express');
const mongoose=require('mongoose');
const app=express();
const url='mongodb://127.0.0.1:27017/ASSIGNMENT5';
app.use(express.json());

mongoose.connect(url);
const con = mongoose.connection;
con.on('open',()=>{
  console.log('connected...');
})

const readRouter=require('./routes/read.js');
app.use('/read',readRouter);

const createRouter=require('./routes/create.js');
app.use('/create',createRouter);

const updateRouter=require('./routes/update.js');
app.use('/update',updateRouter);

const deleteRouter=require('./routes/delete.js');
app.use('/delete',deleteRouter);

app.listen(3000,()=>{
  console.log('server is running on the port 3000');
});