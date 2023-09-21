import Trending from "./(home)/Trending";

export default function Home() {
  return (
    <main className="leading-7 px-10">
      {/* TRENDING */}
      <Trending />
      <div className="md:flex gap-10 mb-5">
        {/* BODY 3/4 */}
        <div className="basis-3/4">
          {/* TECH */}
          {/* TRAVEL */}
          {/* OTHER */}
          {/* SUBSCRIBE BOTTOM hide<md */}
          <div className="hidden md:block">subscribe</div>
        </div>
        {/* SUBSCRIBE SIDEBAR 1/4 */}
        <div className="basis-1/4">sidebar</div>
      </div>
    </main>
  );
}
