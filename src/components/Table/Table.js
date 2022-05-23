import React from 'react'
import './TableStyle.css'
import { TList } from './../List'
import UserData from './userData'

export default function Table({ users, _deleteStatus ,setAction_, onEdite }){
    return(
        <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
                <tr>
                    {
                        TList.map(( item, i ) => {
                            return <th scope="col" className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6" key={i}>{item}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
                { users.length 
                    ? users.map((data, index) => <UserData Data={data} _delete={_deleteStatus} setAction={setAction_} _onEdite={onEdite}/>)
                    : <tr><td>محتوایی برای نمایش وجود ندارد</td></tr>
                }
            </tbody>
        </table>
    )
}