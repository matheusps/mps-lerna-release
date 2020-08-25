import React, { Ref } from "react";

export const Button = React.forwardRef(
  (props: any, ref: Ref<HTMLButtonElement>) => {
    return <button ref={ref} {...props} />;
  }
);
