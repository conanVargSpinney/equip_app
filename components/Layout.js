import Navbar from "./Navbar";
import { useRouter } from 'next/router'


export default function Layout({ children }) {

    const router = useRouter();

    return (
        <>
           
                <Navbar />
                <main className="h-screen p-8 bg-slate-100">
                {children}
                </main>
           
        </>)

}