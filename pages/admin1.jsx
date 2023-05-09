import { useState, useEffect } from "react"
import { myVariable } from "./myvar";
import {useRouter} from 'next/router'

export default function create_account() {
    //for minting and getting total balance
    const [totalSupply, setTotalSupply] = useState(null);

    // const [address, setAddress] = useState('');
    let address = myVariable;
    // setAddress(myVariable);
    const [balance, setBalance] = useState('');
    const router= useRouter()
    const Playgame=()=>{
       
        router.push('/coin');

    }


    const fetchBalance = async () => {
        const response = await fetch('/api/balance', {
            method: 'POST',
            body: JSON.stringify({ address }),
            headers: {
                'content-Type': 'application/json',
            },
        })
        const data2 = await response.json()
        setBalance(data2.balance);
        console.log(data2);
    }


    // const mintTokens = async () => {
    //     const response = await fetch('/api/mint');

    //     const data = await response.json();
    //     setTotalSupply(data.totalSupply);
    // }

    //for getting total balance
    const [totalSupply1, setTotalSupply1] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response1 = await fetch('/api/totalSupply');
            const data1 = await response1.json();
            setTotalSupply(data1.totalSupply);
        }
        fetchData();
    }, []);

    //for transferring
    let from = '0x717c913b027e831f82b8623be4550e2e92fb96b4';
    let to = myVariable;
    const [amount, setAmount] = useState('');
    const transferAmount = async () => {
        const response = await fetch('/api/transfer', {
            method: 'POST',
            body: JSON.stringify({ from, to, amount }),
            headers: {
                'content-Type': 'application/json',
            },
        })
        const data = await response.json()
    }

    return (
        <>
            <div className="flex justify-center pt-10 bg-stone-500">
                <div className="w-3/6 bg-white px-12 py-5 rounded-lg drop-shadow-md mb-5">
                    <button
                        type="button"
                        className="inline-block px-8 py-3 mx-15 h-15 w-15 text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
                    

                        onClick={Playgame}
                    >
                        Play game
                    </button>


                    <div className="text-center py-9">
                        <p className="font-bold text-3xl pb-3">Current Balance - Rs {balance}</p>
                        <p className="font-thin">account address - {myVariable}</p>
                    </div>
                    <form className="my-6">
                        {/* <!-- Resquest amount input --> */}
                        <p className="flex justify-center font-bold text-2xl pb-3">Fetch Balance</p>
                        {/* <div class="mb-3">
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}  we are using login address
                                type="text"
                                class="form-control block w-full px-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2"
                                placeholder="Account address"
                            />
                        </div> */}
                        <div className="flex justify-center">
                            <button
                                onClick={fetchBalance}
                                type="button"
                                className="mb-3 px-10 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Fetch
                            </button>
                        </div>
                    </form>

                    <div className="text-center py-9">
                        <p className="font-bold text-3xl pb-3">Total Supply - Rs {totalSupply1 || totalSupply}</p>
                        <p className="font-thin">account address - 0x717c913b027e831f82b8623be4550e2e92fb96b4</p>
                    </div>



                    <form className="my-6">

                        {/* <!-- Transfer amount --> */}
                        <p className="flex justify-center font-bold text-2xl pb-3">Add Currency to Wallet</p>
                        {/* <div className="mb-3">
                            <input
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                type="text"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput1"
                                placeholder="Receiver address"
                            />
                        </div> */}
                        <div className="mb-3">
                            <input
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                type="text"
                                className="form-control block w-full px-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2"
                                placeholder="Amount"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={transferAmount}
                                type="button"
                                className="mb-3 inline-block px-10 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Transfer
                            </button>
                        </div>
                    </form>

                    {/* <form className="my-6"> */}
                    {/* <!-- Resquest amount input --> */}
                    {/* <p className="flex justify-center font-bold text-2xl pb-3">Mint</p> */}
                    {/* currently not using the token input  */}
                    {/* <div class="mb-3">
                            <input
                                type="text"
                                class="form-control block w-full px-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2"
                                placeholder="Amount"
                            />
                        </div> */}
                    {/* <div className="flex justify-center"> This mint to increase total supply of admin
                            <button
                                onClick={mintTokens}
                                type="button"
                                className="mb-3 px-10 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Mint
                            </button>
                        </div> */}
                    {/* </form> */}
                </div>
            </div>
        </>
    )
}