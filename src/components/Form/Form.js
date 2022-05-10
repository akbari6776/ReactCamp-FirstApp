import React from 'react'
import './Form.css'
import { inputName } from './../TitleList'

export default function form(){
    return(
        <form className='form'>
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
                                id={`${item.id}-input`}
                                className="input-form"
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className='form-footer'>
                <button className='form-btn'>ثبت</button>
            </div>
        </form>
    )
}