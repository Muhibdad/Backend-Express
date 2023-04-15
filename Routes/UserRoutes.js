
const express=require('express');

const userController=require('./../Controllers/userControllers')

const router=express.Router();

router.route('/').get(userController.getAllUsers).post(userController.createUser);
router.route('/:id').get(userController.getUser)
.patch(userController.updateUser).delete(userController.deleteUser); //Not yet implemented


// app.route('api/v1/users').get(getAllUsers).post(createUser);
// app.route('/api.v1/users/:id').get(getUser)
// .patch(updateUser).delete(deleteUser); //Not yet implemented


module.exports=router;