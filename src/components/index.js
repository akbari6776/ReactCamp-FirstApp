import React,{useState, useEffect} from 'react'
import Table from './Table/Table'
import '../App.css'
import Modal from './Modal'
import Form from './Form/Form'
import axios from 'axios'


function MainPage() {
    const [ modal , setModal ] = useState(false);
    const [ users , setUsers ] = useState([]);
    const [ _action , setAction ] = useState('');
    const [ currentVal , setCurrentVal ] = useState([]);
    console.log(currentVal)
    useEffect(()=>{
        getUsersFromAli()
    },[])
    
    const getUsersFromAli = async () => {
        let _users = await axios.get('https://628b497b0432524c58e5c8cf.endapi.io/users')
        setUsers(_users?.data?.data);
    }

    //baraye fahmidane noe Modal
    function onModalOpen(_name){
        setModal(true)
        setAction(_name)
    }

    return (
        <>
            <div className="App">
                <div className='header'>
                    <p>برای وارد کردن کاربر جدید روی دکمه مقابل کلیک کنید</p>
                    <button className='form-open-btn' onClick={()=>{onModalOpen('sabt')}}>ثبت</button>
                </div>
                <Table setAction_={onModalOpen} users={users} _deleteStatus={getUsersFromAli()} onEdite={setCurrentVal}/>
            </div>
            <Modal
            show={modal}
            setShow={setModal}
            >
                <Form action_={_action} setShowModal={setModal} setUsers={setUsers} edite={currentVal}/>
            </Modal>
        </>
    );
}
    
export default MainPage;