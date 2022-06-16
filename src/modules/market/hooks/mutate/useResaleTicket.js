import { ticketContract } from "@config/web3";
import React from "react";
import { useMutation } from "react-query";

const useResaleTicket = () => {
  return useMutation(async (mutationData) => {
    const tx = await ticketContract.methods.resellToken(
      mutationData?.tokenId,
      mutationData?.price
    );
    return tx;
  });
};

export default useResaleTicket;
