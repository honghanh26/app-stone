import { ReactNode } from "react";

export interface TitleProps {
  title: string;
}

export interface ItemProps {
  title: string,
  img?: string,
  desc?: string,
  date?: string,
  zoom?: boolean
}

export interface WidgetProps {
  title: string,
  containerStyles: string,
  children?: ReactNode
}