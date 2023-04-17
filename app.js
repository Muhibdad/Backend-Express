const express =require("express");
const app=express();
const morgan=require('morgan');
// const tourRouter = require('./Routes/TourRoutes');

// if(process.env.NODE_ENV==='development'){
// app.use(morgan('dev'));
// }  //Not using this

const tourRouter=require('./Routes/TourRoutes');
const userRouter=require('./Routes/UserRoutes');

//1.MIDDLEWARES


app.use(express.json()); //Middleware

app.use(express.static(`${__dirname}/public/`));

app.use((req,res,next)=>{ //Middleware
    console.log("hello from the middleware");
    next();
})

app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString();
    next();
})


app.use('/api/v1/users',userRouter);
app.use('/api/v1/tours',tourRouter);


module.exports=app;