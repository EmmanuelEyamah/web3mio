"use client";

import React, { FC, useState } from "react";
import { commonProps } from "@/types/common";
import { Types } from "@/types/types";
import { Typography, Button, Card, CardHeader, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import { deleteArticle } from "../actions/articleActions"

export interface ViewDocProps {
    articles: Types[]
}
const ViewDoc: FC<ViewDocProps> = ({ articles }) => {

    const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        const inputId = (event.currentTarget.elements.namedItem("inputId") as HTMLInputElement).value;

        await deleteArticle(inputId)
    };

  return (
    <div className="flex w-full lg:w-[600px] items-start flex-col gap-10">
        <Typography
            className="text-[#fff] text-[18px] lg:text-[24px]"  {...commonProps}>
            All Article 
        </Typography>
        {articles.map((article, index) => {
            return (
                <Card className="w-full max-w-[43rem] h-full bg-[#515175] shadow-xl flex flex-col lg:flex lg:flex-row" {...commonProps} key={`article-card-${index}`}>
                    <CardHeader
                        shadow={false}
                        {...commonProps}
                        floated={false}
                        className="m-0  lg:w-1/2 shrink-0 rounded-md lg:rounded-r-none"
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
                        <Typography className="mb-2 text-[#fff] text-[24px]" {...commonProps}>
                            {article.name}
                        </Typography>
                        <Typography className="mb-8 font-normal text-[#F7F7FCB3] text-[18px]" {...commonProps}>
                            {article.short_desc}
                        </Typography>
                        <div className="flex gap-5">
                            <Link href={`/art/${article.id}`} as={`/art/${article.id}`} className="inline-block">
                                <Button variant="outlined" {...commonProps} className="text-white border-white">
                                    View
                                </Button>
                            </Link>
                            <form onSubmit={handleSave}>
                                <input hidden value={article.id} name="inputId"/>
                                <Button {...commonProps} className="bg-red-500" type="submit">
                                    Delete
                                </Button>
                            </form>
                        </div>
                    </CardBody>
                </Card>
            )
        })}
    </div>
  )
}

export default ViewDoc