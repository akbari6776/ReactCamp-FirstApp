import {useState} from 'react'
import './Form.css'
import { inputName } from './../TitleList'


export default function Form({setShowModal, setUsers}){
    const [ user , setUser ] = useState({
        name : '',
        family : '',
        age : '',
        role : '',
        contry : ''
    })
    console.log(user)

    const addUserHandler = (e) => {
        e.preventDefault();
        
        setUsers(prevState => {
            return [
                ...prevState,
                user
            ];
        });
        setShowModal(false);
    }

    const changeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name] : value    
        })
    }


    return(
        <form className='form' onSubmit={addUserHandler}>
            <div className='form-content'>
                {
                    inputName.map(( item ) => {
                        return (
                            <div className='input-area'>
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