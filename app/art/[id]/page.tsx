"use client"

import { TTypography } from "../../components/base/Typography";
import { Types } from "@/types/types";
import { useState, useEffect } from "react";
import { getArticleById } from "@/app/actions/articleActions";

const Page = ({ params }: { params: Types }) => {
  const { id } = params;
  const [article, setArticle] = useState<{ name: string; description: string; imageUrl: string | null; } | null>(null);

  useEffect(() => {
    if (id) {
      fetchArticle(id as string);
    }
  }, [id]);

  const fetchArticle = async (articleId: string) => {
    try {
      const fetchedArticle = await getArticleById(articleId); // Use getArticleById function to fetch article data
      setArticle(fetchedArticle);
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  const { name, description, imageUrl } = article;

  return (
    <div className="mx-auto container w-full">
      <div className="p-7 lg:p-20">
        <div className="w-full rounded-bl-2xl rounded-br-2xl h-[600px] relative overflow-hidden flex flex-col items-center justify-center gap-6" style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <TTypography label={name} fontSizeSmall="text-[26px]" fontSizeLarge="lg:text-[35px]" className="uppercase text-center z-[1000]"/>
          <div className="h-36 w-36 rounded-full overflow-hidden border-[#10c8ff] border-2">
            <img src="/assets/photo.png" className="w-full h-full object-cover z-100" alt="Photo" />
          </div>
        </div>

        <TTypography 
          color="text-[#F7F7FCB3]"
          fontSizeSmall="text-[16px]" 
          fontSizeLarge="lg:text-[22px]" 
          className="mt-10"
          label={description} 
        />
      </div>
    </div>
  )
}

export default Page
 