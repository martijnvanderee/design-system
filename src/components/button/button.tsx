import React from "react";

import { Button as ButtonChakra } from '@chakra-ui/react'

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <ButtonChakra>martijn {props.label}</ButtonChakra>;
};

export default Button;