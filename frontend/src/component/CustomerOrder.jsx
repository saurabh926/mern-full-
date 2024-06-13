
import { useState, useEffect } from "react";

import axios from "axios";

const CustomerOrder=()=>{
    const [mydata, setMydata]= useState([]);
    const [orderStatus, setOrederStatus]= useState("true");



    const loadData=()=>{
        let url="http://localhost:8000/products/customerorder";

        axios.get(url).then((res)=>{
            console.log(res.data);
            setMydata(res.data.response);
        })
    }

    useEffect(()=>{
        loadData();
    }, [])


  const orderPlaced=(id)=>{
      let url="http://localhost:8000/products/statuschange"; 
      axios.post(url, {id:id}).then((res)=>{

        console.log(res.data);
        loadData();
      });
  
  }

    const myAns= mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.name} </td>
                <td> {key.address} </td>
                <td> {key.mobile} </td>
                <td> {key.pincode} </td>
                <td> {key.productitems} </td>
                <td> {key.totalproductprice} </td>
                <td> {key.dop} </td>
                <td> {key.status} {key._id}</td>
                <td> 

              { key.status? <button onClick={()=>{orderPlaced(key._id)}}>  Order Placed </button> :   <button style={{backgroundColor:"red"}}> Shipped for Customer  </button>    }
                                  
                 </td>
              </tr>
            
            </>
        )
    })


    return(
        <>
          <h1> Customer Order Page</h1>
          <table align="center" width="90%" id="customers">
            <tr>
                <th> Customer Name  </th>
                <th> Address  </th>
                <th> Mobile  </th>
                <th> Pin Code  </th>
                <th> Product Items  </th>
                <th> Total Price  </th>
                <th>Date of Purchasing  </th>
                <th> </th>
                <th> </th>
            </tr>
            { myAns}
          </table>
        
        </>
    )
}

export default CustomerOrder;