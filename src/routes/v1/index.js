const express=require("express");
const router=express.Router();
const airplaneRoutes=require("./airplane-route")


router.use('/airplane',airplaneRoutes);

module.exports=router;