const fs=require('fs');
const tours=JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

exports.checkID=(req,res,next,val)=>{
    console.log(`Tour id is ${val}`);
    if(req.params.id*1>tours.length){
       return res.status(404).json({
            status:"fail",
            message:"Invalid ID"
        })
    }
    next();
}

exports.checkBody=(req,res,next)=>{
   if(req.body.name || req.body.price){
    res.status(404).json({
        status:'Failed',
        message:'Missing name or Price'
    })
   }
   next();
 }

exports.getAllTours=(req,res)=>{
    console.log(req.requestTime)
    res.json({
        status:'success',
        requestedAt: req.requestTime,
        result:tours.length,
        data: {
            tours 
        }
    })
};
exports.postTour=(req,res)=>{
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

exports.getTour=((req,res)=>{
    let id=req.params.id*1;
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

exports.createTour=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'this route is not yet defined'
    })
};
exports.UpdateTour=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'this route is not yet defined'
    })
};
exports.deleteTour=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'this route is not yet defined'
    })
};
