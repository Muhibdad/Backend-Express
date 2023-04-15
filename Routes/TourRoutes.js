const express=require('express');

const tourController=require('./../Controllers/TourController');
const router=express.Router();
// const tourRouter=express.Router();

router.param('id',tourController.checkID);



router.route('/')
.get(tourController.getAllTours)
.post(tourController.checkBody,tourController.postTour);
// app.get('/api/v1/tours',getAllTours);
// app.post('/api/v1/tours',postTour);
router.route('/:id').get(tourController.getTour)
.patch(tourController.UpdateTour).delete(tourController.deleteTour); //Not yet implemented


// app.route('/api/v1/tours')
// .get(getAllTours)
// .post(postTour);
// // app.get('/api/v1/tours',getAllTours);
// // app.post('/api/v1/tours',postTour);

// app.route('/api.v1/tours/:id').get(getTour)
// .patch(UpdateTour).delete(deleteTour); //Not yet implemented




module.exports=router;