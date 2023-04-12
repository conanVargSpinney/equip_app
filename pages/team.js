import Table from "@/components/Table/Table";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function team({ }) {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    getTeam();
  }, [])


  const column = [
    { heading: 'First Name', value: 'first_name' },
    { heading: 'Surname', value: 'surname' },
    { heading: 'Email', value: 'email' },
    { heading: 'Team', value: 'team' },
    { heading: 'Rank', value: 'rank' },
    { heading: 'Edit', value: 'id', type: 'edit', route: '/team' }

  ]


  return (
    <main>
      <div className="bg-white rounded p-4">
        <div className="m-4 w-full flex mx-auto px-4">
          <div className="basis-1/2">
            <h1 className="font-lg font-semibold">Team Members</h1>
            <p>The active team memebers of the company</p>
          </div>
          <div className="basis-1/2 justify-end">
            <button className="float-right bg-violet-600 px-4 py-2 rounded text-white my-auto">Add user</button>
          </div>
        </div>
        <div className="p-4">
          <Table data={dataTable} column={column} />
        </div>
      </div>
    </main>
  )
}