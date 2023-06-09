import React from 'react';
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";
import Header from './Header';
import Usuarios from './Usuarios';
import Servicos from './Servicos';
import NovoServico from './NovoServico';

// const usuarios: Usuario[] = [{
//   id: '1',
//   nome: 'André',
//   telefone: '61982651378',
//   perfil: Perfil.Admin,
//   email: 'andrec.aac@gmail.com',
//   servicos: [],
//   agendamentos: [],
//   compromissos: []
// }, {
//   id: '2',
//   nome: 'Joao',
//   telefone: '61999999999',
//   perfil: Perfil.Profissional,
//   email: 'joaodasilva@email.com',
//   servicos: [],
//   agendamentos: [],
//   compromissos: []
// }, {
//   id: '3',
//   nome: 'Francisco',
//   telefone: '61999999998',
//   perfil: Perfil.Cliente,
//   email: 'francisco@email.com',
//   servicos: [],
//   agendamentos: [],
//   compromissos: []
// }];

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Usuarios />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/novoservico' element={<NovoServico />} />
      </Routes>
    </div>
  );
}

export default App;
