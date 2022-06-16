import { ticketContract } from "@config/web3";
import { useAppSelector } from "@hooks/reduxHook";
import { createTicketType } from "@modules/ticket-type/services";
import React from "react";
import { useMutation } from "react-query";

const useUpdateTicketType = (eventId, eventOnchainId) => {
  const account = useAppSelector((state) => state.auth.account);

  return useMutation(async (mutationData) => {
    const { data } = createTicketType(eventId, mutationData);
    await ticketContract.methods
      .createTicketType(eventOnchainId, eventId, mutationData?.price)
      .send({ from: account });
    return data;
  });
};

export default useUpdateTicketType;
