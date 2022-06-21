import { scanTicket } from "@modules/ticket/services";
import { useMutation } from "react-query";

const useScanTicket = (eventId) => {
  return useMutation(async (mutationData) => {
    const { data } = await scanTicket(
      eventId,
      mutationData?.ticketId,
      mutationData?.nonce
    );
    return data;
  });
};

export default useScanTicket;
