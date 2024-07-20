"use client";

import { commonProps } from "@/types/common";
import { Typography, Button, Textarea, Input } from "@material-tailwind/react";
import { UploadDropzone } from "../../types/uploadthing";
import { Space } from "antd";
import React, { useState, useRef } from 'react';
import Image from "next/image";
import { createDocs } from "../actions/docActions"

const CreateDoc = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [projectName, setProjectName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState<{
    fileUrl: string;
    fileKey: string;
}[]>([]);
  const [loading, setLoading] = useState(false);

const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); 
  const image = imageUrls.map(image => image.fileUrl).join(', ');
  setLoading(true);

  const formData = {
    name: projectName,
    short_desc: shortDescription,
    description,
    imageUrl: image,
  };

  await createDocs(formData)
  setLoading(false); 

    setProjectName("");
    setShortDescription("");
    setDescription("");
    setImageUrls([]);

  if (formRef.current) {
    formRef.current.reset();
  }
};

const imgList = (
  <>
      <ul>
          {imageUrls.map(image => (
              <li key={image.fileUrl} className="mt-2">
                  <Image src={image.fileUrl} alt="image" width={150} height={150}/>
              </li>
          ))}
      </ul>
  </>
)

  return (
    <div className="flex w-full lg:w-[500px] items-start flex-col">
          <Typography
            className="text-[#fff] text-[18px] lg:text-[24px]"  {...commonProps}>
            Create New Documentation 
          </Typography>

          <form ref={formRef} className="flex flex-col items-start w-full gap-10 mt-5 lg:mt-10" onSubmit={handleSave}>
            <Space direction="vertical" className="w-full lg:w-[400px]">
              <Typography
                className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"  {...commonProps}>
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
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}          />
            </Space>
            <Space direction="vertical" className="w-full lg:w-[400px]">
              <Typography
                className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"  {...commonProps}>
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
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            
              />
            </Space>
            <Space direction="vertical" className="w-full lg:w-[400px]">
              <Typography
                className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"  {...commonProps}>
                Description
              </Typography>
              <Textarea
                size="lg"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px] text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          />
            </Space>

            <Space direction="vertical" className="w-full lg:w-[400px]">
              <Typography
                className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"  {...commonProps}>
                Image
              </Typography>
              <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  const url = res[0].url;
                  const key = res[0].key;
              
                  setImageUrls(prevImages => [...prevImages, { fileUrl: url, fileKey: key }]);
                  
                  // Alert the user about upload completion
                  alert("Upload Completed");
              }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
              {imgList}
            </Space>
            <Button {...commonProps} className="bg-[#515175] w-[200px]" size="lg" type="submit">
              {loading ? 'Submitting...' : 'Save'}
            </Button>
          </form>
        </div>
  )
}

export default CreateDoc