import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "reactstrap";

const Update = () =>{
    const {id} = useParams();
    const [name, setName] = useState('');
    const [withoutId, setWithoutId] = useState(true);
    const navigate = useNavigate();
    const [updateError, setUpdateError] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:8000/api/autor/'+id)
        .then(res => {
            setName(res.data.name);
            console.log(id);
        })
        .catch(err => {
            console.log('Petición fallida:', err);
            setWithoutId(false);
        });

    }, [id]);

    const handlerUpdateUser = e => {
        //Función para realizar una petición PUT y actualizar un producto
        e.preventDefault(); 
        axios.put('http://localhost:8000/api/autor/'+ id+'/edit', {name})
            .then(res => {
                //console.log(res)
                setUpdateError(res.data.msg);
                //navigate('/')

            })
            .catch(res => {
                setUpdateError(res.data.msg);
                //console.log(res.data.msg)
            });
    }

    return (
        <div>{
            withoutId ?
            <div className='general'>
                <h1>Favorite Authors</h1>
                <Link to={'/'} className='link'>Home</Link>
                <p className='h3Description'>Edit this author</p>
                <form className='frmPeticion' onSubmit={handlerUpdateUser}>
                    <div className='campo'>
                        <label>Name: </label>
                        <br/>
                        <input type="text" value={name} className="txtName" onChange={(e) => setName(e.target.value)} >
                        </input>
                        <div className="txtError">
                        {updateError}
                        </div>
                    </div>
                    <div className='btnseccion1'>
                        <Button  color='primary' type="button"className='btn' onClick={e => navigate('/')} >Cancel</Button>
                        <Button color='primary' type="submit" className='btn'>Submit</Button>
                        
                    </div>
                </form>
            </div> :
            <div>
                <h1 className="tError">ERROR</h1>
                <p className="textoError">Lo sentimos, pero no pudimos encontrar el autor que estás buscando, ¿Deseas agregar este autor a nuestra base de datos?</p>
                <Link to={'/new'} className="link">Agregar</Link>
            </div>
        }
        </div>
       
    
    );
}
export default Update;