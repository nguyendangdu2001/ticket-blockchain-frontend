import { getEvent, getMyEvent } from "@modules/events/services";
import { useQuery } from "react-query";

const useGetEvent = (eventId) => {
  return useQuery(["event", eventId], async () => {
    const { data } = await getEvent(eventId);
    return data;
  });
};

export default useGetEvent;
