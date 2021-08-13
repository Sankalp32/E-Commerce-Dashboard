import React,{useState} from 'react';
import Header from './Header';

const AddProduct = () => {

    const [name , setName] = useState("");
    const [price , setPrice] = useState("");
    const [file , setFile] = useState("");
    const [description , setDescription] = useState("");

    async function addProduct() {
        // console.log(name , file , price , description);

        const formData = new FormData();
        formData.append("file", file)
        formData.append("name", name)
        formData.append("price", price)
        formData.append("description", description)

        let result = await fetch('http://localhost:8000/api/addProduct',{
            method:'POST',
            body:formData
        });
        alert("Data has been saved successfully");
        
    }
    return(
        <div>
            <Header/>
        
        <div className="col-sm-6 offset-sm-3 mt-4">
        
        <input type="text" className="form-control mt-2"onChange={(e) =>setName(e.target.value)} placeholder="Name"/>
        <input type="file" className="form-control mt-2"onChange={(e) =>setFile(e.target.files[0])} placeholder="file"/>
        <input type="text" className="form-control mt-2"onChange={(e) =>setPrice(e.target.value)} placeholder="price"/>
        <input type="text" className="form-control mt-2" onChange={(e) =>setDescription(e.target.value)} placeholder="description"/>
        <button className="btn btn-primary mt-4" onClick={addProduct}>Add Product</button>
      
        </div>
        </div>
    );
}

export default AddProduct;