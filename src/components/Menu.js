import {useContext} from 'react'
import {TemaContext} from '../contexts/TemaProvedor'
import styled from 'styled-components';
import {ReactComponent as HomeIcon} from '../icons/Home.svg'
import ItemMenu from './ItemMenu';


const Memu = ({tema}) => {

    const {estatusMenu} = useContext(TemaContext)

    return ( 
        <Nav tema={tema}>
            <ItemMenu url='/comida' svg={HomeIcon} estatus={estatusMenu.comida} tema={tema} />
            <ItemMenu url='/bebidas' svg={HomeIcon} estatus={estatusMenu.bebidas} tema={tema} />
            <ItemMenu url='/postres' svg={HomeIcon} estatus={estatusMenu.postres} tema={tema} />
            
        </Nav>
     );
}

const Nav = styled.nav`
    grid-column: menu-start/menu-end;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    background: ${props => props.tema.Colores.secundario}; 
`;

 
export default Memu;
