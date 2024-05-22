"use client"

import { Typography, Button } from "@material-tailwind/react";
import { FC } from "react";
import { commonProps } from "@/types/common";

export interface AboutProps {}
export const About: FC<AboutProps> = () => {

  return (
    <div className="mx-auto container w-full h-full lg:h-[750px] flex flex-col justify-center gap-10 items-center p-3 lg:py-10" id="about">
        <Typography
          className="text-[#fff] text-[20px] lg:text-[32px]"  {...commonProps}>
          ABOUT ME
        </Typography>
        <div className="flex flex-col lg:flex lg:flex-row items-start w-full h-full gap-10">
          <div className="w-full lg:w-[500px] h-full border-2 border-[#fff] shadow-lg">
            <img src="/assets/photo.png" className="w-full h-full object-cover" alt="Photo" />
          </div>
          <div className="w-full lg:w-[60%] flex items-start justify-start h-full flex-col gap-12">
            <div>
              <Typography
                className="text-[#FCFCF7] text-[20px] lg:text-[28px]"  {...commonProps}>
                My Background
              </Typography>
              <Typography
                className="text-[#F7F7FCB3] font-normal text-[14px] lg:text-[18px]"  {...commonProps}>
                  My experience in the web3 rabbit hole started with a leap into Web3 research & content writing 4 years back. However, my background in Process engineering and Software development fostered my interest in technical communications. <br /> This array of conscious choices has equipped me, over the years, with the requisite skills and knowledge that help me bridge the gap between technical concepts and simplicity.
              </Typography>
            </div>
            <div>
              <Typography
                className="text-[#FCFCF7] text-[20px] lg:text-[28px]"  {...commonProps}>
                Skills & Technologies
              </Typography>
              <Typography
                className="text-[#F7F7FCB3] font-normal text-[14px] lg:text-[18px]"  {...commonProps}>
                 Proficient in utilizing technical writing tools, such as MS Word and Adobe Acrobat RoboHelp, as well as MadCap Flare and SnagIt. Familiar with graphics software, including Figma, Adobe Photoshop Illustrator, Microsoft Visio, and Canva. Database software, CMS/LMS, and API documentation software such as Postman and Swagger. <br /> <br/>Documentation: Docs-as-code Documentation, Document permission & source Control, AP Style, Knowledge-base Management, intuitive UX writing, on-chain & 0ff-chain data analysis. <br /> <br />
  
                Languages & Frameworks: Javascript, React, Solidity GraphQL, Python, REST, Github/Gitbook, Markdown.
              </Typography>
            </div>
            <Button {...commonProps} variant="outlined" className="text-white border-white">
              Contact Me
            </Button>
          </div>
        </div>
    </div>
  );
};
