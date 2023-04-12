import TableHeadItem from "./TableHeadItem";
import TableRow from "./TableRow";

export default function Table({ data, column }) {

    return (
        <table className="table-auto w-full rounded-xl border border-slate-200 mx-auto">
            <thead>
                <tr className=" bg-zinc-50 border-b border-slate-200 rounded-xl">
                    {column.map((item, index) => <TableHeadItem key={index} item={item} />)}
                </tr>
            </thead>
            <tbody>
                    {
                    data.map((item, index) => <TableRow key={index} item={item} column={column}/>)
                    }
            </tbody>
        </table>
    )
}