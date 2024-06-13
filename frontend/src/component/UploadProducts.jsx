import { useState } from "react";
import axios from "axios";


const UploadProducts=()=>{
  const [input, setInput] = useState({});
  const [selectedFile, setSelectedFile]= useState(null);
  const [imgUrl, setImgUrl]= useState("");

  const handleFileChange=(e)=>
    {
     setSelectedFile(e.target.files[0]);
    }



  const handleInput=(e)=>{

      let name=e.target.name;
      let value=e.target.value;

      setInput(values=>({...values, [name]:value}));
      console.log(input);
  }


 const handleSubmit=async(e)=>{
  e.preventDefault();
  
  try {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'kgua6zgp');
    formData.append('cloud_name', 'dqaorfeyd');
    const response = await axios.post('https://api.cloudinary.com/v1_1/dqaorfeyd/image/upload', formData);
    console.log('Image uploaded:', response.data);
    console.log('Image uploaded:', response.data.url);
    setImgUrl(response.data.url);
    let imgpath=response.data.url;
    let input2={...input, "imgpath":imgpath };
    console.log(input2);
    const res1 = await axios.post('http://localhost:8000/products/productsave',input2);

    if(res1)
      {
        alert("Data successfully Uploaded!!!");
      }
  }
  catch (error) {
    console.error('Error uploading image:', error);
  }






 }


    return(
        <>
          <h1> Upload Products</h1>

<div style={{width:"500px"}}>
  <form>
    <label for="fname">Product  Name</label>
    <input type="text" id="fname" name="pname"  value={input.pname}    onChange={handleInput}  />
    <label for="lname">Product Brand</label>
    <input type="text" id="lname" name="pbrand"  value={input.pbrand}    onChange={handleInput}  />

    <label for="lname">Description</label>
    <input type="text" id="lname" name="description"  value={input.description}    onChange={handleInput}  /> 


    <label for="country">Category</label>
    <select id="country" name="category" value={input.category}    onChange={handleInput}  >
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Kids">Kids</option>
    </select>

    <label for="country">Sub Category</label>
    <select id="country" name="subcategory" value={input.subcategory}    onChange={handleInput}  >
      <option value="Shirt">Shirt</option>
      <option value="TShirt">TShirt</option>
      <option value="Jeans">Jeans</option>
      <option value="Kurta">Kurta</option>
      <option value="Lowers">Lowers</option>
      <option value="Pajama">Pajama</option>
      <option value="Trouser">Trouser</option>
    </select>
    <label for="country">Select Tags</label>
    <select id="country" name="tags" value={input.tags}    onChange={handleInput}  >
    <option value="other">Other Products</option>
      <option value="feature">feature Products</option>
      <option value="topselling">Top Selling Products</option>
      <option value="trending">Trending Products</option>
    </select>
  
    <label for="lname">Enter Price</label>
    <input type="text" id="lname" name="price" value={input.price}    onChange={handleInput}  /> 
    <label for="lname"> Upload image</label>
    <input type="file" id="lname" name="file"  onChange={handleFileChange} />

    <input type="submit" value="Submit"  onClick={handleSubmit}/>
  </form>
</div>

        
        </>
    )
}

export default UploadProducts;