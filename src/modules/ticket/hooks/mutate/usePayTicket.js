import { ticketContract } from "@config/web3";
import { buyTicket } from "@modules/ticket/services";
import { useMutation } from "react-query";

const usePayTicket = () => {
  return useMutation(async (ticketTypeId) => {
    const { data } = await buyTicket(ticketTypeId);
    await ticketContract.payForTicket(ticketTypeId, data?._id);
    return data;
  });
};

export default usePayTicket;
