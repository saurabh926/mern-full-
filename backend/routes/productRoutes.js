const express= require("express");
const router= express.Router();

const productController= require("../controllers/productController");


router.post("/productsave", productController.productSave);

router.get("/featureproduct", productController.fetureProductDisplay);

router.get("/topsellingroduct", productController.topsellingProductDisplay);

router.get("/trendingproduct", productController.trendingProductDisplay);

router.get("/totalproduct", productController.allProductDisplay);

router.get("/customerorder", productController.showCustomerProduct);

router.post("/statuschange", productController.changeOrderStatus);

router.get("/menproduct", productController.showMenProduct);

router.get("/womenproduct", productController.showWoMenProduct);

router.get("/babycollection", productController.showBabyProduct);

module.exports=router;


