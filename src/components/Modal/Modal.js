import './Modal.css'
import Form from '../Form/Form'


export default function Modal(props){
    return(
        <div className='modal' style={{display: props.status ? 'flex' : 'none'}}>
            <Form/>
        </div>
    )
}