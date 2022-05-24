import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import salaValidator from '../../validators/salaValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SalaService from '../../services/academico/SalaService';

const Salas = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const sala = SalaService.get(params.id)

      for (let campo in sala) {
        setValue(campo, sala[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      SalaService.update(params.id, dados)
    } else {
      SalaService.create(dados)
    }

    navigate('/salas')
  }


  return (
    <div>
      <h1>Salas</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", salaValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade: </Form.Label>
          <Form.Control isInvalid={errors.capacidade} type="text" {...register("capacidade", salaValidator.capacidade)} />
          {errors.capacidade && <span>Campo Obrigatório</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Salas