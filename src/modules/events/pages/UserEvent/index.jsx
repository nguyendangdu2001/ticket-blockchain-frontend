import { DotsVerticalIcon } from "@heroicons/react/outline";
import useUserOwnEvent from "@modules/events/hooks/query/useUserOwnEvent";
// import useUserOwnEvent from "@hooks/api/queries/useUserOwnEvent";
import React from "react";
import { Link } from "react-router-dom";
import UserEventNew from "./UserEventNew";

const UserEvent = () => {
  const { data } = useUserOwnEvent();
  const eventEdges = data?.data || [];

  return (
    <div className="container pt-3 mx-auto space-y-8">
      <h3 className="text-5xl font-bold dark:text-gray-50">My Events</h3>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-x-3 gap-y-3 dark:text-gray-50">
          <select
            name=""
            placeholder="Weekdays"
            className="flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7"
          >
            <option value="" disabled selected>
              Weekdays
            </option>
            <option value="1">Monday</option>
          </select>
          <select
            name=""
            placeholder="Event Type"
            className="flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7"
          >
            <option value="" disabled selected>
              Event Type
            </option>
          </select>
          <select
            name=""
            placeholder="Event Type"
            className="flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7"
          >
            <option value="" disabled selected>
              Any Category
            </option>
          </select>
        </div>
        {/* <button className="px-6 text-base font-bold bg-blue-600 rounded-md text-gray-50">
          Create event
        </button> */}
        <UserEventNew />
      </div>
      <div className="space-y-4 font-medium">
        {eventEdges?.map((node, i) => (
          <Link
            to={`/user-event/${node?._id}`}
            className="grid items-center grid-cols-12 p-2 space-x-5 bg-white rounded-lg shadow dark:bg-gray-900 gap-y-2"
          >
            <div className="col-start-1 col-end-4 md:col-end-2">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={
                    node?.img || `https://picsum.photos/100/100.jpg?random=${i}`
                  }
                  alt=""
                  className="absolute object-cover w-full h-full rounded-md"
                />
              </div>
            </div>
            <div className="col-start-4 col-end-10 space-y-2 md:col-start-2 md:col-end-7">
              <div className="text-xl font-bold dark:text-gray-50">
                {node?.name}
              </div>
              <div className="text-gray-500">{node?.locationName}</div>
            </div>

            <div className="col-span-9 space-y-4 md:col-span-3">
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Sold</div>
                <div className="dark:text-gray-300">
                  <span className="font-bold dark:text-gray-50">50</span>/
                  <span className="dark:text-gray-300">
                    {node?.slot || "Unlimited"}
                  </span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
                <div className="w-1/2 h-full overflow-hidden bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="col-span-2"></div>
            <div className="flex justify-end col-start-10 col-end-13 row-start-1 row-end-2 md:col-start-12">
              <div className="p-3">
                <DotsVerticalIcon className="w-8 h-8 text-gray-500" />
              </div>
            </div>
          </Link>
        ))}
        {/* {[...Array(9)].map((_, i) => (
          <div className="flex items-center p-2 space-x-5 bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="w-1/12">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={`https://picsum.photos/100/100.jpg?random=${i}`}
                  alt=""
                  className="absolute object-cover w-full h-full rounded-md"
                />
              </div>
            </div>
            <div className="w-4/12 space-y-2">
              <div className="text-xl font-bold dark:text-gray-50">Name</div>
              <div className="text-gray-500">Location</div>
            </div>
            <div className="w-1/12 space-y-2">
              <div className="text-gray-500">Price</div>
              <div className="text-xl font-bold dark:text-gray-50">Free</div>
            </div>
            <div className="w-3/12 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Sold</div>
                <div className="dark:text-gray-300">
                  <span className="font-bold dark:text-gray-50">50</span>/
                  <span className="dark:text-gray-300">100</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
                <div className="w-1/2 h-full overflow-hidden bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="w-2/12"></div>
            <div className="flex justify-end w-1/12">
              <div className="p-3">
                <DotsVerticalIcon className="w-8 h-8 text-gray-500" />
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default UserEvent;
