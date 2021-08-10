import { useState , useEffect } from "react";
import { useHistory } from 'react-router-dom'
import Header from "./Header";


const Register = () => {

    useEffect(() => {
        if (localStorage.getItem('user')) {
            history.push('/add')
            
        }

    },[]);

    const [ name , setName ] = useState("");
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const history = useHistory();

    async function signUp(){
        let item = {name , email , password}
        console.log(item)
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(item),
        };

        // fetch("http://localhost:8000/api/register",requestOptions)
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .then(async response =>{
        //     window.localStorage.setItem("user",response.json());
        //     console.log(localStorage.setItem("user",response.json()));
        //     history.push("/add")
        // });

        let result = await fetch( "http://localhost:8000/api/register", requestOptions);
        result = await result.json();
        console.log("result", result);
        localStorage.setItem("user",JSON.stringify(result));
        history.push("/add")
    }
    return(
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            
            <h1>Sign Up</h1>
            <input type="text" placeholder="Name"  value={name} onChange = {(e) => setName(e.target.value)} className="form-control"/>
            <br/>
            <input type="text" placeholder="Email" value={email} onChange = {(e) => setEmail(e.target.value)}  className="form-control"/>
            <br/>
            <input type="password" placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)}  className="form-control"/>
            <br/>
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
        </>
    );
}

export default Register;