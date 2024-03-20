import CampoTexto from '../CampoTexto/CampoTexto'
import './formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {

        const times = [
            'Administração',
            'Desenvolvimento',
            'Atendimento',
            'Diretoria',
            'Produção'
        ]

    return(
    <section className = "formulario">
        <form>
            <h2>Preeencha os dados para criar o card do colaborador</h2>
                
            <CampoTexto label = "Nome" placeholder = "Digite seu nome"/>
            <CampoTexto label = "Cargo" placeholder  = "Digite seu cargo"/>
            <CampoTexto label = "Imagem" placeholder  = "Insira a url da imagem"/>
            <ListaSuspensa label = "Times"  itens = {times} />
            <Botao/>

        </form>
    </section>
    )

}

export default Formulario