import React from "react";

import { FormControl, InputLabel, Input } from "@mui/material";

export default function CustomInput(props) {
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    name,
    // error,
    // white,
    // inputRootCustomClasses,
    // success,
    handleChange,
    type,
  } = props;

  return (
    <FormControl {...formControlProps} sx={{ my: 2 }}>
      {labelText !== undefined && (
        <InputLabel htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel>
      )}
      <Input
        id={id}
        onChange={handleChange}
        {...inputProps}
        type={type}
        name={name}
      />
    </FormControl>
  );
}
