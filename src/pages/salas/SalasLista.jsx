import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SalaService from '../../services/academico/SalaService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const SalasLista = () => {

  const [salas, setSalas] = useState([])

  useEffect(() => {

    setSalas(SalaService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      SalaService.delete(id)
      setSalas(SalaService.getAll())
    }
  }

  return (
    <div>
      <h1>Salas</h1>

      <Link className='btn btn-info mb-3' to={'/salas/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Capacidade</th>
            <th>Editar e Excluir</th>
            
          </tr>
        </thead>
        <tbody>
          {salas.map((item, i) => (
            <tr key={i}>
              <td>{item.nome}</td>
              <td>{item.capacidade}</td>
              <td>
                <Link to={'/salas/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default SalasLista