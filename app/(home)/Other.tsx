import { Post } from "@prisma/client";
import Card from "../(shared)/Card";

type OtherProps = {
  otherPosts: Post[];
};

const Other = ({ otherPosts }: OtherProps) => {
  return (
    <section className="my-8">
      <h4 className="mt-8 mb-5 capitalize font-bold text-2xl">
        other trending posts
      </h4>
      {/* GRID */}
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(200px,_1fr))]">
        <Card
          post={otherPosts[0]}
          className="bg-wh-100 !mt-0"
          imageHeight="h-60"
        />
        <Card
          post={otherPosts[1]}
          className="bg-wh-100 !mt-0"
          imageHeight="h-60"
        />
        <Card
          post={otherPosts[2]}
          className="bg-wh-100 !mt-0"
          imageHeight="h-60"
        />
        <Card
          post={otherPosts[3]}
          className="bg-wh-100 !mt-0"
          imageHeight="h-60"
        />
      </div>
    </section>
  );
};

export default Other;
