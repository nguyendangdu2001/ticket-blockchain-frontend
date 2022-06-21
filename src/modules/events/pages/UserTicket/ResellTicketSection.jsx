import IconButton from "@components/IconButton";
import Input from "@components/Input";
import useResaleTicket from "@modules/market/hooks/mutate/useResaleTicket";
import React from "react";
import { useForm } from "react-hook-form";

const ResellTicketSection = ({ tokenId }) => {
  const { register, handleSubmit } = useForm();
  const { mutate: resell } = useResaleTicket();

  return (
    <form
      onSubmit={handleSubmit((data) => resell({ tokenId, price: data?.price }))}
    >
      <Input
        type={"number"}
        min={0.0001}
        step={"0.0001"}
        label="Price"
        {...register("price")}
      />
      <IconButton>Sell</IconButton>
    </form>
  );
};

export default ResellTicketSection;
