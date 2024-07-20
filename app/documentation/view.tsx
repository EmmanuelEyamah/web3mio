"use client";

import { FC } from "react";
import { commonProps } from "@/types/common";
import {
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { Types } from "@/types/types";
import Link from "next/link";
import { deleteDocs } from "../actions/docActions";
import { toast } from "react-toastify";

export interface ViewDocProps {
  docs: Types[];
}
const ViewDoc: FC<ViewDocProps> = ({ docs }) => {
  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputId = (
      event.currentTarget.elements.namedItem("inputId") as HTMLInputElement
    ).value;

    await deleteDocs(inputId);
    toast.error("Docs deleted successfully");
  };
  return (
    <div className="flex w-full lg:w-[600px] items-start flex-col gap-10">
      <Typography
        className="text-[#fff] text-[18px] lg:text-[24px]"
        {...commonProps}
      >
        All Documentation
      </Typography>
      {docs.map((doc, index) => {
        return (
          <Card
            className="w-full max-w-[43rem] h-full bg-[#515175] shadow-xl flex flex-col lg:flex lg:flex-row"
            {...commonProps}
            key={`article-card-${index}`}
          >
            <CardHeader
              shadow={false}
              {...commonProps}
              floated={false}
              className="m-0  lg:w-1/2 shrink-0 rounded-md lg:rounded-r-none"
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
                {doc.short_desc}
              </Typography>
              <div className="flex gap-5">
                <Link
                  href={`/doc/${doc.id}`}
                  as={`/doc/${doc.id}`}
                  className="inline-block"
                >
                  <Button
                    variant="outlined"
                    {...commonProps}
                    className="text-white border-white"
                  >
                    View
                  </Button>
                </Link>
                <form onSubmit={handleSave}>
                  <input hidden value={doc.id} name="inputId" />
                  <Button {...commonProps} className="bg-red-500" type="submit">
                    Delete
                  </Button>
                </form>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default ViewDoc;
