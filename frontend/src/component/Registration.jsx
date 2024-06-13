import { useState } from "react";

import axios from "axios";

const Registration=()=>{

    const [input, setInput]= useState({});

const  handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
}


const handleSubmit=()=>{
    let url="http://localhost:8000/user/userregistration";
    axios.post(url, input).then((res)=>{
        
        alert(res.data.message);
    })
}



    return(
        <>
       <div style={{width:"400px", margin:"auto", outline:"none"}}>
        <br/> <br/> <br/>
          <h1 aling="center"> User Registration Form</h1>
         <label for="fname">User Name </label>
         <input type="text" id="fname" name="name"  value={input.name} onChange={handleInput} />
         <label for="fname">User ID </label>
         <input type="text" id="fname" name="userid" value={input.userid} onChange={handleInput} />
         <label for="fname">Enter Email </label>
         <input type="text" id="fname" name="email" value={input.email} onChange={handleInput} />
         <label for="lname">Password</label>
         <input type="password" id="lname" name="password" value={input.password} onChange={handleInput} />
         <label for="lname">Re Enter Password</label>
         <input type="password" id="lname" name="repassword" value={input.repassword} onChange={handleInput} />
         <button onClick={handleSubmit}>Register now</button>
       
      <br/> <br/>
</div>
   

        </>
    )
}

export default Registration;