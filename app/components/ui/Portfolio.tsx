"use client";

import { FC, useState, useEffect } from "react";
import { Space } from "antd";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { commonProps } from "@/types/common";
import Link from "next/link";
import { Types } from "@/types/types";
import TruncatedText from "../ShortenWords";

export interface PortfolioProps {
  articles: Types[];
  docs: Types[];
}

export const Portfolio: FC<PortfolioProps> = ({ articles, docs }) => {
  const [activeTab, setActiveTab] = useState("article");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = [
    {
      label: "Article",
      value: "article",
      desc: ``,
    },
    {
      label: "Documentation",
      value: "documentation",
      desc: ``,
    },
    {
      label: "Tutorial",
      value: "tutorial",
      desc: ``,
    },
  ];

  if (!mounted) {
    return null; // or a loading spinner, or a fallback UI
  }

  return (
    <div
      className="mx-auto custom-container w-full h-full flex flex-col justify-center gap-6 items-center p-4 lg:py-10 lg:p-7"
      id="portfolio"
    >
      <Space>
        <div className="w-[100px] lg:w-[500px] h-1 bg-[#fff]"></div>
        <Typography
          className="mb-2 text-[#fff] text-[18px] lg:text-[32px]"
          {...commonProps}
        >
          MY PORTFOLIO
        </Typography>
        <div className="w-[100px] lg:w-[500px] h-1 bg-[#fff]"></div>
      </Space>

      <div className="">
        <Tabs value="article">
          <TabsHeader
            {...commonProps}
            className="bg-transparent"
            indicatorProps={{
              className: "bg-[#515175] shadow-md text-white",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                {...commonProps}
                className="text-white text-sm lg:text-base"
                onClick={() => setActiveTab(value)}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody {...commonProps}>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {value === "tutorial" && (
                  <div className="flex flex-col p-10 items-center justify-center w-full max-w-[48rem] h-[650px] lg:h-[400px] shadow-xl">
                    <Typography
                      className="mb-4 text-[#fff] text-[24px] text-center lg:text-left"
                      {...commonProps}
                    >
                      Most tutorials are ghostwriting efforts. Please request
                      privately.
                    </Typography>
                    <Button
                      {...commonProps}
                      variant="outlined"
                      className="text-white border-white"
                    >
                      send request
                    </Button>
                  </div>
                )}
                {value === "article" && (
                  <div className="flex flex-col gap-10 mt-8 overflow-y-auto h-full custom-scrollbar max-h-[1250px]">
                    {articles.map((article, index) => (
                      <div className="h-[400px]" key={index}>
                        <Card
                          className="w-full max-w-[55rem] bg-[#515175] shadow-xl flex flex-col lg:flex lg:flex-row gap-0 lg:gap-15"
                          {...commonProps}
                        >
                          <CardHeader
                            shadow={false}
                            {...commonProps}
                            floated={false}
                            className="m-0 lg:w-1/2 shrink-0 rounded-md lg:rounded-r-none"
                          >
                            {article.imageUrl && (
                              <img
                                src={article.imageUrl}
                                alt="card-image"
                                className="h-full w-full object-cover"
                              />
                            )}
                          </CardHeader>
                          <CardBody {...commonProps}>
                            <Typography
                              className="mb-2 text-[#fff] text-[24px]"
                              {...commonProps}
                            >
                              {article.name}
                            </Typography>
                            <Typography
                              className="mb-8 font-normal text-[#F7F7FCB3] text-[18px]"
                              {...commonProps}
                            >
                              <TruncatedText
                                text={article.short_desc}
                                maxWords={20}
                              />
                            </Typography>
                            <Link
                              href={`/art/${article.id}`}
                              className="inline-block"
                            >
                              <Button
                                variant="outlined"
                                {...commonProps}
                                className="text-white border-white"
                              >
                                Read More
                              </Button>
                            </Link>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
                {value === "documentation" && (
                  <div className="flex flex-col gap-10 mt-8 overflow-y-auto h-full custom-scrollbar max-h-[1250px]">
                    {docs.map((doc, index) => (
                      <div className="h-[400px]" key={index}>
                        <Card
                          className="w-full max-w-[55rem] bg-[#515175] shadow-xl flex flex-col lg:flex lg:flex-row gap-0 lg:gap-15"
                          {...commonProps}
                        >
                          <CardHeader
                            shadow={false}
                            {...commonProps}
                            floated={false}
                            className="m-0 lg:w-1/2 shrink-0 rounded-md lg:rounded-r-none"
                          >
                            {doc.imageUrl && (
                              <img
                                src={doc.imageUrl}
                                alt="card-image"
                                className="h-full w-full object-cover"
                              />
                            )}
                          </CardHeader>
                          <CardBody {...commonProps}>
                            <Typography
                              className="mb-2 text-[#fff] text-[24px]"
                              {...commonProps}
                            >
                              {doc.name}
                            </Typography>
                            <Typography
                              className="mb-8 font-normal text-[#F7F7FCB3] text-[18px]"
                              {...commonProps}
                            >
                              <TruncatedText
                                text={doc.short_desc}
                                maxWords={20}
                              />
                            </Typography>
                            <Link
                              href={`/doc/${doc.id}`}
                              className="inline-block"
                            >
                              <Button
                                variant="outlined"
                                {...commonProps}
                                className="text-white border-white"
                              >
                                Read More
                              </Button>
                            </Link>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};
