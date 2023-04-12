
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Profile from '../../public/oceanskies_logo_180.png';
import { useEffect, useState } from "react";


export default function TeamMemberPage({ }) {
  const [userData, setUserData] = useState([])
  const router = useRouter();
  const { uid } = router.query;

  


  return (
    <main>
      <div className="m-8">
        <div className="flex">
          <div className="basis-1/2">
            <span>
              <h1 className="font-bold text-lg">Conan Spinney</h1>
              <p className="font-light">Payroll Administrator</p>
            </span>
          </div>
          <div className="flex basis-1/2 justify-end">
            <button className="bg-red-600 px-4 py-2 rounded text-white m-4 ">Delete</button>
          </div>
        </div>
      </div>
      <div className="flex space-x-5 mx-8">
        <div className="basis-2/3 bg-white rounded p-4">
          <div className="border-b w-full p-2">
            <h2 className="font-bold text-lg">Account information</h2>
            <p>Personal Details</p>
          </div>
          <form>
            <div className="grid grid-cols-2 p-2 space-y-2">
              <div className="flex flex-col m-2">
                <label>Role</label>
                <select className="border border-slate-400 rounded-md p-1">
                  <option>None</option>
                  <option>Admin</option>
                  <option>Supervisor</option>
                </select>
              </div>
              <div className="flex flex-col m-2">
                <label>Email Address</label>
                <input className="border border-slate-400 rounded-md p-1" type="text"></input>
              </div>
              <div className="flex flex-col m-2">
                <label>First Name</label>
                <input className="border border-slate-400 rounded-md p-1 w-2/4" type="text" value={userData.first_name}></input>
              </div>
              <div className="flex flex-col m-2">
                <label>Last Name</label>
                <input className="border border-slate-400 rounded-md p-1 w-2/4" type="text"></input>
              </div>
              <div className="flex flex-col m-2">
                <label>New Password</label>
                <input className="border border-slate-400 rounded-md p-1 w-2/4" type="text"></input>
              </div>
              <div className="flex flex-col m-2">
                <label>Confirm Password</label>
                <input className="border border-slate-400 rounded-md p-1 w-2/4" type="text"></input>
              </div>
            </div>
            <label className="mx-4">Notes</label>
            <br />
            <textarea className="border border-slate-400 rounded-md p-1 mx-4 w-3/4">

            </textarea>
            <div>
              <button className="float-left bg-violet-600 px-4 py-2 rounded text-white m-4" type="submit">Save</button>
            </div>
          </form>
        </div>
        <div className="basis-1/3 bg-white rounded p-4">
          <h2 className="font-bold text-lg">Activity</h2>
        </div>
      </div>
    </main>
  )
}