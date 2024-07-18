"use client";

import { register } from "@/app/actions/register";
import { commonProps } from "@/types/common";
import { Typography, Button, Input } from "@material-tailwind/react";
import { Space } from "antd";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const page = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      username,
      email,
      password,
    };

    await register(formData);
    setLoading(false);

    setUsername("");
    setEmail("");
    setPassword("");

    router.push("/access");

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="min-h-screen gap-5 lg:gap-10 flex flex-col w-full mx-auto custom-container items-center justify-start p-5 lg:p-20">
      <div className="flex flex-col-reverse lg:flex lg:flex-row items-start gap-10">
        <div className="flex w-full lg:w-[600px] items-start flex-col">
          <Typography
            className="text-[#fff] text-[18px] lg:text-[24px]"
            {...commonProps}
          >
            Register
          </Typography>

          <form
            ref={formRef}
            onSubmit={handleSave}
            className="flex flex-col items-start w-full gap-10 mt-5 lg:mt-10"
          >
            <Space direction="vertical" className="w-full lg:w-[400px]">
              <Typography
                className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"
                {...commonProps}
              >
                Username
              </Typography>
              <Input
                size="lg"
                type="text"
                placeholder="web3mio"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                Email
              </Typography>
              <Input
                size="lg"
                type="email"
                placeholder="john@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              type="submit"
              variant="outlined"
              className="text-white border-white"
            >
              {loading ? "Submitting..." : "Register"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
