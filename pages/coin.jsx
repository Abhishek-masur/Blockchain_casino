import styles from '../styles/coin.module.css'
import { Component } from 'react'
import { myVariable, updateVariable } from "./myvar.jsx";
import { useState } from 'react'


const CoinToss = () => {
  const [isHead, setIsHead] = useState(true)
  const [totalScore, setTotalScore] = useState(0);
  const [totalHeads, setTotalHeads] = useState(0);
  const [totalTails, setTotalTails] = useState(0);
  const [amount, setAmt] = useState('');
  const [bet1, setBet1] = useState("");
  const [bet2, setBet2] = useState("");
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [selectedUser, setSelectedUser] = useState("");


  const users = {
    user1: "0xaf28babb597903f16a4ede2a08fc9393f451034b",
    user2: "0x57fed45a14d5f8d456dc4b4e188aef5d67f08a0c",
    user3: "0x9a960d5684331bcde866c48606cf453ef54ec019",
    user4: "0x6704dadc11ace93484d1500b705cf200015cc12a",
    user5: "0xf56c4236c9f11f8631a0db9caab5f38eb0baa036",
  };


  const userNumber = Object.values(users).indexOf(myVariable);


  const transferAmount = async () => {
    const response = await fetch('/api/transfer', {
      method: 'POST',
      body: JSON.stringify({ from, to, amount }),
      headers: {
        'content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data);
  }

  const filteredUsers = Object.keys(users).filter((key) => {
    const address = users[key];
    return address !== myVariable;
  });



  const onClickTossCoin = () => {
    console.log(users[selectedUser]);
    console.log(myVariable);
    const getNum = Math.floor(Math.random() * 2)
    if (getNum === 0) {
      if (bet1 == 'heads') {
        setFrom(users[selectedUser]);
        setTo(myVariable);
        transferAmount();
        console.log('user1');
      }
      else {
        setFrom(myVariable);
        setTo(users[selectedUser]);
        transferAmount();
        console.log(selectedUser);
      }
      setIsHead(true)
      setTotalScore(prevTotalScore => prevTotalScore + 1)
      setTotalHeads(prevTotalHeads => prevTotalHeads + 1)
    } else if (getNum === 1) {
      if (bet1 == 'tails') {
        setFrom(users[selectedUser])
        setTo(myVariable);
        transferAmount();
        console.log('user1');
      }
      else {
        setFrom(myVariable);
        setTo(users[selectedUser]);
        transferAmount();
        console.log(selectedUser);
      }
      setIsHead(false)
      setTotalScore(prevTotalScore => prevTotalScore + 1)
      setTotalTails(prevTotalTails => prevTotalTails + 1)
    }
  }

  const srcImage = isHead
    ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

  return (
    <div className={styles.container}>
      <div className={styles.tcontainer}>
        <div className={styles.hcontainer}>
          <h1 className={styles.gheading}>Coin Toss Game</h1>
          <p className={styles.gsheading}>Heads (or) Tails </p>
        </div>
        <div className={styles.icontainer}>
          <img
            src={srcImage}
            alt="toss result"
            className={styles.htimage}
          />
        </div>
        <div className={styles.tcbcontainer}>
          <button
            className={styles.tcbutton}
            type="button"
            onClick={onClickTossCoin}
          >
            Toss Coin
          </button>
        </div>
        <div class="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput1"
            placeholder="Amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmt(e.target.value)}
          />
          <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">Select a user</option>
        {filteredUsers.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
          </select>

          <label htmlFor="bet1">User {userNumber+1} - Bet on:</label>
          <select id="bet1" value={bet1} onChange={(e) => setBet1(e.target.value)}>
            <option value=""></option>
            <option value="heads">Heads</option>
            <option value="tails">Tails</option>
          </select>
          <label htmlFor="bet2">{selectedUser} - Bet on:</label>
          <select id="bet2" value={bet2} onChange={(e) => setBet2(e.target.value)}>
            <option value=""></option>
            <option value="heads">Heads</option>
            <option value="tails">Tails</option>
          </select>
        </div>

        <div className={styles.scontainer}>
          <div className={styles.totalscorecontainer}>
            <p className={styles.scorestatus}>Total: {totalScore}</p>
          </div>
          <div className={styles.totalscorecontainer}>
            <p className={styles.scorestatus}>Heads: {totalHeads}</p>
          </div>
          <div className={styles.totalscorecontainer}>
            <p className={styles.scorestatus}>Tails: {totalTails}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinToss

