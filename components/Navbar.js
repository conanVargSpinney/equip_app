import Profile from '../public/oceanskies_logo_180.png'
import {FiSettings} from 'react-icons/fi';
import Link from 'next/link'
import Image from "next/image"
import { useState, useEffect } from 'react';
import PopupMenu from './PopupMenu';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);


    // Add function to close popup

    const navItems = [
        { id: 0, title: "Dashboard", link: "/" },
        { id: 1, title: "Team", link: "/team" },
        { id: 2, title: "Requests", link: "/requests" },
        { id: 3, title: "Orders", link: "/orders" },
    ]

    const handleClick = () => {
        setToggleMenu(true);

    }

    return (
        <header className="h-20 w-full border-b-2 border-gray-100 px-6 py-6">
            <nav className="flex justify-between">
                <div className="flex space-x-8 items-center">
                    <span>
                        <Link href="/"><Image className='rounded-full' src={Profile} alt="logo" width={40}></Image></Link>
                    </span>
                    <div>
                        <ul className="inline-flex space-x-4">
                            {
                                navItems.map(item => {
                                    return (
                                     <Link key={item.id} href={item.link}><li className=''>{item.title}</li></Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between space-x-6 items-center">
                    <FiSettings onClick={handleClick}/>
                </div>
                {
                    toggleMenu && (
                       <PopupMenu />
                    )
                }
            </nav>
        </header>
    )
}