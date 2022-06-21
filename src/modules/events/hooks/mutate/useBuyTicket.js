import { ticketContract } from "@config/web3";
import { useAppSelector } from "@hooks/reduxHook";
import { createEvent } from "@modules/events/services";
import { blockCheck } from "@modules/market/services";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import Web3 from "web3";

const useBuyTicket = () => {
  const account = useAppSelector((state) => state.auth.account);
  const queryClient = useQueryClient();
  return useMutation(
    async (mutationData) => {
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
      await blockCheck({
        blockNumber: tx?.events?.TicketSold?.blockNumber,
        eventName: "TicketSold",
      });
      await blockCheck({
        blockNumber: tx?.events?.Transfer?.blockNumber,
        eventName: "Transfer",
      });
      return tx;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["my-ticket", account]);
        // queryClient.invalidateQueries(["ticket-type", eventId]);
      },
    }
  );
};

export default useBuyTicket;
