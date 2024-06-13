import { useSelector, useDispatch } from 'react-redux';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import  {useNavigate} from "react-router-dom";
import {increaseQuantity, decreaseQuantity, removeItem} from "../productSlice";
const CartPage = () => {
    const cartData=useSelector((state)=>state.cartProduct.cart);
    const dispatch= useDispatch();
   
    const navigate=useNavigate();

   console.log("Welcome: ")
   console.log(cartData);
   const qtyIncrease=(id)=>{
    dispatch(increaseQuantity(id))
   }
   const qtyDecrease=(id)=>{    
    dispatch(decreaseQuantity(id))
   }
   const itemRemove=(id)=>{
      dispatch(removeItem(id))
   }

   const checkOut=()=>{
    navigate("/checkout");
   }




   let totalAmount=0;
    const myData=cartData.map((key)=>{
      totalAmount+=key.price*key.qnty;
         return(
            <>
             <tr>
                    <td> <img src={key.image} width="70" height="50" /> </td>
                    <td> {key.name} </td>
                    <td> {key.brand} </td>
                    <td> {key.desc} </td>
                    <td>{key.categ} </td>
                    <td style={{color:"#04AA6D", fontSize:"20px"}}>
                   
                   
                   <a href='#'>
                    <FaMinusCircle  onClick={()=>{qtyDecrease(key.id)}}  />
                    </a>      
                      <span style={{paddingLeft:"10px", paddingRight:"10px", fontWeight:"bold"}}>
                      {key.qnty}
                      </span>
                      <a href='#'>
                        <FaPlusCircle  onClick={()=>{qtyIncrease(key.id)}} />
                       </a> 
                        </td>
                    <td> {key.price} </td>
                    <td> {key.price*key.qnty}</td>
                    <td>
                    
                       <button onClick={()=>{itemRemove(key.id)}}>Remove</button>
                       
                     </td>
               </tr>     
            
            </>
         )
    })


  return (
      <>
             <h1 align="center"> My Cart Items</h1>  

               <table align='center' width="90%"  id="customers"> 
                <tr>
                    <th> </th>
                    <th> Name </th>
                    <th> Brand </th>
                    <th> Description </th>
                    <th> Category </th>
                    <th> Quantity</th>
                    <th> Rate </th>
                    <th> Total Price </th>
                    <th>  </th>
                </tr>
                {myData}
                <tr style={{fontSize:"25px"}}>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th colSpan="3" align='right'> Total Net Amount : </th>
                  <th> {totalAmount} </th>
                </tr>
                <tr>
                   <td colspan="8"></td>
                   <td> 

                     <button onClick={checkOut}>  Check Out </button>

                   </td>
                </tr>
               </table>
      </>
  )
}
export default CartPage;