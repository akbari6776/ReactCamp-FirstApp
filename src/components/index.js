import React,{useState} from 'react'
import Table from './Table/Table'
import '../App.css'
// import Modal from './components/Modal/Modal'

function MainPage() {
    const [ modal , setModal ] = useState(false);
    const [ users , setUsers ] = useState([]);
    
    return (
        // <div>
            <div className="App">
                <div className='header'>
                <p>برای وارد کردن کاربر جدید روی دکمه مقابل کلیک کنید</p>
                <button className='form-open-btn' onClick={()=>{setModal(true)}}>ثبت</button>
                </div>
                <Table modal={modal} setModal={setModal} users={users} setUsers={setUsers}/>
            </div>
            //{modal && <Modal />}
        //</div>
    );
}
    
export default MainPage;