


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./component/Home";
import Men from "./component/Men";
import AdminUser from "./component/AdminUser";
import DashBoard from "./component/DashBoard";
import UploadProducts from "./component/UploadProducts";
import Shop from "./component/Shop";
import CartPage from "./component/CartPage";
import CheckOut from "./component/CheckOut";
import CustomerOrder from "./component/CustomerOrder";
import WoMen from "./component/Women";
import BabyCollection from "./component/BabyCollection";
import Contact from "./component/Contact";
import UserLogin from "./component/UserLogin";
import Registration from "./component/Registration";
const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="men" element={<Men/>} />
            <Route path="women" element={<WoMen/>} />
            <Route path="babycollection" element={<BabyCollection/>} />
            <Route path="adminuser" element={<AdminUser/>} />
            <Route path="shop" element={<Shop/>} />
            <Route path="cartpage" element={<CartPage/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
            <Route path="contact" element={<Contact/>} />
            <Route path="userlogin" element={<UserLogin/>} />
            <Route path="registration" element={<Registration/>} />
          </Route>

         <Route path="admindashboard" element={<DashBoard/>}  >
            <Route path="uploadproduct" element={<UploadProducts/>}/>
            <Route path="customerorder" element={<CustomerOrder/>} />
            
         </Route>

        </Routes>
      
      </BrowserRouter>
  

    </>
  )
}

export default  App;