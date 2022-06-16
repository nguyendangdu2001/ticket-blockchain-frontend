import Web3 from "web3";
import { TICKET_SC_ABI, TICKET_SC_ADDRESS } from "./config";

export const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

export const ticketContract = new web3.eth.Contract(
  TICKET_SC_ABI,
  TICKET_SC_ADDRESS
);
