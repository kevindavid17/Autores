import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "reactstrap";

const Form = (props) => {
    const {createFromDom} = props;
    const[name, setName] = useState("");
    const navigate = useNavigate();
    
    //variables para errores
    const [nameError, setNameError] = useState("");
    const [statusCreacion, setStatusCreation] = useState("");

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/autor/new', {name, nameError,statusCreacion})
        .then(res => {
            console.log('Petición exitosa:', res);
            createFromDom(res.data.insertedAutor); 
            setNameError("");
            setStatusCreation("Se ha registrado el autor correctamente");
            navigate('/');
        })
        .catch(err => {
            //console.log('Petición fallida:', err));
            const errorResponse = err.response.data.errors;

            if(Object.keys(errorResponse).includes('name')){
                setNameError(errorResponse['name'].message);
                setStatusCreation("");
            }
            else{
                setNameError("");
            }    
        })    

    }
    return (
        <div className='general'>
            <h1>Favorite Authors</h1>
            <Link to={'/'} className='link'>Home</Link>
            <p className='h3Description'>Add a new author: </p>
            <form className='frmPeticion' onSubmit={onSubmitHandler}>
                <div className='campo'>
                    <label>Name: </label>
                    <br/>
                    <input type="text" className="txtName" onChange={(e) => setName(e.target.value)} value={name}></input>
                </div>
                <p className='txtError'>{nameError}</p>
                <div className='btnseccion'>
                    <Button color="primary" type="button" className='btn' onClick={(e) => navigate('/')}>Cancel</Button>
                    <Button color="primary" type="submit" className='btn'>Submit</Button>
                </div>
            </form>
                
        </div>
        
    );
}
export default Form;