// import EventItem from "@components/EventItem/EventItem";
import React, { useEffect } from "react";
import { fakeData } from "@data/fakeData";
import { useRef } from "react";
import EventItem from "../EventItem/EventItem";
import useGetEvents from "@modules/events/hooks/query/useGetEvents";

const UpcomingEventSection = () => {
  const eventContainer = useRef(null);
  const { data: events } = useGetEvents();

  return (
    <div className="py-6 space-y-20 upcoming-event">
      <div className="flex flex-col space-y-8 header lg:justify-between lg:items-center lg:flex-row lg:space-y-0">
        <h1 className="text-3xl font-bold dark:text-white sp-header">
          Upcoming Event
        </h1>
        <div className="flex flex-wrap gap-x-3 gap-y-3">
          <select
            name=""
            placeholder="Weekdays"
            defaultValue=""
            className="flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7"
          >
            <option value="" disabled>
              Weekdays
            </option>
            <option value="1">Monday</option>
          </select>
          <select
            name=""
            placeholder="Event Type"
            className="flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7"
            defaultValue=""
          >
            <option value="" disabled>
              Event Type
            </option>
          </select>
          <select
            name=""
            placeholder="Event Type"
            defaultValue=""
            className="flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7"
          >
            <option value="" disabled>
              Any Category
            </option>
          </select>
        </div>
      </div>
      <div
        className="grid grid-flow-row grid-cols-1 event-list md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-10"
        ref={eventContainer}
      >
        {events?.data?.map((_, i) => (
          <EventItem
            key={i}
            {..._}
            // ref={(el) => (eventItems.current[i] = el)}
          />
        ))}
      </div>
      <div className="flex items-center justify-center load-more">
        <div className="px-6 py-4 text-lg font-bold text-blue-600 bg-gray-200 load-more__btn rounded-xl">
          Load More Event
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventSection;
