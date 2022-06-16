import { ticketContract } from "@config/web3";
import { useAppSelector } from "@hooks/reduxHook";
import { createEvent } from "@modules/events/services";
import React from "react";
import { useMutation } from "react-query";
import Web3 from "web3";

const useBuyTicket = () => {
  const account = useAppSelector((state) => state.auth.account);

  return useMutation(async (mutationData) => {
    console.log(mutationData);
    const tx = await ticketContract.methods
      .payForTicket(
        Number(mutationData?.ticketTypeOnChainId)
        // mutationData?.ticketTypeId
      )
      .send({
        from: account,
        value: Web3.utils.toHex(mutationData?.value?.toString()),
      });
    console.log(tx);
    return tx;
  });
};

export default useBuyTicket;
