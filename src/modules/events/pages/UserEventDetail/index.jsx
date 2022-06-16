import CustomePageHeader from "@components/CustomePageHeader";
import IconButton from "@components/IconButton";
import ModalSection from "@components/ModalSection";
import { PencilAltIcon, PlusIcon, QrcodeIcon } from "@heroicons/react/outline";
import TicketTypeForm from "@modules/events/components/TicketTypeForm";
import useUpdateEvent from "@modules/events/hooks/mutate/useUpdateEvent";
import useGetEvent from "@modules/events/hooks/query/useGetEvent";
import useCreateTicketType from "@modules/ticket-type/hooks/mutate/useCreateTicketType";
import useGetTicketType from "@modules/ticket-type/hooks/query/useGetTicketType";
import { Tag } from "antd";
import moment from "moment";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Web3 from "web3";

const UserEventDetail = () => {
  const { eventId } = useParams();
  const { data } = useGetEvent(eventId);
  const { data: ticketType } = useGetTicketType(eventId);
  const { mutate: update } = useUpdateEvent(eventId);
  const { mutate: createTicketType } = useCreateTicketType(
    eventId,
    data?.onChainId
  );
  const onCreate = (values) => {
    console.log(values);
    // return;
    createTicketType(values);
  };
  return (
    <div className="container pt-3 mx-auto space-y-8">
      <CustomePageHeader
        title="Event"
        extra={[
          <Link to={`/user-event/${eventId}/scan`}>
            <IconButton
              className="bg-blue-500 text-gray-50"
              icon={<QrcodeIcon />}
            >
              Scan
            </IconButton>
          </Link>,
        ]}
      />
      <div className="grid w-full grid-cols-2 gap-x-4">
        <div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium">Infomation</div>
            <IconButton
              icon={<PencilAltIcon />}
              className="bg-green-500 text-gray-50"
            >
              Update
            </IconButton>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="font-medium text-md">Name</div>
              <div>{data?.name}</div>
            </div>
            <div>
              <div className="font-medium text-md"> Start time</div>
              <div>{moment(data?.startTime).format("DD/MM/YYYY")}</div>
            </div>
            <div>
              <div className="font-medium text-md">End time</div>
              <div>{moment(data?.endTime).format("DD/MM/YYYY")}</div>
            </div>
            <div>
              <div className="font-medium text-md">Location</div>
              <div>{data?.locationName}</div>
            </div>
            <div>
              <div className="font-medium text-md">Tags</div>
              <div>
                {data?.tags?.map((v, i) => (
                  <Tag>{v?.name}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium">TicketType</div>
            <ModalSection
              button={({ open }) => (
                <IconButton
                  onClick={open}
                  icon={<PlusIcon className="w-5 h-5" />}
                  className="bg-green-500 text-gray-50"
                >
                  New
                </IconButton>
              )}
              size={"2xl"}
              section={({ close }) => (
                <TicketTypeForm onSubmit={onCreate} onCancel={close} />
              )}
              title="New Ticket Type Form"
            />
          </div>

          <div className="space-y-3">
            {ticketType?.data?.map((v) => (
              <div className="w-full p-4 bg-blue-500 rounded-lg shadow text-gray-50">
                <div className="text-lg font-semibold">{v?.name}</div>
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">Selling Time</div>
                    <div>
                      {moment(data?.startSellingTime).format("DD/MM/YYYY")} -{" "}
                      {moment(data?.endSellingTime).format("DD/MM/YYYY")}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Price</div>
                    <div>
                      {Web3.utils.fromWei(v?.price?.toString(), "ether")} ETH
                    </div>
                  </div>{" "}
                  <div>
                    <div className="font-medium">Limit</div>
                    <div>
                      {v?.totalLimit}/{v?.currentLimit} Tickets
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEventDetail;
