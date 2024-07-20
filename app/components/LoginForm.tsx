"use client";

import React, { useState } from "react";
import { commonProps } from "@/types/common";
import { Typography, Button, Input } from "@material-tailwind/react";
import { Space } from "antd";

const LoginForm = () => {
  return (
    <div className="flex w-full lg:w-[600px] items-start flex-col">
      <Typography
        className="text-[#fff] text-[18px] lg:text-[24px]"
        {...commonProps}
      >
        LOGIN
      </Typography>

      <form className="flex flex-col items-start w-full gap-10 mt-5 lg:mt-10">
        <Space direction="vertical" className="w-full lg:w-[400px]">
          <Typography
            className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"
            {...commonProps}
          >
            Email
          </Typography>
          <Input
            size="lg"
            type="email"
            name="email"
            placeholder="john@gmail.com"
            className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </Space>
        <Space direction="vertical" className="w-full lg:w-[400px]">
          <Typography
            className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"
            {...commonProps}
          >
            Password
          </Typography>
          <Input
            size="lg"
            type="password"
            name="password"
            placeholder="******"
            className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </Space>

        <Button
          {...commonProps}
          variant="outlined"
          type="submit"
          className="text-white border-white"
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
