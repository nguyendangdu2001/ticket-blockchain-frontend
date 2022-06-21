import { getMarkets } from "@modules/market/services";
import React from "react";
import { useQuery } from "react-query";

const useMarkets = () => {
  return useQuery(["market"], async () => {
    const { data } = await getMarkets();
    return data;
  });
};

export default useMarkets;
