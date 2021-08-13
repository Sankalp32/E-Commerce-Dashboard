import React , { useEffect , useState } from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';


const UpdateProduct = (props) => {
    console.log(props);
    const[data , setData ] = useState([]);

    const [name , setName] = useState("");
    const [price , setPrice] = useState("");
    const [file , setFile] = useState("");
    const [description , setDescription] = useState("");

    useEffect( async () =>{
        let result = await fetch('http://localhost:8000/api/product/' + props.match.params.id);
        result = await result.json();
        setData(result)
        setName(result.name)
        setPrice(result.price)
        setDescription(result.description)
        setFile(result.file)

    }, []);

    async function editProduct(id) {

        // alert(id)
        const formData = new FormData();
        formData.append("file", file)
        formData.append("name", name)
        formData.append("price", price)
        formData.append("description", description)

        let result = await fetch('http://localhost:8000/api/updateproduct/'+id +'?_method=PUT',{
            method:'POST',
            body:formData
        });
        alert("Data has been updated successfully");

    }
    return(
        <>
        <Header/>
        <div>
            <h1>Update Product Page</h1>
            <div>
            <input type="text" onChange={(e) =>setName(e.target.value)}  defaultValue={data.name} className="m-2"/>
            <br/>
            <input type="text" onChange={(e) =>setPrice(e.target.value)}  defaultValue={data.price} className="m-2"/>
            <br/>
            <input type="text"  onChange={(e) =>setDescription(e.target.value)} defaultValue={data.description} className="m-2"/>
            <br/>
            <input type="file" onChange={(e) =>setFile(e.target.files[0])}  defaultValue={data.file_path} className="m-2"/>
            <img style={{width:50}} src={"http://localhost:8000/" + data.file_path}/>
            <br/>
            <button className="btn btn-success"
            onClick={() => editProduct(data.id)}
            >
                Update
            </button>
            </div>
        </div>
        </>
    );
}

export default withRouter(UpdateProduct);