"use client";

import { FC } from "react";
import { commonProps } from "@/types/common";
import { Typography } from "@material-tailwind/react";

export interface TypographyProps {
  label: string | string[];
  color?: string;
  fontSizeSmall?: string;
  fontSizeLarge?: string;
  className?: string;
}

export const TTypography: FC<TypographyProps> = ({
  label,
  color,
  fontSizeSmall,
  fontSizeLarge,
  className,
}) => {
  const renderLabels = () => {
    if (Array.isArray(label)) {
      return label.map((item, index) => (
        <Typography
          key={index}
          className={`${color ?? "text-[#F7F7FC]"} ${
            fontSizeSmall ?? "text-[21px]"
          } ${fontSizeLarge ?? "lg:text-[32px]"} ${className}`}
          {...commonProps}
        >
          {item}
        </Typography>
      ));
    } else {
      return (
        <Typography
          className={`${color ?? "text-[#F7F7FC]"} ${
            fontSizeSmall ?? "text-[21px]"
          } ${fontSizeLarge ?? "lg:text-[32px]"} ${className}`}
          {...commonProps}
        >
          {label}
        </Typography>
      );
    }
  };

  return <>{renderLabels()}</>;
};
