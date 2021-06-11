import React, {useState} from 'react'


const TemaContext = React.createContext()

const Tema  = {
    TemaPrincipal: {
        Colores:{
            primario:'#EA7C69',
            secundario:'#1F1D2A',
            fondo:'#252836',
            inputFondo:'#2D303E',
            InputText:'#ABBBC2',
            InputBorder:'#393C49',
            lineaSeparador:'#393C49',
            sombraMenuSelecionado:'#EA7C6952',
            blanco:'#fff'
        }        
    }
}


const TemaProvedor = ({children}) => {

    const [estatusMenu, setEstatusMenu] = useState({
        comida:false,
        bebidas:false,
        postres:false
    })



    const menuActivo = (url) => {
        console.log(url)

        switch (url) {
            case '/comida':
                setEstatusMenu({
                    comida:true,
                    bebidas:false,
                    postres:false
                })
                console.log(estatusMenu)
                break;

            case '/bebidas':
                setEstatusMenu({
                    comida:false,
                    bebidas:true,
                    postres:false
                })
                console.log(estatusMenu)
                break;

            case '/postres':
                setEstatusMenu({
                    comida:false,
                    bebidas:false,
                    postres:true
                })
                console.log(estatusMenu)
                break;
        
            default:
                break;
        }

    }


    return ( 
        <TemaContext.Provider value={{Tema,estatusMenu,menuActivo}}>
            {children}
        </TemaContext.Provider>
     );
}
 
export {TemaProvedor,TemaContext} ;