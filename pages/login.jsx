import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router'
import { myVariable, updateVariable } from "./myvar.jsx";

export default function login() {

    const [address, setAddress] = useState('');
     const [password, setPassword] = useState('');
     const router = useRouter()
    const unlockaccount = async () =>{
        const response = await fetch('/api/unlock', {
            method: 'POST',
            body: JSON.stringify({address,password}),
            headers: {
                'content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data);
        if( data.cool===false)
        {alert("Loggin failed");
           

        }else{  
            updateVariable(address);
            // console.log(myVariable);
            router.push('/afterlogin');
            
        }
    }
    return (
        <>
            <div className="flex justify-center pt-10 bg-stone-600 h-screen" style={{backgroundImage: "url('https://media.istockphoto.com/id/854509336/photo/dark-purple-casino-games.jpg?s=612x612&w=0&k=20&c=8keuS2jduKom8bISVjXGpfioRyRskOU9jKgya7S7fNU=')",backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                
                <div className="xl:w-3/12 lg:w-3/12 md:w-8/12 md:mb-8 bg-orange-200 px-12 py-16 rounded-lg drop-shadow-md" style={{backgroundImage: "url('https://media.istockphoto.com/id/1354159104/photo/black-wall-texture-rough-background-dark-concrete-floor-or-old-grunge-background-with-black.jpg?b=1&s=170667a&w=0&k=20&c=7KQrf92MQM3yZ1ZGlbLKij_pXxBqhg-gv1UbtZrA0nk=')",backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                    <div className="text-center py-9">
                        <p className="font-bold text-3xl pb-3">Login</p>
                        <p className="font-thin">Enter your Credentials</p>
                    </div>
                    <form>
                        {/* <!-- username or account address input --> */}
                        <div class="mb-6">
                            <input
                                type="text"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput1"
                                placeholder="Address"
                                name="address"
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                            />
                        </div>

                        {/* <!-- Password input --> */}
                        <div class="mb-6">
                            <input
                                type="password"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>

                        <div class="text-center">
                            <button
                                type="button"
                                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={unlockaccount}>
                                Login
                            </button>
                            <div class="text-center mb-6 pt-6 ">
                                <Link href="/create-account" class="text-gray-800 font-normal">New user? Create account!</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
