import Other from "./(home)/Other";
import Subscribe from "./(home)/Subscribe";
import Tech from "./(home)/Tech";
import Traval from "./(home)/Traval";
import Trending from "./(home)/Trending";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <main className="leading-7 px-10">
      {/* TRENDING */}
      <Trending />
      <div className="md:flex gap-10 mb-5">
        {/* BODY 3/4 */}
        <div className="basis-3/4">
          <hr className="border-1" />
          {/* TECH */}
          <Tech />
          <hr className="border-1" />
          {/* TRAVEL */}
          <Traval />
          <hr className="border-1" />
          {/* OTHER */}
          <Other />
          {/* SUBSCRIBE BOTTOM hide<md */}
          <Subscribe className="hidden md:flex px-20" />
        </div>
        {/* SUBSCRIBE SIDEBAR 1/4 */}
        <Sidebar className="basis-1/4"></Sidebar>
      </div>
    </main>
  );
}
