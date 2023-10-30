import { Post } from "@prisma/client";
import Card from "../(shared)/Card";

type TravalProps = { travalPosts: Post[] };

const Traval = ({ travalPosts }: TravalProps) => {
  return (
    <section className="my-8">
      {/* ICON + TEXT */}
      <div className="flex items-center gap-3 mt-8 mb-5">
        {/* ICON */}
        <h4 className="uppercase font-bold text-sm bg-accent-green px-8 py-2">
          news
        </h4>
        {/* TEXT */}
        <p className="capitalize font-bold text-2xl">new traval experiences</p>
      </div>
      {/* FLEX */}
      <div className="sm:flex justify-between gap-5">
        <Card post={travalPosts[0]} imageHeight="h-80" />
        <Card post={travalPosts[1]} imageHeight="h-80" />
        <Card post={travalPosts[2]} imageHeight="h-80" />
      </div>
      <Card
        post={travalPosts[3]}
        className="!my-5"
        imageHeight="h-80"
        isSmallCard
      />
    </section>
  );
};

export default Traval;
