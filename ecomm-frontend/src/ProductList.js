import React, {useState , useEffect} from 'react';
import Header from './Header';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function ProductList() {
    const [ data , setData] = useState([]);

    useEffect( () => {
      getData()
     
    },[]);
    console.log("Data", data);

    async function deleteProduct(id){
        // console.log(id)

       let result = await fetch('http://localhost:8000/api/delete/'+ id,{
            method:'DELETE'
        });

        result = result.json();
        console.log(result)
        getData();
        
    }

    async function getData() {
        let result = await fetch('http://localhost:8000/api/list');
      result =  await result.json(); 
      setData(result);
        
    }
    return (
        <>
        <Header/>
        <div className="col-sm-10 offset-sm-1 mt-4">
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Image</th>
      <th>Description</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((item) => (
            <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td><img style={{ width:'140px'}} src= {"http://localhost:8000/" +item.file_path}/></td>
      <td>{item.description}</td>
     <td>Rs. {item.price}</td>
     <td>
       <button onClick={() => deleteProduct(item.id)} className="btn btn-danger m-2">Delete</button>

     
     <Link to={"update/"+ item.id}>
       <button className="btn btn-success">Update</button>
       </Link>
       </td>
    </tr>
    ))
    }
    
  </tbody>
</Table>
        </div>
        </>
    )
}
