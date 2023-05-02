export default async function handler(req, res) {
    const Web3 = require('web3');
    const fs = require('fs');
    const path = require('path');

    // Set up Web3 provider
    const web3 = new Web3('http://localhost:8545');

    // Load smart contract ABI and address
    const contractAbi = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../../geth/abi.json')));
    const contractAddress = '0xC635C862f9d2499ac6FD34211A430670f8Cd3c4e'; // Replace with your contract address

    // Instantiate smart contract object
    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    const from_ = req.body.from;
    const to = req.body.to;
    const amt = req.body.amount;


    await web3.eth.personal.unlockAccount(from_, '123', 6000)
        .then((res) => {
            // cool = true;
            console.log('Account unlocked!', res);

        })
        .catch((error) => {
            // cool = false;
            console.error('Error unlocking account:', error);

        });

    try {
        console.log(from_ + ' ' + to + ' ' + amt);
        contract.methods
            .transfer(to, amt)
            .send({ from: from_ })
            .then(console.log);
        res.status(200).json({ message: "Transfer successful" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error" });

    }
}