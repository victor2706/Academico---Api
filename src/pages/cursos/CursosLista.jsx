import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import apiAcademico from '../../services/apiAcademico'
import { BsPencilFill, BsTrash, BsArrowLeft } from 'react-icons/bs'
import CursoService from '../../services/academico/CursoService'
import { FaPlus } from 'react-icons/fa'

const CursosLista = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
  
      setCursos(CursoService.getAll())
  
    }, [])
  
    function apagar(id) {
      if(window.confirm('Deseja realmente excluir o registro?')){
        CursoService.delete(id)
        setCursos(CursoService.getAll())
      }
    }
  
    return (
      <div>
        <h1><p class="text-center">Curso</p></h1>
  
        <Link className='btn btn-dark mb-3' to={'/cursos/create'}><FaPlus /> Novo</Link>
  
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Duração</th>
              <th>Modalidade</th>
              <th>Editar  e Excluir</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((item, i) => (
              <tr key={i}>
                <td>{item.nome}</td>
                <td>{item.duracao}</td>
                <td>{item.modalidade}</td>
                <td>
                  <Link to={'/cursos/' + i}><BsPencilFill /></Link>{' '}
                  <BsTrash onClick={() => apagar(i)} className='text-danger' />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
  
  
  
      </div>
    )
  }

export default CursosLista