import { Post } from "@prisma/client";
import Card from "../(shared)/Card";

type TechProps = {
  techPosts: Post[];
};

const Tech = ({ techPosts }: TechProps) => {
  return (
    <section className="my-8">
      {/* ICON + TEXT */}
      <div className="flex items-center gap-3">
        {/* ICON */}
        <h4 className="uppercase font-bold text-sm bg-accent-orange px-8 py-2">
          hot
        </h4>
        {/* TEXT */}
        <p className="font-bold text-2xl">Latest News in Technology</p>
      </div>
      {/* POSTS */}
      <div className="sm:grid gap-5 grid-cols-2 grid-rows-3 my-5">
        <Card
          post={techPosts[0]}
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          isLongForm
        />
        <Card
          post={techPosts[1]}
          className="col-span-1 row-span-1"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          post={techPosts[2]}
          className="col-span-1 row-span-1"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          post={techPosts[3]}
          className="col-span-1 row-span-1"
          imageHeight="h-48"
          isSmallCard
        />
      </div>
    </section>
  );
};

export default Tech;
