import './App.css';
import Table from './components/Table/Table'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <p>برای وارد کردن کاربر جدید روی دکمه مقابل کلیک کنید</p>
        <button className='form-open-btn'>ثبت</button>
      </div>
      <Table />
    </div>
  );
}

export default App;
