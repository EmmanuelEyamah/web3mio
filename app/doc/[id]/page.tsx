"use client";

import { TTypography } from "../../components/base/Typography";
import { Types } from "@/types/types";
import { useState, useEffect } from "react";
import { getDocumentationById } from "@/app/actions/docActions";

const Page = ({ params }: { params: Types }) => {
  const { id } = params;
  const [article, setArticle] = useState<{
    name: string;
    description: string[];
    imageUrl: string | null;
    link_text: string;
    link_url: string;
  } | null>(null);

  useEffect(() => {
    if (id) {
      fetchArticle(id as string);
    }
  }, [id]);

  const fetchArticle = async (articleId: string) => {
    try {
      const fetchedArticle = await getDocumentationById(articleId);
      setArticle(fetchedArticle);
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  const { name, description, imageUrl, link_text, link_url } = article;

  return (
    <div className="mx-auto container w-full">
      <div className="p-7 lg:p-20">
        <TTypography
          label={name}
          fontSizeSmall="text-[26px]"
          fontSizeLarge="lg:text-[35px]"
          className="uppercase text-center z-[1000] mb-5"
        />
        <div
          className="w-full rounded-bl-2xl rounded-br-2xl h-[600px] relative overflow-hidden flex flex-col items-center justify-center gap-6"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <TTypography
          color="text-[#F7F7FCB3]"
          fontSizeSmall="text-[16px]"
          fontSizeLarge="lg:text-[22px]"
          className="mt-10"
          label={description}
        />

        <div className="mt-[40px]">
          <a
            href={link_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] lg:text-[22px] capitalize underline text-[#F7F7FC]"
          >
            {link_text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
