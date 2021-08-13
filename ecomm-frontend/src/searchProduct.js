import React,{useState} from 'react';
import Header from './Header';
import { Table } from 'react-bootstrap';

const SearchProduct = () => {

    const [data , setData] = useState([]);

    async function search(key) {
        if(key.length>0){
        let result = await fetch('http://localhost:8000/api/search/'+ key);
        result = await result.json();
        console.log(result);
        setData(result);
        }
        
    }

    
    return(
        <div>
            <Header/>
        
        <div className="col-sm-6 offset-sm-3 mt-4">
       <h1>Search</h1>

        <input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="search product"/>
        </div>
        <div className="col-sm-10 offset-sm-1 mt-4">
      {data.length > 0 ?      
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
     
    </tr>
    ))
    }
    
  </tbody>
</Table> : <h2>Not found</h2> }
        </div>
        </div>
    );
}

export default SearchProduct;