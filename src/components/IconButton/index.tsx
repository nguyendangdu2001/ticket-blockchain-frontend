import classNames from "classnames";
import React, { ReactElement } from "react";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
}
const IconButton = ({ icon, className, children, ...rest }: Props) => {
  return (
    <button className={classNames("icon-button", className)} {...rest}>
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
};

export default IconButton;
