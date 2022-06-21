import { useAppSelector } from "@hooks/reduxHook";
import { getMyEvent } from "@modules/events/services";
import { useQuery } from "react-query";

const useUserOwnEvent = () => {
  const account = useAppSelector((state) => state.auth.account);
  return useQuery(["my-event", account], async () => {
    const { data } = await getMyEvent();
    return data;
  });
};

export default useUserOwnEvent;
