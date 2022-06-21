import { ticketContract } from "@config/web3";
import { useAppSelector } from "@hooks/reduxHook";
import { blockCheck } from "@modules/market/services";
import React from "react";
import { useMutation } from "react-query";

const useBuyMarketItem = () => {
  const account = useAppSelector((state) => state.auth.account);
  return useMutation(async (mutationData) => {
    const tx = await ticketContract.methods
      .createMarketSale(Number(mutationData?.marketId))
      .send({ from: account, value: mutationData?.price });
    console.log(tx);
    await blockCheck({
      blockNumber: tx?.events?.Transfer?.blockNumber,
      eventName: "Transfer",
    });
    await blockCheck({
      blockNumber: tx?.events?.MarketItemSold?.blockNumber,
      eventName: "MarketItemSold",
    });
    return tx;
  });
};

export default useBuyMarketItem;
