import Image from "next/image";
import Link from "next/link";
import Advert from "public/assets/ad-1.jpg";
import SocialLinks from "./SocialLinks";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <header className="mb-5">
      {/* TOPNAV */}
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Trending</Link>
          <Link href={"/"}>About</Link>
        </div>
        <div className="">
          <div className="">Sign In</div>
        </div>
      </nav>
      {/* HEADER */}
      <div className="flex justify-between gap-8 mt-5 mb-4 px-10">
        {/* TITLE + DESC */}
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">BLOG OF THE FUTURE</h1>
          <p className="mt-3 text-sm">
            Blog dedicated towards AI and generation and job automation
          </p>
        </div>
        {/* IMAGE */}
        <div className="basis-full relative w-auto h-32">
          <Image
            alt="nav-image"
            src={Advert}
            fill
            style={{ objectFit: "cover" }}
            placeholder="blur"
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
          />
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
