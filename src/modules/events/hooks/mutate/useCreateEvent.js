import { ticketContract } from "@config/web3";
import { useAppSelector } from "@hooks/reduxHook";
import { createEvent } from "@modules/events/services";
import React from "react";
import { useMutation } from "react-query";

const useCreateEvent = () => {
  const account = useAppSelector((state) => state.auth.account);

  return useMutation(async (mutationData) => {
    const { data: event } = await createEvent(mutationData);
    const tx = await ticketContract.methods
      .createEvent(
        Number(mutationData?.startTime),
        Number(mutationData?.endTime),
        event?._id
      )
      .send({ from: account });
    console.log(tx);
    return event;
  });
};

export default useCreateEvent;
