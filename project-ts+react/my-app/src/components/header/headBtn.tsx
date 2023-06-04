import { FC } from "react";
import { HeadBtnProps } from "../../types/headerTypes/HeadBtnProps";
import {
  SignUpButton,
  LoginButton
} from "./styleHeader.style";

export const HeadBtn: FC<HeadBtnProps> = ({ nameBtn, title, id, onClick }) => {
  return (
    <>

      {nameBtn === "login-btn" ? (

        <LoginButton
          className={nameBtn}
          key={id}
          onClick={onClick}
        >
          {title}
        </LoginButton>
      ) : (

        <SignUpButton
          className={nameBtn}
          key={id}
          onClick={onClick}
        >
          {title}
        </SignUpButton>

      )}

    </>

  );
};
