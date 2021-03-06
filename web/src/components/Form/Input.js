import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { InputStyled } from "./styles";

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);
  return <InputStyled ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
