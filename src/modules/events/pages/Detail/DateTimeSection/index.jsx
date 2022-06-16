// import AddIcon from "@icon/AddIcon";

import ModalSection from "@components/ModalSection";
import { PlusIcon } from "@heroicons/react/outline";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BuyingTicketSection from "../BuyingTicketSection";

const DateTimeSection = ({ eventId }) => {
  const container = useRef(null);
  const button1 = useRef(null);
  const button1Text = useRef(null);
  const button2 = useRef(null);
  const button2Text = useRef(null);

  const title = useRef(null);
  const date = useRef(null);
  const addToCalendar = useRef(null);

  return (
    <div
      className="p-10 space-y-10 bg-white rounded-lg dark:bg-gray-700"
      ref={container}
    >
      <div className="space-y-4">
        <div className="text-xl font-bold dark:text-white" ref={title}>
          Date & Time
        </div>
        <div
          className="text-lg font-medium text-gray-500 date dark:text-gray-300"
          ref={date}
        >
          Saturday, Sep 14, 2019 at 20:30 PM
        </div>
        <div
          className="flex font-bold text-blue-600 add-to-calendar dark:text-blue-400 gap-x-2"
          ref={addToCalendar}
        >
          <div className="items-center w-6 h-6">
            <PlusIcon />
          </div>{" "}
          Add to Calendar
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <ModalSection
          button={({ open }) => (
            <button
              onClick={open}
              className="flex justify-center px-6 py-5 text-base font-semibold text-white bg-blue-600 rounded-xl min-w-[300px]"
              ref={button1}
            >
              <span ref={button1Text} className="whitespace-nowrap">
                Book now
              </span>
            </button>
          )}
          section={<BuyingTicketSection eventId={eventId} />}
        />

        <button
          className="px-6 py-5 text-base font-semibold bg-gray-200 rounded-xl min-w-[300px]"
          ref={button2}
        >
          <span ref={button2Text} className="whitespace-nowrap">
            Promote Program
          </span>
        </button>
      </div>
      <div className="text-center text-gray-500 refund dark:text-gray-300">
        No refund
      </div>
    </div>
  );
};

export default DateTimeSection;
