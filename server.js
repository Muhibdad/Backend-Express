const dotenv=require('dotenv');
dotenv.config({path: './config.env'});
const app=require('./app');
const mongoose=require('mongoose');

const DB=process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose
// .connect(process.env.DATABASE_LOCAL,{ //for local connection
.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology: true
}).then(()=>{
    // console.log(con.connections);s
    console.log("DB Connection successful");
})


// console.log(process.env);
port=process.env.port ||3000;
app.listen(port,()=>{
    console.log("App running on port",port);
})