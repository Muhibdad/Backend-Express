const dotenv=require('dotenv');
dotenv.config({path: './config.env'});
const app=require('./app');


// console.log(process.env);
port=process.env.port ||3000;
app.listen(port,()=>{
    console.log("App running on port 3000");
})