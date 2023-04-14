const fs=require('fs');
const express =require("express");
const app=express();

// app.get('/',(req,res)=>{
//     res.status(200).json({message:"Hello from serverside",app:"natours"});  
// })
app.use(express.json());
const tours=JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

const getAllTours=(req,res)=>{
    res.json({
        status:'success',
        result:tours.length,
        data: {
            tours 
        }
    })
};
const postTour=(req,res)=>{
    const newId=tours[tours.length-1].id+1;
    const newTour=Object.assign({id:newId},req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours), err=>{
    res.status(201).json({
        status:'success',
        data:{
            tour:newTour
        }
    })
    })
};

// app.get('/api/v1/tours',getAllTours);
// app.post('/api/v1/tours',postTour);

app.route('/api/v1/tours').get(getAllTours).post(postTour);

app.get('/api/v1/tours/:id',(req,res)=>{
    const id=req.params.id*1;
    if(id>tours.length){
        res.status(404).json({
            status:"fail",
            message:"Invalid ID"
        })
    }
    let tour=tours.find((el)=>{
        return el.id==id;
    })
    res.json({
        status:'success',
        data: {
            tour
        }
    })
})


app.listen(3000,()=>{
    console.log("App running on port 3000");
})