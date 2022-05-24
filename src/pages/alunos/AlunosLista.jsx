import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AlunoService from '../../services/academico/AlunoService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const AlunosLista = () => {

  const [alunos, setAlunos] = useState([])

  useEffect(() => {

    setAlunos(AlunoService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      AlunoService.delete(id)
      setAlunos(AlunoService.getAll())
    }
  }

  return (
    <div>
      <h1><p class="text-center">Alunos</p></h1>

      <Link className='btn btn-dark mb-3' to={'/alunos/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Matricula</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Cep</th>
            <th>Logradouro</th>
            <th>Complemento</th>
            <th>Numero</th>
            <th>Bairro</th>
            <th>Editar e Excluir</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((item, i) => (
            <tr key={i}>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.matricula}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.cep}</td>
              <td>{item.logradouro}</td>
              <td>{item.complemento}</td>
              <td>{item.numero}</td>
              <td>{item.bairro}</td>
              <td>
                <Link to={'/alunos/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default AlunosLista