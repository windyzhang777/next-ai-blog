import Card from "../(shared)/Card";

type TechProps = {};

const Tech = ({}: TechProps) => {
  return (
    <section>
      {/* ICON + TEXT */}
      <div className="flex items-center gap-3 mt-8 mb-5">
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
          className="bg-wh-100 col-span-1 row-span-3"
          imageHeight="h-96"
          isLongForm
        />
        <Card
          className="bg-wh-100 col-span-1 row-span-1"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          className="bg-wh-100 col-span-1 row-span-1"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          className="bg-wh-100 col-span-1 row-span-1"
          imageHeight="h-48"
          isSmallCard
        />
      </div>
    </section>
  );
};

export default Tech;
