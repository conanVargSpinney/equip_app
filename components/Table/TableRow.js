import Link from "next/link";

export default function TableRow({item, column}){
    
    return(
        <tr className='p-4 border-b-2 border-slate-50'>
            {
                column.map((columnItem, index)=>{
                    switch (columnItem.type) {
                        case "edit" : {
                            return (
                               <td key={index} className="p-4"> <Link className="font-semibold text-violet-600" href={`${columnItem.route}/` + item[`${columnItem.value}`] }>Edit</Link></td>
                            )
                        }
                        case "number" : {
                            return (
                                <td className="p-4" key={index}>{item[`${columnItem.value}`].toLocalString('en-US')}</td>
                            )
                        }
                        default:
                            return (
                                <td className="p-4" key={index}>{item[`${columnItem.value}`]}</td>
                            )
                            break;
                    }
                    
                    
                    // return (
                      
                    //     <td key={index}>{item[`${columnItem.value}`]}</td>
                    // )
                })
            }
        </tr>
    )
}