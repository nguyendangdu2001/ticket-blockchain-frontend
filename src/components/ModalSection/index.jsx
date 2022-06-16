import useModal from "@hooks/useModal";
import React from "react";
import CustomModal from "@components/CustomModal";
const ModalSection = ({
  button,
  section,
  title,
  showFooter,
  size,
  isOpen,
  setIsOpen,
}) => {
  const {
    close: closeDefault,
    isOpen: isOpenDefaut,
    open: openDefault,
  } = useModal();
  const isManual = isOpen !== undefined && setIsOpen !== undefined;
  const openProp = isManual ? isOpen : isOpenDefaut;
  const openFunc = isManual ? () => setIsOpen(true) : openDefault;
  const closeFunc = isManual ? () => setIsOpen(false) : closeDefault;
  return (
    <>
      {button?.({ open: openFunc }) || (
        <button className="flex items-center opacity-70" onClick={openFunc}>
          Edit
        </button>
      )}
      {/* <div className="flex items-baseline space-x-1"></div> */}
      <CustomModal
        size={size}
        title={title}
        close={closeFunc}
        isOpen={openProp}
        showFooter={showFooter}
      >
        {React.isValidElement(section)
          ? section
          : section?.({ close: closeFunc })}
      </CustomModal>
    </>
  );
};

export default ModalSection;
