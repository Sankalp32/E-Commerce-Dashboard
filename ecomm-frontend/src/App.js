import logo from './logo.svg';
import './App.css';
// import {} from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected  from './Protected';
import ProductList from './ProductList';
import searchProduct from './searchProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>

      
    
     <Route  path ="/login">
       <Login />
     </Route>
     <Route path ="/register">
       <Register  />
     </Route>
     <Route path ="/add">
       <Protected component={AddProduct}/>
     </Route>
     <Route  path ="/update/:id">
      <Protected component={UpdateProduct}/>
     </Route>
     <Route  path ="/search">
      <Protected component={searchProduct}/>
     </Route>

     <Route path="/">
        <ProductList/>
      </Route>

     </Switch>
     </BrowserRouter>

    </div>
  );
}

export default App;
