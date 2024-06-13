const express= require("express");
const router= express.Router();

const userController= require("../controllers/userController");

router.post("/userregistration", userController.userRegistrationSave);

router.post("/usercheck", userController.userCheck);

module.exports=router;