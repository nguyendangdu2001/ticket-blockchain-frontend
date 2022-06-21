import { useAppSelector } from "@hooks/reduxHook";
import { getTicket } from "@modules/ticket/services";
import React from "react";
import { useQuery } from "react-query";

const useGetTicket = () => {
  const account = useAppSelector((state) => state.auth.account);
  return useQuery(["my-ticket", account], async () => {
    const { data } = await getTicket();
    return data;
  });
};

export default useGetTicket;
