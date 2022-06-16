import { ticketContract } from "@config/web3";
import { useAppSelector } from "@hooks/reduxHook";
import { createTicketType } from "@modules/ticket-type/services";
import React from "react";
import { useMutation } from "react-query";
import Web3 from "web3";

const useCreateTicketType = (eventId, eventOnchainId) => {
  const account = useAppSelector((state) => state.auth.account);

  return useMutation(async (mutationData) => {
    const { data } = await createTicketType(eventId, mutationData);
    console.log(
      Number(eventOnchainId),
      data?._id,
      mutationData?.price,
      mutationData?.startSellingTime,
      mutationData?.endSellingTime,
      mutationData?.slot,
      account
    );
    const rs = await ticketContract.methods
      .createTicketType(
        Number(eventOnchainId),
        data?._id,
        Web3.utils.toWei(mutationData?.price?.toString(), "ether"),
        mutationData?.startSellingTime,
        mutationData?.endSellingTime,
        mutationData?.slot
      )
      .send({ from: account });
    console.log(rs);
    return data;
  });
};

export default useCreateTicketType;
