import { useAppSelector } from "@hooks/reduxHook";
import { getMyMarkets } from "@modules/market/services";
import { useQuery } from "react-query";

const useMyMakets = () => {
  const account = useAppSelector((state) => state.auth.account);
  return useQuery(["my-market", account], async () => {
    const { data } = await getMyMarkets();
    return data;
  });
};

export default useMyMakets;
