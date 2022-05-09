import { TList } from './TitleList'

export default function TableHeader(){
    return(
        <ul>
            {
                TList.map(( item, i ) => {
                    return <li key={i}>{item}</li>
                })
            }
        </ul>
    )
}