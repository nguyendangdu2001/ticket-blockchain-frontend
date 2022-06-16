import { getEvent, getEvents, getMyEvent } from "@modules/events/services";
import { useQuery } from "react-query";

const useGetEvents = () => {
  return useQuery(["events"], async () => {
    const { data } = await getEvents();
    return data;
  });
};

export default useGetEvents;
