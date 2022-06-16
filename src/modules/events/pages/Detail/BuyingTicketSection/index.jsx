import IconButton from "@components/IconButton";
import useBuyTicket from "@modules/events/hooks/mutate/useBuyTicket";
import useGetTicketType from "@modules/ticket-type/hooks/query/useGetTicketType";
import React from "react";
import Countdown from "react-countdown";
import Web3 from "web3";
const BuyingTicketSection = ({ eventId }) => {
  const { data } = useGetTicketType(eventId);
  const { mutate: buy } = useBuyTicket();
  return (
    <div className="space-y-3">
      {data?.data?.map((v) => (
        <div className="flex items-center justify-between p-2 rounded-lg shadow ring-1 ring-blue-500 ">
          <div>
            <div className="text-xl font-semibold">{v?.name}</div>
            <div className="font-medium">
              <span className="text-gray-500">
                {v?.startSellingTime > Date.now() && "Start In"}
                {v?.startSellingTime < Date.now() && "End In"}
              </span>
              :{" "}
              <span className="text-lg">
                {v?.startSellingTime > Date.now() && (
                  <Countdown date={v?.startSellingTime} />
                )}
                {v?.startSellingTime < Date.now() && (
                  <Countdown date={v?.endSellingTime} />
                )}
              </span>
            </div>
            <div className="font-medium">Ticket Remain: {v?.currentLimit}</div>
          </div>

          <IconButton
            className="font-bold bg-gray-200"
            onClick={() =>
              buy({
                ticketTypeOnChainId: v?.onChainId,
                value: v?.price,
                ticketTypeId: v?._id,
              })
            }
          >
            Buy {Web3.utils.fromWei(v?.price?.toString(), "ether")} ETH
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default BuyingTicketSection;
