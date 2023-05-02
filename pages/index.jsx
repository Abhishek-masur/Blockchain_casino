import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Link from 'next/link';
// import MyApp from '@/components/Slider';
// import style from '../styles/coin.module.css'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Casino</title>
        <meta name="description" content="Casino using etherium" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        
        
      </Head>
      <main>
      
        {/* <Link href="/admin" >
        Go to Admin page
      </Link> */}
        {/* <Link href="/coin" >
        Go to login page
      </Link>  */}
      {/* Myapp is slider component still styling needs to be done */}
      {/* <MyApp/>  */}
      {/* <div className={style.container1}></div> */}
      <div className="h-full w-full relative">
      <Link href="/login" className="absolute top-0 right-0 m-4 px-4 py-2 bg-white transition-all hover:bg-black hover:text-white text-black font-bold rounded-lg shadow-md no-underline z-20">
  Login to continue
</Link>


  <img src="https://images.unsplash.com/photo-1607939905392-f562558e9542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzaW5vJTIwbGFyZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className="h-full w-full object-cover transition-opacity duration-300 opacity-100" />
</div>

        
      </main>
    </>
  )
}
