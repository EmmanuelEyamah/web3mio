"use client";

import { commonProps } from "@/types/common";
import { Typography, Button, Textarea, Input } from "@material-tailwind/react";
import { UploadDropzone } from "../../types/uploadthing";
import { Space } from "antd";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { createDocs } from "../actions/docActions";
import { toast } from "react-toastify";

const CreateDoc = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [projectName, setProjectName] = useState("");
  const [linkText, setLinkText] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [descriptions, setDescriptions] = useState<string[]>([""]);
  const [imageUrls, setImageUrls] = useState<
    {
      fileUrl: string;
      fileKey: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const image = imageUrls.map((image) => image.fileUrl).join(", ");
    setLoading(true);

    const formData = {
      name: projectName,
      short_desc: shortDescription,
      description: descriptions,
      imageUrl: image,
      imagesUrl: [],
      link_text: linkText,
      link_url: linkUrl,
    };

    await createDocs(formData);
    toast.success("Docs created successfully");
    setLoading(false);

    setProjectName("");
    setShortDescription("");
    setDescriptions([""]);
    setImageUrls([]);
    setLinkText("");
    setLinkUrl("");

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const addDescriptionField = () => {
    setDescriptions([...descriptions, ""]);
  };

  const removeDescriptionField = (index: number) => {
    const newDescriptions = [...descriptions];
    newDescriptions.splice(index, 1);
    setDescriptions(newDescriptions);
  };

  const handleDescriptionChange = (index: number, value: string) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = value;
    setDescriptions(newDescriptions);
  };

  const imgList = (
    <>
      <ul>
        {imageUrls.map((image) => (
          <li key={image.fileUrl} className="mt-2">
            <Image src={image.fileUrl} alt="image" width={150} height={150} />
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="flex w-full lg:w-[500px] items-start flex-col">
      <Typography
        className="text-[#fff] text-[18px] lg:text-[24px]"
        {...commonProps}
      >
        Create New Documentation
      </Typography>

      <form
        ref={formRef}
        className="flex flex-col items-start w-full gap-10 mt-5 lg:mt-10"
        onSubmit={handleSave}
      >
        <Space direction="vertical" className="w-full lg:w-[400px]">
          <Typography
            className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"
            {...commonProps}
          >
            Project Name
          </Typography>
          <Input
            size="lg"
            placeholder="Project name"
            name="name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px] text-white"
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
            Short Description
          </Typography>
          <Textarea
            size="lg"
            placeholder="Short Description"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px] text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </Space>
        {descriptions.map((desc, index) => (
          <Space
            key={index}
            direction="vertical"
            className="w-full lg:w-[400px]"
          >
            <Typography
              className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"
              {...commonProps}
            >
              Descriptions
            </Typography>
            <Textarea
              size="lg"
              placeholder={`Paragraph ${index + 1}`}
              value={desc}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              className="!border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px] text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            {index > 0 && (
              <Button
                {...commonProps}
                className="bg-red-500 text-white w-[100px]"
                size="sm"
                type="button"
                onClick={() => removeDescriptionField(index)}
              >
                Remove
              </Button>
            )}
          </Space>
        ))}
        <Button
          {...commonProps}
          className="bg-[#515175] w-[200px] mt-2"
          size="lg"
          type="button"
          onClick={addDescriptionField}
        >
          Add More Paragraph
        </Button>
        <Space direction="vertical" className="w-full lg:w-[400px]">
          <Typography
            className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"
            {...commonProps}
          >
            HyperLink
          </Typography>
          <Input
            size="lg"
            placeholder="Link Title e.g Read more on ...."
            name="name"
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
            className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px] text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <Input
            size="lg"
            placeholder="Link"
            name="name"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px] text-white"
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
            Image
          </Typography>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              const url = res[0].url;
              const key = res[0].key;

              setImageUrls((prevImages) => [
                ...prevImages,
                { fileUrl: url, fileKey: key },
              ]);

              toast.success("Image Uploaded Successful");
            }}
            onUploadError={(error: Error) => {
              toast.error(`ERROR! ${error.message}`);
            }}
          />
          {imgList}
        </Space>

        <Button
          {...commonProps}
          className="bg-[#515175] w-[200px]"
          size="lg"
          type="submit"
        >
          {loading ? "Submitting..." : "Save"}
        </Button>
      </form>
    </div>
  );
};

export default CreateDoc;
