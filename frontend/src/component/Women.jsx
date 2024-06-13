import { useState, useEffect } from "react";
import axios from "axios";
import { addtoCart } from "../productSlice";
import { useSelector, useDispatch } from "react-redux";


const WoMen=()=>{
    const [myproduct, setMyproduct]= useState([]);
    const dispatch= useDispatch();
    const myData= useSelector((state)=>state.cartProduct.cart );
    console.log(myData);
      const loadProduct=()=>{
         let url="http://localhost:8000/products/womenproduct";
         axios.get(url).then((res)=>{
           
             setMyproduct(res.data.product);
         });
     }
   useEffect(()=>{
     loadProduct();
   }, [])
 
 
 
   const prodcutData= myproduct.map((key)=>{
     return(
      <>
          <div id="pro1">
              <img src={key.imagepath} style={{width:"250px", height:"300px"}} />
              <br/>
              {key.name}
              <br/>
              Brand: {key.brand}
              <br/>
              Price :  {key.price} /-
              <br/>
              <button class="button"  
               onClick={
             ()=>{dispatch(addtoCart({id:key._id, name:key.name, brand:key.brand, desc:key.description, 
             categ:key.category, price:key.price, image:key.imagepath, qnty:1}))}}> Add to Cart </button>
          </div>
      
      </>
     )
 })
     return(
         <>
           
           <div id="featureProduct">
           <h1 align="center" > The women's Products</h1> 
             <div id="fetaureProList">
                  {prodcutData}
             </div>
       </div>
         </>
     )
 }
 export default WoMen;