import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button, Container} from "reactstrap";

const AutorList = (props) =>{
    const { autores,removeFromDom } = props;
    const navigate = useNavigate();
    
    const deleteAutor = (_id) =>{
        axios.delete('http://localhost:8000/api/autor/'+_id+'/delete')
        .then(res => {
            console.log(res);
            removeFromDom(_id);
        })
        .catch(err => console.log(err))
    }

    const editar = (id) => {
        navigate('/edit/'+id);
    }

    return (
        <div>
            <div className='general1'>
                <h1>Favorite Authors</h1>
                <Link to={'/new'} className='link'>Add an author</Link>
                <p className='h3Description'>We have quotes by:</p>
            </div>
            <Container>
            <Table className="table table-hover responsive">
                <thead>
                    <tr className="table-secondary">
                        <th style={{textAlign: "center"}}>Author</th>
                        <th scope="col" style={{textAlign: "center"}}>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    autores.map((autor, idx) =>{
                        return <tr key={idx}>
                            <td>{autor.name}</td>
                            <td>  
                                <Button  className='btnEdit' onClick={()=>editar(autor._id)}>Edit</Button>
                                <Button color="danger" className='btnDelete' onClick={(e) => {deleteAutor(autor._id)}}>Delete</Button>
                            </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            </Container>
    
        </div>
    );
}
export default AutorList;