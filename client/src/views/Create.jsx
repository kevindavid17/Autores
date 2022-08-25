import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import axios from 'axios';

const Create = () => {
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/autores')
        .then(res => {
            setAutores(res.data);
        })
    }, []);

    const createFromDom = (newAutor) => {
        setAutores([...autores,newAutor]);
    }

    return (
        <div>
            <Form createFromDom={createFromDom} />
        </div>
    );
}
export default Create;