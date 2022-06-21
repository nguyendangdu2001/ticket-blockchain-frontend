import {
  HeartIcon,
  LocationMarkerIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import moment from "moment";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";

const MarketItem = ({ marketItem }, ref) => {
  const event = marketItem?.event?.[0];
  const ticketType = marketItem?.ticketType?.[0];
  return (
    <Link
      ref={ref}
      to={`/market/detail/${marketItem?.id}`}
      className="block overflow-hidden duration-200 ease-in-out rounded-lg shadow-md event-item group dark:bg-gray-900 dark:hover:bg-gray-800 transform-gpu hover:-translate-y-3 hover:shadow-xl transition-allt"
    >
      <div
        className="flex items-start justify-between p-6 bg-no-repeat bg-cover img h-52 filter dark:contrast-125"
        style={{ backgroundImage: `url(${event?.img})` }}
      >
        <div className="flex items-center h-10 px-3 font-semibold uppercase bg-white rounded-md price">
          {marketItem?.price === 0
            ? "Free"
            : `${Web3.utils.fromWei(
                marketItem?.price?.toString(),
                "ether"
              )} ETH`}
        </div>
        <div className="flex space-x-3 action">
          <div className="w-10 h-10 p-2 transition-all duration-500 ease-in-out translate-y-3 bg-white rounded-full opacity-0 love transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
            <HeartIcon />
          </div>
          <div className="w-10 h-10 p-2 transition-all duration-500 ease-in-out delay-100 translate-y-3 bg-white rounded-full opacity-0 upload transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
            <UploadIcon />
          </div>
        </div>
      </div>
      <div className="px-6 py-6 divide-y divide-gray-300 content">
        <div className="flex py-3 space-x-4">
          <div className="mb-auto overflow-hidden text-center bg-gray-200 rounded-lg shadow day dark:bg-gray-600 dark:text-gray-50">
            <div className="px-5 py-1 text-sm font-medium uppercase bg-red-400 month text-gray-50">
              {moment(event?.startTime).format("MMMM")?.substring(0, 3)}
            </div>
            <div className="p-3 text-xl font-bold day h-[52px]">
              {" "}
              {moment(event?.startTime).format("DD")}
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-lg font-semibold title dark:text-white">
              {event?.name}
            </div>
            {/* <div className="flex items-center space-x-1 font-medium dark:text-gray-400">
              <img
                src={`https://i.pravatar.cc/50?u=${id}`}
                alt=""
                className="rounded-full w-9 h-9"
              />
              <span>{!!host?.name ? host.name : "Someone"}</span>
            </div> */}
          </div>
        </div>
        <div className="flex py-3 space-x-1 text-gray-600 dark:text-gray-400">
          <LocationMarkerIcon className="w-5 h-5" />
          <span>{event?.locationName || "Some where"}</span>
        </div>
        <div>Ticket type: {ticketType?.name}</div>
        <div>
          original price:{" "}
          {Web3.utils.fromWei(ticketType?.price?.toString(), "ether")} ETH
        </div>
      </div>
    </Link>
  );
};

export default forwardRef(MarketItem);
