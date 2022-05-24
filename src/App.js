import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cursos from "./pages/cursos/Cursos";
import CursosLista from "./pages/cursos/CursosLista";
import CursosForm from "./pages/cursos/CursosForm";
import Disciplinas from "./pages/disciplinas/Disciplinas";
import Professores from "./pages/professores/Professores";
import Alunos from "./pages/alunos/Alunos";
import Salas from "./pages/salas/Salas";
import Semestres from "./pages/semestres/Semestres";
import DisciplinasLista from "./pages/disciplinas/DisciplinaLista";
import AlunosLista from "./pages/alunos/AlunosLista";
import ProfessoresLista from "./pages/professores/ProfessoresLista";
import SemestresLista from "./pages/semestres/SemestresLista";
import SalasLista from "./pages/salas/SalasLista";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Cursos />} />
            <Route path="/cursos" element={<CursosLista />} />
            <Route path="/cursos/create" element={<Cursos />} />
            <Route path="/cursos/:id" element={<Cursos />} />
            <Route path="/disciplinas/create" element={<Disciplinas />} />
            <Route path="/disciplinas/:id" element={<Disciplinas />} />
            <Route path="/disciplinas" element={<DisciplinasLista />} />
            <Route path="/professores" element={<ProfessoresLista />} />
            <Route path="/professores/:id" element={<Professores />} />
            <Route path="/professores/create" element={<Professores />} />
            <Route path="/alunos" element={<AlunosLista />} />
            <Route path="/alunos/create" element={<Alunos />} />
            <Route path="/alunos/:id" element={<Alunos />} />
            <Route path="/salas" element={<SalasLista />} />
            <Route path="/salas/create" element={<Salas />} />
            <Route path="/salas/:id" element={<Salas />} />
            <Route path="/semestres" element={<SemestresLista />} />
            <Route path="/semestres/create" element={<Semestres />} />
            <Route path="/semestres/:id" element={<Semestres />} />
            
            
            
            
            
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
