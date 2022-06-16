import useGetEvent from "@modules/events/hooks/query/useGetEvent";
import moment from "moment";
import React from "react";
import { useParams } from "react-router";

const AboutTab = () => {
  const { id } = useParams();
  const { data } = useGetEvent(id);
  return (
    <>
      <div className="space-y-8">
        <h1 className="header">Description</h1>
        <div className="space-y-8 text-gray-500 break-words dark:text-gray-300">
          {data?.desc}
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
      <div className="space-y-8">
        <h1 className="header">Event Time</h1>
        <div className="space-y-4">
          <p className="font-medium leading-loose text-gray-500 dark:text-gray-300">
            Start:{" "}
            <span className="font-bold text-black dark:text-white">
              {moment(data?.startTime).format("DD/MM/YYYY - H:MM A")}
            </span>
          </p>
          <p className="font-medium leading-loose text-gray-500 dark:text-gray-300">
            End:{" "}
            <span className="font-bold text-black dark:text-white">
              {moment(data?.endTime).format("DD/MM/YYYY - H:MM A")}
            </span>
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <h1 className="header">
          How can I contact the organizer with any question?
        </h1>
        <div className="space-y-4">
          <p className="font-medium leading-loose text-gray-500 dark:text-gray-300 editor">
            Please visit <a href="#a">www.dreamworldwide.net</a> and refer to
            the FAQ section for all questions and contact information.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutTab;
