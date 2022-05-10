import React,{useState} from 'react'
import './App.css';
import Table from './components/Table/Table'
import Modal from './components/Modal/Modal'


function App() {
const [modal, setModal] = useState(false)

  return (
    <div>
      <div className="App">
        <div className='header'>
          <p>برای وارد کردن کاربر جدید روی دکمه مقابل کلیک کنید</p>
          <button className='form-open-btn' onClick={()=>{setModal(true)}}>ثبت</button>
        </div>
        <Table />
      </div>
      <Modal status={modal} />
    </div>
  );
}

export default App;
