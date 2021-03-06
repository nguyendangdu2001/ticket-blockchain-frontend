import { ticketContract } from "@config/web3";
import { useAppSelector } from "@hooks/reduxHook";
import { blockCheck } from "@modules/market/services";
import React from "react";
import { useMutation } from "react-query";
import Web3 from "web3";

const useResaleTicket = () => {
  const account = useAppSelector((state) => state.auth.account);
  return useMutation(async (mutationData) => {
    const listingPrice = await ticketContract.methods.getListingPrice().call();
    const tx = await ticketContract.methods
      .resellToken(
        Number(mutationData?.tokenId),
        Web3.utils.toWei(mutationData?.price?.toString(), "ether")
      )
      .send({ from: account, value: listingPrice });
    console.log(tx);
    await blockCheck({
      blockNumber: tx?.events?.MarketItemCreated?.blockNumber,
      eventName: "MarketItemCreated",
    });
    await blockCheck({
      blockNumber: tx?.events?.Transfer?.blockNumber,
      eventName: "Transfer",
    });
    return tx;
  });
};

export default useResaleTicket;
