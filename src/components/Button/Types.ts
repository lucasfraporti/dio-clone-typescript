import React from "react";

export interface IButton {
  children?: React.ReactNode;
  title: string;
  variant?: string;
  onClick?: () => void;
  type?: string;
}

export interface IButtonStyled {
  variant?: string;
}
