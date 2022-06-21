import { getMarket, getMarkets } from "@modules/market/services";
import React from "react";
import { useQuery } from "react-query";

const useMarket = (marketId) => {
  return useQuery(["market", marketId], async () => {
    const { data } = await getMarket(marketId);
    return data;
  });
};

export default useMarket;
