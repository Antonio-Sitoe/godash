import React from "react";
import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps,
} from "@chakra-ui/react";

interface InterInputProps extends InputProps {
  label?: string;
  name: string;
  type: string;
}

function Input({ label, name, type, ...props }: InterInputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackraInput
        id={name}
        name={name}
        type={type}
        {...props}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        size={"lg"}
        _hover={{ bgColor: "gray.900" }}
      />
    </FormControl>
  );
}

export default Input;
