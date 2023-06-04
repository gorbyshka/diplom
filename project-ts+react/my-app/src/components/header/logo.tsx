import { FC } from "react";
import { LogoProps } from "../../types/headerTypes/LogoProps";
import { WrapperLogo } from "./styleHeader.style"

export const Logo: FC<LogoProps> = ({ image, id }) => {
  return <WrapperLogo src={image} key={id} alt={image}/>;
};