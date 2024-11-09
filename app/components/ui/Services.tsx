"use client";

import { FC, useState } from "react";
import { Card, CardBody, Typography, Carousel } from "@material-tailwind/react";
import { commonProps } from "@/types/common";

export interface ServicesProps {}
export const Services: FC<ServicesProps> = () => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <div
      className="w-full h-full flex flex-col gap-15 items-center lg:py-0"
      id="services"
    >
      <div className="w-full h-[55px] p-3 bg-[#515175] flex items-center gap-5">
        <Typography
          className="text-[#fff] text-[22px] lg:text-[28px]"
          {...commonProps}
        >
          MY SERVICES
        </Typography>
        <div className="w-[220px] lg:w-[500px] h-1 bg-[#fff]"></div>
      </div>
      <div className="hidden flex-col lg:flex lg:flex-row items-center mt-[50px] p-5 lg:p-0 justify-center gap-20">
        <Carousel
          transition={{ duration: 2, delay: 2 }}
          autoplay={autoplay}
          loop
          {...commonProps}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="flex flex-col lg:flex lg:flex-row items-center justify-center gap-20">
            <Card
              className="w-full lg:w-[500px] h-full bg-[#515175] shadow-xl flex flex-col items-center justify-center"
              {...commonProps}
            >
              <CardBody
                {...commonProps}
                className="flex flex-col items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className="w-16 h-16"
                >
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                </svg>
                <Typography
                  className="mb-2 text-[#F7F7FC] text-[22px]"
                  {...commonProps}
                >
                  Clear Communication
                </Typography>
                <Typography
                  {...commonProps}
                  className="text-[#F7F7FCB3] text-[16px] text-center"
                >
                  The ability to articulate ideas with clarity is a fundamental
                  skill that contributes to the overall success of projects and
                  organizations. As a professional with a proven track record in
                  stellar communication, I deliver outstanding Articles,
                  Tutorials, User manuals, System & API documentation, white
                  papers, and guides that onboard, inform, and enhance end-users
                  experience.
                </Typography>
              </CardBody>
            </Card>
            <Card
              className="w-full lg:w-[500px] h-full bg-[#515175] shadow-xl flex flex-col items-center justify-center"
              {...commonProps}
            >
              <CardBody
                {...commonProps}
                className="flex flex-col items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className="w-16 h-16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                    clipRule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                </svg>
                <Typography
                  className="mb-2 text-[#F7F7FC] text-[22px]"
                  {...commonProps}
                >
                  User Profiling
                </Typography>
                <Typography
                  {...commonProps}
                  className="text-[#F7F7FCB3] text-[16px] text-center"
                >
                  The essence of user profiling in creating technical content
                  and documentation lies in tailoring information to meet the
                  specific needs, preferences, and proficiency levels of the
                  target audience.  <br /> By thoroughly understanding the
                  characteristics, knowledge levels, and requirements of users,
                  I can craft content that is not only technically accurate but
                  also highly user-centric. This approach ensures that the
                  documentation is accessible, engaging, and directly addresses
                  the concerns or challenges faced by the intended users.
                </Typography>
              </CardBody>
            </Card>
          </div>

          <div className="flex flex-col lg:flex lg:flex-row items-center justify-center gap-20">
            <Card
              className="w-full lg:w-[500px] h-full bg-[#515175] shadow-xl flex flex-col items-center justify-center"
              {...commonProps}
            >
              <CardBody
                {...commonProps}
                className="flex flex-col items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className="w-16 h-16"
                >
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                </svg>

                <Typography
                  className="mb-2 text-[#F7F7FC] text-[22px]"
                  {...commonProps}
                >
                  Marketing & Community
                </Typography>
                <Typography
                  {...commonProps}
                  className="text-[#F7F7FCB3] text-[16px] text-center"
                >
                  Technical content marketing is the strategic integration of
                  technical writing and marketing, leveraging content to engage
                  and educate a target audience about complex technical
                  subjects.  <br /> This approach not only communicates technical
                  details effectively but also aligns with broader marketing
                  strategies, ensuring that the content resonates with the
                  target audience and contributes to overall business
                  objectives.
                </Typography>
              </CardBody>
            </Card>
            <Card
              className="w-full lg:w-[400px] h-full bg-[#515175] shadow-xl flex flex-col items-center justify-center"
              {...commonProps}
            >
              <CardBody
                {...commonProps}
                className="flex flex-col items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className="w-16 h-16"
                >
                  <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                </svg>

                <Typography
                  className="mb-2 text-[#F7F7FC] text-[22px]"
                  {...commonProps}
                >
                  Web3 Technologies
                </Typography>
                <Typography
                  {...commonProps}
                  className="text-[#F7F7FCB3] text-[16px] text-center"
                >
                  In a web3 technical writing role, a profound understanding of
                  Web3 technologies are paramount for effectively communicating
                  the intricacies of decentralized and blockchain-based
                  frameworks. As Web3 represents a transformative shift in
                  internet dynamics, a deep grasp of the fundamental concepts is
                  needed to articulate their implications and applications
                  clearly.  <br />  <br />
                  My proficiency in Web3 technical content writing,
                  coupled with a background in blockchain development, equips me with a
                  unique skill set to produce documentation that not only
                  elucidates the complexities of decentralized and blockchain
                  frameworks but also guides users and developers seamlessly.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </Carousel>
      </div>

      <div className="flex flex-col lg:hidden lg:flex-row items-center mt-[50px] p-5 lg:p-0 justify-center gap-20">
        <Card
          className="w-full lg:w-[500px] h-full bg-[#515175] shadow-xl flex flex-col items-center justify-center"
          {...commonProps}
        >
          <CardBody
            {...commonProps}
            className="flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              className="w-16 h-16"
            >
              <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
              <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
            </svg>
            <Typography
              className="mb-2 text-[#F7F7FC] text-[22px]"
              {...commonProps}
            >
              Clear Communication
            </Typography>
            <Typography
              {...commonProps}
              className="text-[#F7F7FCB3] text-[16px] text-center"
            >
              The ability to articulate ideas with clarity is a fundamental
              skill that contributes to the overall success of projects and
              organizations. As a professional with a proven track record in
              stellar communication, I deliver outstanding Articles, Tutorials,
              User manuals, System & API documentation, white papers, and guides
              that onboard, inform, and enhance end-users' experience.
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="w-full lg:w-[500px] h-full bg-[#515175] shadow-xl flex flex-col items-center justify-center"
          {...commonProps}
        >
          <CardBody
            {...commonProps}
            className="flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              className="w-16 h-16"
            >
              <path
                fillRule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                clipRule="evenodd"
              />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>
            <Typography
              className="mb-2 text-[#F7F7FC] text-[22px]"
              {...commonProps}
            >
              User Profiling
            </Typography>
            <Typography
              {...commonProps}
              className="text-[#F7F7FCB3] text-[16px] text-center"
            >
              The essence of user profiling in creating technical content and
              documentation lies in tailoring information to meet the specific
              needs, preferences, and proficiency levels of the target audience.
              By thoroughly understanding the characteristics, knowledge levels,
              and requirements of users, I can craft content that is not only
              technically accurate but also highly user-centric. This approach
              ensures that the documentation is accessible, engaging, and
              directly addresses the concerns or challenges faced by the
              intended users.
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="w-full lg:w-[500px] h-full bg-[#515175] shadow-xl flex flex-col items-center justify-center"
          {...commonProps}
        >
          <CardBody
            {...commonProps}
            className="flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              className="w-16 h-16"
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
            </svg>

            <Typography
              className="mb-2 text-[#F7F7FC] text-[22px]"
              {...commonProps}
            >
              Marketing & Community
            </Typography>
            <Typography
              {...commonProps}
              className="text-[#F7F7FCB3] text-[16px] text-center"
            >
              Technical content marketing is the strategic integration of
              technical writing and marketing, leveraging content to engage and
              educate a target audience about complex technical subjects. This
              approach not only communicates technical details effectively but
              also aligns with broader marketing strategies, ensuring that the
              content resonates with the target audience and contributes to
              overall business objectives..
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="w-full lg:w-[400px] h-full bg-[#515175] shadow-xl flex flex-col items-center justify-center"
          {...commonProps}
        >
          <CardBody
            {...commonProps}
            className="flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              className="w-16 h-16"
            >
              <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
            </svg>

            <Typography
              className="mb-2 text-[#F7F7FC] text-[22px]"
              {...commonProps}
            >
              Web3 Technologies
            </Typography>
            <Typography
              {...commonProps}
              className="text-[#F7F7FCB3] text-[16px] text-center"
            >
              In a web3 technical writing role, a profound understanding of Web3
              technologies is paramount for effectively communicating the
              intricacies of decentralized and blockchain-based frameworks. As
              Web3 represents a transformative shift in internet dynamics, a
              deep grasp of the fundamental concepts is needed to articulate
              their implications and applications clearly, My proficiency in
              Web3 technical content writing, coupled with a background in web
              development, equips me with a unique skill set to produce
              documentation that not only elucidates the complexities of
              decentralized and blockchain frameworks but also guides users and
              developers seamlessly.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
