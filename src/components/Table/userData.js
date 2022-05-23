import axios from 'axios'
import './TableStyle.css'


export default function UserData({ Data, _delete, setAction, _onEdite }) {

    async function onDelete (id) {
        try {
            let res = await axios.delete(`https://628b497b0432524c58e5c8cf.endapi.io/users/${id}`)
        } catch (error) {
            console.log(error)
        }
        _delete() //call getUsersFromAli function from index for update view
    }

    //set modal action and send current data to index
    function onEdite(_data){
        setAction('edite')
        _onEdite(_data)
    }

    let _id = Data.id
    return (
        <tr key={Data.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{Data.name}</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{Data.family}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{Data.age}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{Data.role}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{Data.contry}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button className="table-btn edit" onClick={()=>{onEdite(Data)}}>ویرایش</button>
                <button className="table-btn delete" onClick={()=>{onDelete(_id)}}>حذف</button>
            </td>
        </tr>
    )
}