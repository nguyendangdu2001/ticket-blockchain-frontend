import { ticketContract } from "@config/web3";
import { useAppSelector } from "@hooks/reduxHook";
import { createEvent } from "@modules/events/services";
import { blockCheck } from "@modules/market/services";
import React from "react";
import { useMutation, useQueryClient } from "react-query";

const useCreateEvent = () => {
  const account = useAppSelector((state) => state.auth.account);
  const queryClient = useQueryClient();

  return useMutation(
    async (mutationData) => {
      const { data: event } = await createEvent(mutationData);
      const tx = await ticketContract.methods
        .createEvent(
          Number(mutationData?.startTime),
          Number(mutationData?.endTime),
          event?._id
        )
        .send({ from: account });
      console.log(tx);
      await blockCheck({
        blockNumber: tx?.events?.EventCreated?.blockNumber,
        eventName: "EventCreated",
      });
      return event;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["my-event", account]);
        queryClient.invalidateQueries(["event"]);
      },
    }
  );
};

export default useCreateEvent;
