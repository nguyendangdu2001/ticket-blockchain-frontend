import IconButton from "@components/IconButton";
import Input from "@components/Input";
import PriceInput from "@modules/events/pages/UserEvent/UserEventNew/UserEventModal/PriceInput";
import SlotInput from "@modules/events/pages/UserEvent/UserEventNew/UserEventModal/SlotInput";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const TicketTypeForm = ({
  onSubmit,
  onCancel,
  initialData = {},
  title,
  okText,
}) => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: initialData,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4">
        <Input {...register("name")} label="Name" />
        <Input {...register("desc")} label="Description" />
        <Input
          {...register("startSellingTime", {
            setValueAs: (v) => new Date(v).getTime(),
          })}
          type="date"
          label="Start Selling Time"
        />
        <Input
          {...register("endSellingTime", {
            setValueAs: (v) => new Date(v).getTime(),
          })}
          type="date"
          label="End Selling Time"
        />
        <div className="flex-1 space-y-2">
          <div className="">
            <label htmlFor="pass" className="font-semibold dark:text-gray-50">
              Price
            </label>
          </div>
          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, value } }) => (
              <PriceInput onChange={onChange} />
            )}
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="">
            <label htmlFor="pass" className="font-semibold dark:text-gray-50">
              Limit
            </label>
          </div>
          <Controller
            control={control}
            name="slot"
            render={({ field: { onChange, value } }) => (
              <SlotInput onChange={onChange} />
            )}
          />
        </div>
      </div>
      <div className="flex items-center justify-end">
        <IconButton type="button" onClick={onCancel}>
          Cancel
        </IconButton>
        <IconButton>Submit</IconButton>
      </div>
    </form>
  );
};

export default TicketTypeForm;
