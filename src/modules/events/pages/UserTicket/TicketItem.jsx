import IconButton from "@components/IconButton";
import ModalSection from "@components/ModalSection";
import { QrcodeIcon, ScaleIcon } from "@heroicons/react/outline";
import useResaleTicket from "@modules/market/hooks/mutate/useResaleTicket";
import moment from "moment";
import React from "react";
import ResellTicketSection from "./ResellTicketSection";
import TicketQrCodeSection from "./TicketQrCodeSection";

const TicketItem = ({ ticket }) => {
  const event = ticket?.event?.[0];

  const ticketType = ticket?.ticketType?.[0];
  return (
    <div className="flex w-full space-x-2">
      <div className="w-1/3">
        <div>{ticketType?.name}</div>
        <div>Buying at: {moment(ticket?.createdAt).format("DD/MM/YYYY")}</div>
      </div>
      <div className="flex w-1/3 space-x-2">
        <div>
          <div>Event</div>
          <div>{event?.name}</div>
          <div>Start time: {moment(event?.startTime).format("DD/MM/YYYY")}</div>
          <div>Location: {event?.locationName}</div>
        </div>
        <img className="h-full w-[100px]" src={event?.img} alt="" />
      </div>
      <div className="w-[80px] space-y-2 self-end ml-auto">
        {!ticket?.scanned && (
          <ModalSection
            section={
              <TicketQrCodeSection
                nonce={ticket?.nonce}
                ticketId={ticket?._id}
              />
            }
            button={({ open }) => (
              <IconButton
                onClick={open}
                icon={<QrcodeIcon />}
                className="w-full bg-green-500 text-gray-50"
              >
                Scan
              </IconButton>
            )}
          />
        )}
        {ticket?.scanned && (
          <IconButton
            // onClick={open}
            icon={<QrcodeIcon />}
            className="w-full bg-blue-500 text-gray-50"
          >
            Scanned
          </IconButton>
        )}
        <ModalSection
          button={({ open }) => (
            <IconButton
              icon={<ScaleIcon />}
              onClick={open}
              className="w-full bg-green-500 text-gray-50"
            >
              Sell
            </IconButton>
          )}
          section={<ResellTicketSection tokenId={ticket?.onChainId} />}
        />
      </div>
    </div>
  );
};

export default TicketItem;
