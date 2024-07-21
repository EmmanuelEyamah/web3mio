import { prisma } from "@/utils/prisma";
import { TTypography } from "../components/base/Typography";
import CreateDoc from "./create";
import ViewDoc from "./view";

const page = async () => {
  const docs = await prisma.documentation.findMany({
    select: {
      name: true,
      id: true,
      short_desc: true,
      description: true,
      imageUrl: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen gap-5 lg:gap-10 flex flex-col w-full mx-auto container items-center justify-start p-5 lg:p-20">
      <TTypography label="Documentation" />

      <div className="flex flex-col-reverse lg:flex lg:flex-row items-start gap-5">
        <CreateDoc />
        <ViewDoc docs={docs} />
      </div>
    </div>
  );
};

export default page;
