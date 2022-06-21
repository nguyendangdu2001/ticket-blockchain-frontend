import { DotsVerticalIcon } from "@heroicons/react/outline";
import useUserOwnEvent from "@modules/events/hooks/query/useUserOwnEvent";
import useMarkets from "@modules/market/hooks/query/useMakets";
// import useUserOwnEvent from "@hooks/api/queries/useUserOwnEvent";
import React from "react";
import { Link } from "react-router-dom";
import MarketItem from "./MarketItem";

const Market = () => {
  const { data } = useMarkets();

  return (
    <div className="container pt-3 mx-auto space-y-8">
      <h3 className="text-5xl font-bold dark:text-gray-50">Marketplace</h3>
      <div className="container px-3 lg:px-24">
        <div className="grid grid-cols-3 gap-2">
          {data?.data?.map((v) => (
            <MarketItem marketItem={v} />
          ))}
        </div>
      </div>

      <div className="space-y-4 font-medium"></div>
    </div>
  );
};

export default Market;
