import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import professorValidator from '../../validators/professorValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProfessorService from '../../services/academico/ProfessorService';

const Professores = () => {
  
  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const professor = ProfessorService.get(params.id)

      for (let campo in professor) {
        setValue(campo, professor[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      ProfessorService.update(params.id, dados)
    } else {
    ProfessorService.create(dados)
    }

    navigate('/professores')
  }

  return (
    <div>
      <h1>Professores</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", professorValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control isInvalid={errors.cpf} type="number" {...register("cpf", professorValidator.cpf)} />
          {errors.cpf && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula: </Form.Label>
          <Form.Control isInvalid={errors.matricula} type="text" {...register("matricula", professorValidator.matricula)} />
          {errors.matricula && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>Salario: </Form.Label>
          <Form.Control isInvalid={errors.salario} type="number" {...register("salario", professorValidator.salario)} />
          {errors.salario && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control isInvalid={errors.email} type="text" {...register("email", professorValidator.email)} />
          {errors.email && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="number" {...register("telefone", professorValidator.telefone)} />
          {errors.telefone && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>Cep: </Form.Label>
          <Form.Control isInvalid={errors.cep} type="number" {...register("cep", professorValidator.cep)} />
          {errors.cep && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control isInvalid={errors.logradouro} type="text" {...register("logradouro", professorValidator.logradouro)} />
          {errors.logradouro && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control isInvalid={errors.complemento} type="text" {...register("complemento", professorValidator.complemento)} />
          {errors.complemento && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero: </Form.Label>
          <Form.Control isInvalid={errors.numero} type="number" {...register("numero", professorValidator.numero)} />
          {errors.numero && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control isInvalid={errors.bairro} type="text" {...register("bairro", professorValidator.bairro)} />
          {errors.bairro && <span>Campo Obrigatório</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Professores