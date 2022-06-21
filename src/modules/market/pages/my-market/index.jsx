import useMyMakets from "@modules/market/hooks/query/useMyMarket";
import React from "react";
import MarketItem from "../martket/MarketItem";

const MyMarket = () => {
  const { data } = useMyMakets();
  return (
    <div className="container pt-3 mx-auto space-y-8">
      <h3 className="text-5xl font-bold dark:text-gray-50">My market</h3>
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

export default MyMarket;
