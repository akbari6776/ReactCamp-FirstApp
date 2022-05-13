import React from 'react'
import './TableStyle.css'
import { TList } from './../TitleList'
import UserData from './userData'

export default function Table({ modal, setModal, users, setUsers }){
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
                    ? users.map((data, index) => <UserData key={index} Data={data} />)
                    : 'محتوایی برای نمایش وجود ندارد'
                }
            </tbody>
        </table>
    )
}