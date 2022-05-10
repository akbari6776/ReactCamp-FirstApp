import React, {useState} from 'react'
import TableStyle from './TableStyle.css'
import { TList } from './TitleList'


export default function Table(){
    return(
        // <TableHeader />
        <table className="table">
        <tr>
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
            <td className="edit-buttons"><button className="edit">Edit</button><button className="delete">Delete</button></td>
        </tr>
        </table>
    )
}