import { useEffect } from "react";

export default function PopupMenu() {

    useEffect(()=>{
        
    },[])

    const settingItems = [
        { id: 0, heading: "Profile", action: "/" },
        { id: 1, heading: "Settings", action: "/" },
        { id: 2, heading: "Log Out", action: "/" },
    ]

    return (
        <div className='absolute shadow-lg bg-white right-10 top-16 rounded z-20'>
            <ul>
                {
                    settingItems.map(item => {
                        return (
                            <li className='font-light py-2 pl-2 pr-10 hover:bg-slate-100' key={item.id}>{item.heading}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}