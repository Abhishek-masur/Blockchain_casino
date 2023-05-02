import React from 'react'
import {useRouter} from 'next/router'

const afterlogin = () => {
    const router= useRouter()
    const Mintfun=()=>{
       
        router.push('/admin');

    }
    const Playgame=()=>{
        // const router= useRouter();
        router.push('/coin');

    }
    return (
        <>
     <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/csk.jpg')"}}>
  <div className="flex flex-col items-center">
    <button
      type="button"
      className="inline-block px-8 py-3 mx-4 h-25 w-80 text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
      style={{backgroundImage: "url('https://media.istockphoto.com/id/1216244124/photo/little-piggy-bank-on-savings-jar-guarding-his-money-savings-background.jpg?b=1&s=170667a&w=0&k=20&c=YxOKhfrNLW8RKQ00fiW19JuusIyjxEj6heCwnVYWOH0=')"}}
      
      onClick={Mintfun}
    >
      Mint
    </button>
    <br />
    <button
      type="button"
      className="inline-block px-8 py-3 mx-4 h-25 w-80 text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
      style={{backgroundImage: "url('https://media.istockphoto.com/id/903362700/photo/gambling-hand-holding-poker-cards-and-money-coins-chips.jpg?b=1&s=170667a&w=0&k=20&c=PhCcxxxFPMV8z0nHjh5ks7fMsnlxseQHZA94-9WXsJ8=')"}}
      onClick={Playgame}
    >
      Play Game
    </button>
  </div>
</div>


        </>
    )
}

export default afterlogin
