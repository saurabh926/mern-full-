


const productModel= require("../models/productModel");     
const paymentModel= require("../models/payment");


const productSave=async(req, res)=>{    
     let {pname, pbrand, description, category, subcategory, tags, price, imgpath}= req.body;
     const Product= await productModel.create({
        name:pname,
        brand:pbrand,
        description:description, 
        category:category,
        subcategory:subcategory,
        tags:tags,
        price: price,
        imagepath:imgpath
               
     })

     res.send("Data save!!!");

}


const fetureProductDisplay=async(req, res)=>{
 
    const response= await productModel.find({tags:"feature"}).sort({_id:-1}).limit(4);

   res.status(200).json({product:response});
    
}

const  topsellingProductDisplay=async(req, res)=>{
 
    const response= await productModel.find({tags:"topselling"}).sort({_id:-1}).limit(4);

   res.status(200).json({product:response});
    
}

const   trendingProductDisplay=async(req, res)=>{
    const response= await productModel.find({tags:"trending"}).sort({_id:-1}).limit(4);
   res.status(200).json({product:response});    
}

const allProductDisplay=async(req, res)=>{
    const response= await productModel.find();
    res.status(200).json({product:response});
}


const showCustomerProduct=async(req, res)=>{
 
      const response = await paymentModel.find();
      res.status(200).json({response});
    

}

const changeOrderStatus=async(req, res)=>{
    const  user_id= req.body.id; 
    const response= await paymentModel.findByIdAndUpdate(user_id, { status:false });
    res.status(200).json({response});


}


const  showMenProduct=async(req, res)=>{
    const response= await productModel.find({category:"Male"});
    res.status(200).json({product:response});
}

const  showWoMenProduct=async(req, res)=>{
    const response= await productModel.find({category:"Female"});
    res.status(200).json({product:response});
}

const  showBabyProduct=async(req, res)=>{
    const response= await productModel.find({category:"Kids"});
    res.status(200).json({product:response});
}

module.exports={
    productSave,
    fetureProductDisplay,
    topsellingProductDisplay,
    trendingProductDisplay,
    allProductDisplay,
    showCustomerProduct,
    changeOrderStatus,
    showMenProduct,
    showWoMenProduct,
    showBabyProduct
}