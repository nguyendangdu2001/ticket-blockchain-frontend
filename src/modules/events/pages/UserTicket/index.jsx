import useGetTicket from "@modules/ticket/hooks/query/useGetTicket";
import React from "react";
import TicketItem from "./TicketItem";

const UserTicket = () => {
  const { data } = useGetTicket();
  return (
    <div className="container pt-3 mx-auto space-y-8">
      <h3 className="text-5xl font-bold dark:text-gray-50">My Tickets</h3>
      <div className="flex justify-between"></div>
      <div className="space-y-4 font-medium">
        {data?.data?.map((v) => (
          <TicketItem ticket={v} />
        ))}
        {/* {eventEdges?.map((node, i) => (
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
        ))} */}
      </div>
    </div>
  );
};

export default UserTicket;
