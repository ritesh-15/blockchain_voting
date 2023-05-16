const Web3 = require("web3")

async function main() {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://localhost:7545")
  )
  const abi = JSON.parse(
    '[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}] '
  )

  const VotingContract = web3.eth.contract(abi)
  const contractInstance = VotingContract.at(
    "0x48080B00E1c4e9076C907c7e2259297AaA76Bc73"
  )

  //   const accounts = await web3.eth.getAccounts()

  const candidateName = "Akshay"

  const numberOfVotes = await contractInstance.totalVotesFor
    .call(candidateName)
    .toLocaleString()

  console.log(`Voting count for ${candidateName} are ${numberOfVotes}`)
}

main()
