import React, { useEffect, useState } from "react";

const PriceInput = ({ onChange }) => {
  const [number, setNumber] = useState();
  const [inputMode, setInputMode] = useState(1);
  useEffect(() => {
    if (inputMode === 1) return;
    onChange?.(number);
    return () => {};
  }, [number, inputMode, onChange]);
  return (
    <div className="flex">
      <input
        // disabled={inputMode === 1}
        onClick={() => setInputMode(0)}
        onKeyDown={() => setInputMode(0)}
        type="number"
        name="pass"
        step={"0.0001"}
        // min={1}
        value={number}
        onChange={(e) => setNumber(Number.parseFloat(e.target.value))}
        //   {...register("price", { valueAsNumber: true })}
        placeholder="Price"
        className={`${
          inputMode === 1 ? "opacity-50" : ""
        } flex-auto w-full px-6 py-4 font-medium transition-colors border-r-0 border-gray-300 rounded-l-xl dark:bg-gray-800 dark:text-gray-50`}
      />
      <button
        className={`${
          inputMode === 1 || !number
            ? "bg-blue-500 text-gray-50"
            : "bg-white text-black opacity-50"
        } transition-colors flex-auto px-4 font-semibold border border-l-0 border-gray-300 rounded-r-xl focus:outline-none focus:bg-blue-500 focus:text-gray-50`}
        type="button"
        onClick={() => {
          onChange?.(-1);
          setInputMode(1);
        }}
      >
        Free
      </button>
    </div>
  );
};

export default PriceInput;
