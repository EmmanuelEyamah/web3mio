"use client";

import { commonProps } from "@/types/common";
import { Typography, Button, Input } from "@material-tailwind/react";
import { Space } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons"

const page = () => {
  return (
    <div className="min-h-screen gap-5 lg:gap-10 flex flex-col w-full mx-auto custom-container items-center justify-start p-5 lg:p-20">
      <div className="flex flex-col-reverse lg:flex lg:flex-row items-start gap-10">
        <div className="flex w-full lg:w-[600px] items-start flex-col">
          <Typography
            className="text-[#fff] text-[18px] lg:text-[24px]"  {...commonProps}>
            LOGIN
          </Typography>

          <form className="flex flex-col items-start w-full gap-10 mt-5 lg:mt-10">
            <Space direction="vertical" className="w-full lg:w-[400px]">
              <Typography
                className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"  {...commonProps}>
                Email
              </Typography>
              <Input
                size="lg"
                type="email"
                placeholder="john@gmail.com"
                className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}          />
            </Space>
            <Space direction="vertical" className="w-full lg:w-[400px]">
              <Typography
                className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"  {...commonProps}>
                Password
              </Typography>
              <Input
                size="lg"
                type="password"
                placeholder="******"
                className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  crossOrigin={undefined}           
              />
            </Space>
            <Button {...commonProps} variant="outlined" className="text-white border-white">
              SIGN IN
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page
