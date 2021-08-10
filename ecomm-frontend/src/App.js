import logo from './logo.svg';
import './App.css';
// import {} from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected  from './Protected';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
     <Route  path ="/login">
       <Login />
     </Route>
     <Route path ="/register">
       <Register  />
     </Route>
     <Route path ="/add">
       <Protected component={AddProduct}/>
     </Route>
     <Route  path ="/update">
      <Protected component={UpdateProduct}/>
     </Route>
     </BrowserRouter>

    </div>
  );
}

export default App;
