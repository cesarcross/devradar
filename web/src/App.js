import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';
// componente: Bloco isolado de html, css e js, nao interfere no restante do app
// propriedade: informacoes que um componente PAI passa para o comp FILHO
// estado: informacoes mantidas pelo compomente (imutabilidade)

function App() {
  const [devs, setDevs] = useState([]);



  useEffect(() => {
      async function loadDevs() {
        const response = await api.get('./devs');
        setDevs(response.data);
      }
      loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('./devs', data)
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>


      <main>
      <ul>
        {devs.map(dev => (
          <DevItem key={dev.id} dev={dev}/>
        ))}
      </ul>

      </main>
    </div>
  );
}

export default App;
