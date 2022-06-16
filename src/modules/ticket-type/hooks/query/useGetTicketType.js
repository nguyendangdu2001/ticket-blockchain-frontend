import { getTicketType } from "@modules/ticket-type/services";
import React from "react";
import { useQuery } from "react-query";

const useGetTicketType = (eventId) => {
  return useQuery(["ticket-type", eventId], async () => {
    const { data } = await getTicketType(eventId);
    return data;
  });
};

export default useGetTicketType;
