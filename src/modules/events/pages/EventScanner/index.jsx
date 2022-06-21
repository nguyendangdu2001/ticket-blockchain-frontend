import useScanTicket from "@modules/ticket/hooks/mutate/useScanTicket";
import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useParams } from "react-router";

const EventScanner = () => {
  const { eventId } = useParams();

  const {
    mutate: scan,
    isLoading,
    data: scannedTicket,
    reset,
  } = useScanTicket(eventId);
  useEffect(() => {
    let to;
    if (scannedTicket) to = setTimeout(reset, 2000);

    return () => {
      clearInterval(to);
    };
  }, [reset, scannedTicket]);

  return (
    <div className="mx-auto w-[800px]">
      <QrReader
        onResult={(result, error) => {
          if (isLoading) return;
          const data = JSON.parse(result);
          scan(data);
        }}
        style={{ width: "100%" }}
      />
      {scannedTicket && (
        <div>Type of ticket: {scannedTicket?.typeTicket?.[0]?.name}</div>
      )}
    </div>
  );
};

export default EventScanner;
