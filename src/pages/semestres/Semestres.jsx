import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import semestreValidator from '../../validators/semestreValidator';
import SemestreService from '../../services/academico/SemestreService';

const Semestres = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const semestre = SemestreService.get(params.id)

      for (let campo in semestre) {
        setValue(campo, semestre[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      SemestreService.update(params.id, dados)
    } else {
      SemestreService.create(dados)
    }

    navigate('/semestres')
  }


  return (
    <div>
      <h1>Semestres</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nº do Semestre: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", semestreValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="datainicio">
          <Form.Label>Data de Inicio: </Form.Label>
          <Form.Control isInvalid={errors.datainicio} type="text" {...register("datainicio", semestreValidator.datainicio)} />
          {errors.datainicio && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="datafim">
          <Form.Label>Data Fim: </Form.Label>
          <Form.Control isInvalid={errors.datafim} type="text" {...register("datafim", semestreValidator.datafim)} />
          {errors.datafim && <span>Campo Obrigatório</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Semestres