import React, { Ref } from "react";

export const Input = React.forwardRef(
  (props: any, ref: Ref<HTMLInputElement>) => {
    return <input ref={ref} {...props} />;
  }
);
