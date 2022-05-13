import './TableStyle.css'


export default function UserData({ Data }) {
    return (
        <tr key={Data.family}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{Data.name}</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{Data.family}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{Data.age}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{Data.role}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{Data.status}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button className="table-btn edit">ویرایش</button>
                <button className="table-btn delete">حذف</button>
            </td>
        </tr>
    )
}