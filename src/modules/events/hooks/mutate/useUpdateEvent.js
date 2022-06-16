import { ticketContract } from "@config/web3";
import { useAppSelector } from "@hooks/reduxHook";
import { updateEvent } from "@modules/events/services";
import React from "react";
import { useMutation } from "react-query";

const useUpdateEvent = () => {
  const account = useAppSelector((state) => state.auth.account);
  return useMutation(async (mutationData) => {
    const { data } = updateEvent(mutationData?._id, mutationData);
    await ticketContract.methods
      .updateEvent(
        mutationData?.onChainId,
        mutationData?.startTime,
        mutationData?.endTime
      )
      .send({ from: account });
    return data;
  });
};

export default useUpdateEvent;
