const mongoose=require('mongoose');

const tourSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Tour must have a name"],
        unique:true
    },
    rating:{
        type:Number,
        default:4.6
    },
    price:{
        type:Number,
        required:[true,"Tour must have a price"]
    }
})

const Tour=mongoose.model('Tour',tourSchema);


// const TourNew=mongoose.model('Tour',tourSchema);

// const testTour=new Tour({
//     name:"The forest Hiker",
//     rating:4.3,
//     price:349
// });
// testTour.save()
// .then(doc=>console.log(doc))
// .catch(err=>console.log("ERROR",err));

module.exports=Tour;