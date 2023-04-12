import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'


export default function Home() {
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(()=>{
    getPageData();
  },[])

  async function getPageData(){
    const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
    const response = await fetch(apiUrlEndpoint);
    const res = await response.json();
    setDataResponse(res);
    
  }


  return (
      <main>
        <h1>Dashboard</h1>
      </main>
  )
}
