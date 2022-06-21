import IconButton from "@components/IconButton";
import useBuyMarketItem from "@modules/market/hooks/mutate/useBuyMarketItem";
import useMarket from "@modules/market/hooks/query/useMarket";
import moment from "moment";
import React from "react";
import { useParams } from "react-router";
import Web3 from "web3";

const MarketDetail = () => {
  const { marketId } = useParams();
  const { data } = useMarket(marketId);
  const ticketType = data?.ticketType?.[0];
  const event = data?.event?.[0];
  const { mutate: buy } = useBuyMarketItem();
  return (
    <div className="container px-24 mx-auto space-y-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <img
            src={event?.img}
            className="w-full aspect-[16/9] rounded-xl"
            alt=""
          />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="text-gray-500">Ticket type name</div>
              <div className="text-lg font-medium">{ticketType?.name}</div>
            </div>
            <div>
              <div className="text-gray-500">Total ticket count</div>
              <div className="text-lg font-medium">
                {ticketType?.totalLimit}
              </div>
            </div>
            <div>
              <div className="text-gray-500">Original price</div>
              <div className="text-lg font-medium">
                {Web3.utils.fromWei(
                  ticketType?.price?.toString() || "0",
                  "ether"
                )}{" "}
                ETH
              </div>
            </div>
          </div>
        </div>

        <div>
          <IconButton
            className="w-full bg-blue-500 text-gray-50"
            onClick={() =>
              buy({ marketId: data?.onChainId, price: data?.price })
            }
          >
            Buy {Web3.utils.fromWei(data?.price?.toString() || "0")} ETH
          </IconButton>
        </div>
      </div>
      <div>
        <div className="text-3xl font-semibold">About the event</div>
        <div>
          <div className="space-y-3">
            <h1 className="text-2xl font-medium">Description</h1>
            <div className="space-y-8 text-gray-500 break-words dark:text-gray-300">
              {event?.desc}
              {/* <p className="font-medium leading-loose break-words">
            It is the grandiose vision of the Dream World Wide program to allow
            learning of the original Arabic language of the Quran easy to learn
            and accessible regardless of a person's language of origin. We want
            to empower as many students and teachers around the world as
            possible with our unprecedented Qur'anic language curriculum and
            hope to create a worldwide network of students that learn from each
            other and their instructions and remain connected indefinitely. Join
            us today to begin your journey!
          </p>
          <p className="font-medium leading-loose break-words">
            We want to empower as many students and teachers around the world as
            posible with our unprecedented Qur'anic language curriculum and hope
            to create a worldwide network of students that learn from each other
            and their instructions and remain connected indefinitely. Join us
            today to begin your journey!
          </p> */}
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-medium">Event Time</h1>
            <div className="space-y-4">
              <p className="font-medium leading-loose text-gray-500 dark:text-gray-300">
                Start:{" "}
                <span className="font-bold text-black dark:text-white">
                  {moment(event?.startTime).format("DD/MM/YYYY - H:MM A")}
                </span>
              </p>
              <p className="font-medium leading-loose text-gray-500 dark:text-gray-300">
                End:{" "}
                <span className="font-bold text-black dark:text-white">
                  {moment(event?.endTime).format("DD/MM/YYYY - H:MM A")}
                </span>
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="text-2xl font-medium">
              How can I contact the organizer with any question?
            </h1>
            <div className="space-y-4">
              <p className="font-medium leading-loose text-gray-500 dark:text-gray-300 editor">
                Please visit <a href="#a">www.dreamworldwide.net</a> and refer
                to the FAQ section for all questions and contact information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetail;
