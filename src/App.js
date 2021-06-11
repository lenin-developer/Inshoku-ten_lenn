import {useContext} from 'react';
import {TemaContext} from './contexts/TemaProvedor';
import {Route,Switch} from 'react-router-dom';
import styled from 'styled-components';
import Memu from './components/Menu';


function App() {

  const {Tema} = useContext(TemaContext)
  const {TemaPrincipal} = Tema;

  return (
    <Contenedor tema={TemaPrincipal} >
      <Memu tema={TemaPrincipal} />

      <Switch>
        <Route path='/comda' />

      </Switch>


     
    </Contenedor>
  );
}

const Contenedor = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.tema.Colores.fondo };
  grid-template-columns: 104px 1fr 34%;
  grid-template-rows: 1fr;
  gap: 24px;
  grid-template-areas: "menu main slidebar";
`;

export default App;
