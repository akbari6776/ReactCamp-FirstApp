import React,{useState, Fragment} from 'react'
import Table from './Table/Table'
import '../App.css'
import Modal from './Modal'
import Form from './Form/Form'


function MainPage() {
    const [ modal , setModal ] = useState(false);
    const [ users , setUsers ] = useState([]);
    console.log(modal)
    return (
        <>
            <div className="App">
                <div className='header'>
                <p>برای وارد کردن کاربر جدید روی دکمه مقابل کلیک کنید</p>
                <button className='form-open-btn' onClick={()=>{setModal(true)}}>ثبت</button>
                </div>
                <Table modal={modal} setModal={setModal} users={users} setUsers={setUsers}/>
            </div>
            <Modal
            show={modal}
            setShow={setModal}
            >
                <Form setShowModal={setModal} setUsers={setUsers}/>
            </Modal>
        </>
    );
}
    
export default MainPage;