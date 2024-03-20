import './listaSuspensa.css'


const ListaSuspensa = (props) => 
{
    console.log(props.itens)
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item =>
                    {return <option> {item}</option>})}
            </select>
        </div>
    )

}

export default ListaSuspensa