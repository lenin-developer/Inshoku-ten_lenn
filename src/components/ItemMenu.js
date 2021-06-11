import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import {TemaContext} from '../contexts/TemaProvedor'


const ItemMenu = ({url,svg,estatus,tema}) => {

    const {menuActivo} = useContext(TemaContext)  

    // se crea el styled-component dentro del componente react para poder pasar el svg de forma dinamica
     const Svg = styled(svg)`
        padding: 18px;
        margin-left:12px;
        border-radius: 8px;
        background-color:${estatus ? tema.Colores.primario : tema.Colores.secundario };
        fill: ${estatus ? `${tema.Colores.blanco} !important`  : `${tema.Colores.primario} !important`};
        box-shadow: 0 0 0 1px ${tema.Colores.secundario};
        &:hover{
           box-shadow: 0 0 0 1px ${tema.Colores.primario};
        }
    `;

    const onClickMenu = (url) => {
        menuActivo(url)
    }

    
    return (
        <>
            <Fondo tema={tema} seleccionado={estatus}>
                <SeparadorSuperior tema={tema} />
                <ItemSelect tema={tema} seleccionado={estatus}>
                    <NavLink to={url}  >
                        <Svg tema={tema} onClick={e => onClickMenu(url)} />
                    </NavLink>                    
                </ItemSelect>
                <SeparadorInferior tema={tema}/>
            </Fondo>
        </>
     );




     
}


// styled-componetns

const Fondo = styled.div`
    display: flex;
    flex-direction: column;
    width: 92px;
    height:102px;
    background: ${props => props.seleccionado ?
     `linear-gradient(90deg, ${props.tema.Colores.secundario} 50%, ${props.tema.Colores.fondo} 50%)` 
     :`linear-gradient(90deg, ${props.tema.Colores.secundario} 100%)`};
`;

const SeparadorSuperior = styled.span`
    display: block;
    width:92px;
    height:11px;
    border-radius: 0px 0px 20% 0px;
    background-color: ${props => props.tema.Colores.secundario};
`;

const SeparadorInferior = styled.span`
    display: block;
    width:92px;
    height:11px;
    border-radius: 0px 20% 0px 0px;
    background-color: ${props => props.tema.Colores.secundario};
`;

const ItemSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 92px;
    height: 80px;
    background-color: ${props => props.seleccionado ?
        `${props.tema.Colores.fondo}` 
        :`${props.tema.Colores.secundario}`} ;
    border-radius: 10px 0px 0px 10px;
`;
 
export default ItemMenu;