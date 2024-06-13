const router=require("express").Router();
const Razorpay=require("razorpay");
const crypto=require("crypto");
const paymentModel=require("../models/payment")
// const { error } = require("console");
// const { default: orders } = require("razorpay/dist/types/orders");

router.post("/orders", async(req, res)=>{
    console.log(req.body);
        const {amount, productitems, name, address, mobile,  pincode }= req.body;
        const mypayment= new paymentModel({
            name:name,
            address:address,
            mobile:mobile,
            pin:pincode,
            productitems:productitems,
            totalproductprice:amount,
            dop:new Date()
        })
      mypayment.save();
    try {
        
        const instance= new Razorpay({
            key_id:process.env.KEY_ID,
            key_secret:process.env.KEY_SECRET,
        });

        const options={
        amount:req.body.amount*100,
        currency:"INR",
        receipt:crypto.randomBytes(10).toString("hex")
        }
        instance.orders.create(options, (error, order)=>{
            if(error){
                console.log(error);
                return res.status(500).json({message:"something went wrong"});
        }
    res.status(200).json({data:order})
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"})
    }
});

router.post("/verify",async(req,res) => {
    try {
        const {
            razorpay_orderID,
            razorpay_paymentID,
            razorpay_signature } = req.body;
        const sign = razorpay_orderID + "|" + razorpay_paymentID;
        const resultSign = crypto
        .createHmac("sha256",process.env.KEY_SECRET)
        .update(sign.toString())
        .digest("hex");

        if (razorpay_signature == resultSign){
            return res.status(200).json({message:"Payment verified successfully"});
        }

    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }
});

router.get("/paymentHistory", async(req, res)=>{
    const resData=await paymentModel.find();
    res.status(200).json({product:resData});
});



module.exports=router;