import {useState} from 'react'
import './Form.css'
import { inputName } from '../List'
import axios from 'axios'
// axios.delete('https://628b497b0432524c58e5c8cf.endapi.io/users/2')
export default function Form({setShowModal, setUsers, action_}){
    const [ user , setUser ] = useState({
        name : '',
        family : '',
        age : '',
        role : '',
        contry : ''
    })

    //send data to api and set to state on index
    const addUserHandler = async (e) => {
        e.preventDefault();
        
        let res = await axios.post('https://628b497b0432524c58e5c8cf.endapi.io/users' , {
            name : user.name,
            family : user.family,
            age : user.age,
            role : user.role,
            contry : user.contry,
            password : '123456'
        })
        let _users = await axios.get('https://628b497b0432524c58e5c8cf.endapi.io/users')
        setUsers(_users?.data?.data);

        setShowModal(false);
    }

    //get input value and set state on this component
    const changeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name] : value    
        })
    }

    return(
        <form className='form' onSubmit={action_ !== 'edite' ? addUserHandler : null}>
            <div className='form-content'>
                {
                    inputName.map(( item ,i) => {
                        return (
                            <div className='input-area' key={i}>
                                <label className="lable-form">
                                {item.label}
                                </label>
                                <input
                                type="text"
                                onChange={changeInput}
                                name={`${item.id}`}
                                className="input-form"
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className='form-footer'>
                <button className='form-btn' type="submit">ثبت</button>
                <button className='form-open-btn' type="button" onClick={()=>{setShowModal(false)}}>بستن</button>
            </div>
        </form>
    )
}