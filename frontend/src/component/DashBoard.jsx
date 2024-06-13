import { Link, Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";
const userName=window.localStorage.getItem("userName");
const DashBoard=()=>{
     const navigate= useNavigate();
     const adminLogout=()=>{
          window.localStorage.clear();
          navigate("/adminuser")
     }
     return(
        <> 
          <div id="AdminDashboard">
              <div id="dashbaordTop">
              <h1 style={{color:"white"}}> Admin DashBoard</h1>
               </div> 
               <div id="dashbaordTop1">
                     <h2>  Welcome {userName}!     
                      <a href="#" onClick={adminLogout}> Logout</a>         
                      </h2>
               </div> 
          </div>

          <div id="admindata">
               <div id="adminleftmenu">
                  
                  <Link to="uploadproduct" className="adminmenu">
                  Upload Products
                  </Link>
                  <Link to="customerorder" className="adminmenu">
                     Customer Oreders
                  </Link>
                  <Link to="uploadproduct" className="adminmenu">
                  Upload Products
                  </Link>
                  

               </div>
               <div id="adminrightdata">
                   
                   
                        <Outlet/>


               </div>

          </div>

        
        </>
    )
}

export default DashBoard;