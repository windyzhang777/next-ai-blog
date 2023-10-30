import { Post } from "@prisma/client";
import Link from "next/link";

type CardProps = {
  className?: string;
  imageHeight?: string;
  isLongForm?: boolean;
  isSmallCard?: boolean;
  post: Post;
};

const Card = ({
  className,
  imageHeight,
  isLongForm = false,
  isSmallCard = false,
  post: { id, title, author, createdAt, image, snippet },
}: CardProps) => {
  return (
    <div className={`${className} ${isSmallCard ? "flex" : ""} sm:mt-0 mt-5`}>
      {/* IMAGE */}
      <Link
        className="basis-full hover:opacity-70"
        href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}
      >
        <div
          className={`relative w-auto bg-wh-300 ${imageHeight} 
          ${isSmallCard ? "mr-3" : "mb-3"}`}
        >
          image
        </div>
      </Link>

      {/* POST */}
      <div className="basis-full">
        {/* TITLE */}
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}>
          <h4
            className={`font-bold hover:text-accent-green 
          ${isSmallCard ? "text-base line-clamp-2" : "text-lg"}
          `}
          >
            {title}
          </h4>
        </Link>

        {/* AUTHOR + DATE */}
        <div
          className={`my-2 ${isSmallCard ? "" : "flex items-center gap-3"} `}
        >
          {/* AUTHOR */}
          <h5 className="text-xs font-semibold capitalize">{author}</h5>
          {/* DATE */}
          <h6 className="text-xs text-wh-500 font-light">
            {new Date(createdAt).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h6>
        </div>

        {/* BODY */}
        <p
          className={`text-wh-500 font-light 
          ${isLongForm ? "line-clamp-5" : "line-clamp-3"}
          `}
        >
          {snippet}
        </p>
      </div>
    </div>
  );
};

export default Card;
