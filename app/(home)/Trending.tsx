import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type TrendingCardProps = {
  className: string;
  post: Post;
};

export const TrendingCard = ({
  className,
  post: { id, category, title, image },
}: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:h-auto relative mt-3 block h-96 w-full hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}
    >
      {/* IMAGE */}
      <div className="z-0 relative w-full h-full bg-wh-300">
        <Image
          alt={title}
          src={image}
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
        />
      </div>
      {/* GRADIENT */}
      <div className="z-1 absolute top-0 left-0 w-full h-full bg-gradient-gradual" />
      {/* TITLE + DESC */}
      <div className="z-2 absolute bottom-0 left-0 p-3">
        {/* TITLE */}
        <h4 className="inline-block bg-accent-orange px-5 py-1 font-semibold capitalize text-wh-900">
          {category}
        </h4>
        {/* DESC */}
        <div className="text-wh-100 mt-2">{title}</div>
      </div>
    </Link>
  );
};

type TrendingProps = {
  trendingPost: Post[];
};

const Trending = ({ trendingPost }: TrendingProps) => {
  return (
    <section className="pt-3 pb-10">
      {/* ICON + TEXT */}
      <div className="flex items-center gap-3">
        {/* ICON */}
        <div className="uppercase font-bold text-sm bg-wh-900 text-wh-10 px-8 py-2">
          Trending
        </div>
        {/* TEXT */}
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          non!
        </p>
      </div>
      {/* THUMBNAILS */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px]">
        <TrendingCard
          className="bg-wh-100 col-span-2 row-span-2"
          post={trendingPost[0]}
        />
        <TrendingCard
          className="bg-wh-100 col-span-2 row-span-1"
          post={trendingPost[1]}
        />
        <TrendingCard
          className="bg-wh-100 col-span-1 row-span-1"
          post={trendingPost[2]}
        />
        <TrendingCard
          className="bg-wh-100 col-span-1 row-span-1"
          post={trendingPost[3]}
        />
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic
        reiciendis quia iste ad! Impedit nostrum excepturi natus nihil nobis.
      </p>
    </section>
  );
};

export default Trending;
