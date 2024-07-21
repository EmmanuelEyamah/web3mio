import { prisma } from "@/utils/prisma";
import { Hero } from "./components/ui/Hero";
import { Services } from "./components/ui/Services";
import { Portfolio } from "./components/ui/Portfolio";
import { About } from "./components/ui/About";

const page = async () => {
  const articles = await prisma.article.findMany({
    select: {
      name: true,
      id: true,
      description: true,
      short_desc: true,
      imageUrl: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

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
    <div>
      <Hero />
      <Services />
      <Portfolio articles={articles} docs={docs} />
      <About />
    </div>
  );
};

export default page;
