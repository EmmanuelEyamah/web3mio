"use client";

import { Typography, Button } from "@material-tailwind/react";
import { FC } from "react";
import { commonProps } from "@/types/common";

export interface AboutProps {}
export const About: FC<AboutProps> = () => {
  return (
    <div
      className="mx-auto container w-full h-full lg:h-[750px] flex flex-col justify-center gap-10 items-center p-3 lg:py-10"
      id="about"
    >
      <Typography
        className="text-[#fff] text-[20px] lg:text-[32px]"
        {...commonProps}
      >
        ABOUT ME
      </Typography>
      <div className="flex flex-col lg:flex lg:flex-row items-start w-full h-full gap-10">
        <div className="w-full lg:w-[500px] h-full border-2 border-[#fff] shadow-lg">
          <img
            src="/assets/photo.png"
            className="w-full h-full object-cover"
            alt="Photo"
          />
        </div>
        <div className="w-full lg:w-[60%] flex items-start justify-start h-full flex-col gap-12">
          <div>
            <Typography
              className="text-[#FCFCF7] text-[20px] lg:text-[28px]"
              {...commonProps}
            >
              My Background
            </Typography>
            <Typography
              className="text-[#F7F7FCB3] font-normal text-[14px] lg:text-[18px]"
              {...commonProps}
            >
              My experience in the web3 rabbit hole started with a leap into
              Web3 research & content writing 4 years back. However, I found
              that I have a strong desire to get my hands dirty with smart
              contract development, security vulnerabilities & audit, EVM L2,
              and other web3-centric conversations. <br /> This array of
              conscious choices has equipped me, over the years, with the
              requisite skills and knowledge that help me create intuitive,
              usable, and efficient technical content.
            </Typography>
          </div>
          <div>
            <Typography
              className="text-[#FCFCF7] text-[20px] lg:text-[28px]"
              {...commonProps}
            >
              Skills & Technologies
            </Typography>
            <Typography
              className="text-[#F7F7FCB3] font-normal text-[14px] lg:text-[18px]"
              {...commonProps}
            >
              Proficient in utilizing technical writing tools, such as MS Word
              and Adobe Acrobat RoboHelp, as well as MadCap Flare and SnagIt.
              Excellent with graphics software, including Figma, Adobe
              Illustrator, Photoshop, Microsoft Visio, and Canva. Database
              software, CMS/LMS, and API documentation software such as Postman
              and Swagger. <br /> Documentation: Docs-as-code Documentation,
              Document permission & source Control, AP Style, Knowledge-base
              Management, intuitive UX writing, on-chain & 0ff-chain data
              analysis. <br /> <br />
              Technologies & Tools: web3.JS, Rust, Rust, Solidity, Foundry,
              Slither, LaTeX, GraphQL, Markdown, REST, Postman, Swagger, MadCap
              Flare, Github/Gitbook, CMS, Figma, Notion.
            </Typography>
          </div>
          <Button
            onClick={() => {
              window.location.href = "mailto:mayowaweb3writer@gmail.com";
            }}
            {...commonProps}
            variant="outlined"
            className="text-white border-white"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
