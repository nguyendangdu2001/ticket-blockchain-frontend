import { getTicket } from "@modules/ticket/services";
import React from "react";
import { useQuery } from "react-query";

const useGetTicket = () => {
  return useQuery(["my-ticket"], async () => {
    const { data } = await getTicket();
    return data;
  });
};

export default useGetTicket;
