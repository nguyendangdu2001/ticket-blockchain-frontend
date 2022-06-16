import { getMyEvent } from "@modules/events/services";
import { useQuery } from "react-query";

const useUserOwnEvent = () => {
  return useQuery(["my-event"], async () => {
    const { data } = await getMyEvent();
    return data;
  });
};

export default useUserOwnEvent;
