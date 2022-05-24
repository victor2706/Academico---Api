import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="warning" variant="light" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Acadêmico</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/cursos">Cursos</Link>
            <Link className="nav-link" to="/disciplinas">Disciplinas</Link>
            <Link className="nav-link" to="/alunos">Alunos</Link>
            <Link className="nav-link" to="/professores">Professores</Link>
            <Link className="nav-link" to="/salas">Salas</Link>
            <Link className="nav-link" to="/semestres">Semestres</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu