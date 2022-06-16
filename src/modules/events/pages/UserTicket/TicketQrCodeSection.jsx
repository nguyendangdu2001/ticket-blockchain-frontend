import React from "react";
import QRCode from "react-qr-code";

const TicketQrCodeSection = ({ ticketId }) => {
  return (
    <div>
      <div className="flex p-2 mx-auto border-2 border-blue-500 rounded-xl w-fit">
        <QRCode value={ticketId} />
      </div>
      <div className="mx-auto font-semibold text-center">
        Using this to enter the event
      </div>
    </div>
  );
};

export default TicketQrCodeSection;
