import React , { useEffect } from 'react';
import { useHistory} from 'react-router-dom';


const Protected = ( props) =>{
   
    let Component = props.component
     const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            history.push('/login')
            
        }

    },[]);


    return(
        <div>
            <Component/>
           
        </div>
    );
}

export default Protected;