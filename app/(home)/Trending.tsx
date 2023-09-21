import Link from "next/link";

type TrendingCardProps = {
  className: string;
  post?: any;
};

export const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:h-auto relative mt-3 block h-96 w-full hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      {/* IMAGE */}
      <div className="z-0 relative w-full h-full bg-wh-300">image</div>
      {/* GRADIENT */}
      <div className="z-1 absolute top-0 left-0 w-full h-full bg-gradient-gradual" />
      {/* TITLE + DESC */}
      <div className="z-2 absolute bottom-0 left-0 p-3">
        {/* TITLE */}
        <h4 className="inline-block bg-accent-orange px-5 py-1 font-semibold capitalize text-wh-900">
          title
        </h4>
        {/* DESC */}
        <div className="text-wh-100 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          architecto.
        </div>
      </div>
    </Link>
  );
};

type TrendingProps = {};

const Trending = ({}: TrendingProps) => {
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
        <TrendingCard className="bg-wh-100 col-span-2 row-span-2" />
        <TrendingCard className="bg-wh-100 col-span-2 row-span-1" />
        <TrendingCard className="bg-wh-100 col-span-1 row-span-1" />
        <TrendingCard className="bg-wh-100 col-span-1 row-span-1" />
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic
        reiciendis quia iste ad! Impedit nostrum excepturi natus nihil nobis.
      </p>
    </section>
  );
};

export default Trending;
