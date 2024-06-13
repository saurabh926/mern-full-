import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./Banner";
import { addtoCart } from "../productSlice";
import { useSelector, useDispatch } from "react-redux";

const Home=()=>{

    const [featureProduct, setFeatureProduct]= useState([]);
    const [topsellingProduct, setTopSellingProduct]= useState([]);
    const [trendingProduct, settrendingProduct]= useState([]);

    const dispatch= useDispatch();
    const myData= useSelector((state)=>state.cartProduct.cart );
    console.log(myData);


    const loadFetureProduct=()=>{
        let url="http://localhost:8000/products/featureproduct";
        axios.get(url).then((res)=>{
            console.log(res.data.product);
            setFeatureProduct(res.data.product);
        });
    }

    const loadTopSellingProduct=()=>{
        let url="http://localhost:8000/products/topsellingroduct";
        axios.get(url).then((res)=>{
            console.log(res.data.product);
            setTopSellingProduct(res.data.product);
        });
    }

    const loadtrendingProduct=()=>{
        let url="http://localhost:8000/products/trendingproduct";
        axios.get(url).then((res)=>{
            console.log(res.data.product);
            settrendingProduct(res.data.product);
        });
    }


    useEffect(()=>{
        loadFetureProduct();
        loadTopSellingProduct();
        loadtrendingProduct();

    }, []);




       const fetaureData= featureProduct.map((key)=>{
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



       const topSellingData= topsellingProduct.map((key)=>{
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


    const trendingData= trendingProduct.map((key)=>{
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
         <div id="sliderImg">
        
        <Banner/>


      </div>

      <div id="featureProduct">
            <h1> Featured Products </h1>   
            <div id="fetaureProList">
                
                 {fetaureData}
               
                
            </div>


      </div>

      <div id="featureProduct">
            <h1>  TOP Selling Products </h1>
            <div id="fetaureProList">
                
                   {topSellingData}
            </div>


      </div>

      <div id="featureProduct">
            <h1> Trending Products </h1>
            <div id="fetaureProList">
                {trendingData} 
            </div>
      </div>       
        </>
    )
}
export default Home;