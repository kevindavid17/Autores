import React, {useState, useEffect} from 'react';
//import Form from '../components/Form';
import AutorList from '../components/AutorList';
import axios from 'axios';

const Main = () => {
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/autores')
        .then(res => {
            setAutores(res.data);
        })
    }, []);

    const removeFromDom = (autorId) => {
        setAutores(autores.filter(autor => autor._id !== autorId));
    }

    return (
        <div>
            <AutorList autores ={autores} removeFromDom={removeFromDom}/>
        </div>
    );
}
export default Main;