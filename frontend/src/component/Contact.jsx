
const Contact=()=>{

    return(
        <>
         <br/> <br/>
          <h1 align="center"> Contact Us ! Feel Free Submit this form to conatct us </h1>
  
          <div style={{width:"500px", margin:"auto"}}>
  <form action="/action_page.php">
    <label for="fname">Enter Your Name</label>
    <input type="text" id="fname" name="firstname"  />

    <label for="lname">Enter Your Email</label>
    <input type="text" id="lname" name="lastname"  />

    <label for="country">Enter Comment </label>
    <br/>
      <textarea  rows="6" cols="45" />
  
    <input type="submit" value="Submit" />
  </form>
</div>

        
        </>
    )

}

export default Contact;