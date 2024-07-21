import { prisma } from "@/utils/prisma";
import { Hero } from "./components/ui/Hero";
import { Services } from "./components/ui/Services";
import { Portfolio } from "./components/ui/Portfolio";
import { About } from "./components/ui/About";

const page = async () => {
  // Fetch the latest articles and docs
  const articlesPromise = prisma.article.findMany({
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

  const docsPromise = prisma.documentation.findMany({
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

  const [articles, docs] = await Promise.all([articlesPromise, docsPromise]);

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
