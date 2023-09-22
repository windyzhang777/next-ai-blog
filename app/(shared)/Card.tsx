import Link from "next/link";

type CardProps = {
  className?: string;
  imageHeight?: string;
  isLongForm?: boolean;
  isSmallCard?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isLongForm = false,
  isSmallCard = false,
}: CardProps) => {
  return (
    <div className={`${className} ${isSmallCard ? "flex" : ""} sm:mt-0 mt-5`}>
      {/* IMAGE */}
      <Link className="basis-full hover:opacity-70" href={"/"}>
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
        <Link href={"/"}>
          <h4
            className={`font-bold hover:text-accent-green 
          ${isSmallCard ? "text-base line-clamp-2" : "text-lg"}
          `}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h4>
        </Link>

        {/* AUTHOR + DATE */}
        <div
          className={`my-2 ${isSmallCard ? "" : "flex items-center gap-3"} `}
        >
          {/* AUTHOR */}
          <h5 className="text-xs font-semibold capitalize">jane doe</h5>
          {/* DATE */}
          <h6 className="text-xs text-wh-500 font-light">
            {new Date().toLocaleString("en-US", {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati excepturi praesentium expedita deleniti voluptate quo,
          assumenda sit quas qui temporibus doloribus modi amet ad veniam ipsa
          adipisci culpa? Laudantium.
        </p>
      </div>
    </div>
  );
};

export default Card;
