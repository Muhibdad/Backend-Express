// const fs=require('fs');
// const tours=JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));
const Tour=require('./../Models/tourModels'); 

// exports.checkID=(req,res,next,val)=>{
//     console.log(`Tour id is ${val}`);
//     // if(req.params.id*1>tours.length){
//     //    return res.status(404).json({
//     //         status:"fail",
//     //         message:"Invalid ID"
//     //     })
//     // }
//     next();
// }

// exports.checkBody=(req,res,next)=>{
//    if(req.body.name || req.body.price){
//     res.status(404).json({
//         status:'Failed',
//         message:'Missing name or Price'
//     })
//    }
//    next();
//  }



exports.getAllTours= async (req,res)=>{
    try{
        let tours = await Tour.find();     
        res.json({
            status:'success',
            requestedAt: req.requestTime,
            result:tours.length,
            data: {
               tours
            }
        })
        }
        catch (err){
            res.status(404).json({
                status:'fail',
                message:err
            })
        }
     }
    

exports.postTour= async (req,res)=>{
try{
     // old way
    // const newTour=new Tour({})
    // newTour.save();
    // new wat
    const newTour=await Tour.create(req.body);
    res.status(201).json({
        status:'success',
        data:{
            tour:newTour
        }
    })
}
catch(err){
    res.status(404).json({
        status:'fail',
        message: 'Invalid data sent'
    })
}
   
    
    
    // const newId=tours[tours.length-1].id+1;
    // const newTour=Object.assign({id:newId},req.body);
    // tours.push(newTour);
    // fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours), err=>{
    
    // })
};

exports.getTour= async (req,res)=>{

    try{
        let tour =await Tour.findById(req.params.id);
        //  const tour =Tour.findOne({_id:req.params.id});
        res.status(200).json({
            status:'success',
            data:{
                tour
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:'success',
            message:err
        })
    }
    // let id=req.params.id*1;
    // let tour=tours.find((el)=>{
    //     return el.id==id;
    // })
    // res.json({
    //     status:'success',
    //     data: {
    //         tour
    //     }
    // })
}

exports.createTour=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'this route is not yet defined'
    })
};
exports.UpdateTour=async (req,res)=>{ //not working for some reason
    try{
        const tour=await Tour.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            status:'success',
            dat:"New data",
            data:{
                tour
            }
        })
        console.log("Done");
    }
    catch(err){
        res.status(404).json({
            status:'error',
            message:err
        })
    }
};
exports.deleteTour=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'this route is not yet defined'
    })
};
