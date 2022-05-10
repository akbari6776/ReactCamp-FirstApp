import React from 'react'
import './TableStyle.css'
import { TList } from './../TitleList'


export default function Table(){
    return(
        // <TableHeader />
        <table className="table">
        <tr className='title'>
            {
                TList.map(( item, i ) => {
                    return <th key={i}>{item}</th>
                })
            }
        </tr>
        <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td className="edit-buttons"><button className="table-btn edit">ویرایش</button><button className="table-btn delete">حذف</button></td>
        </tr>
        </table>
    )
}