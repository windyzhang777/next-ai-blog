import Link from "next/link";
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
        <div className="basis-full relative w-auto h-32 bg-wh-500">
          {/* <Image alt="image" src={"/"} /> */}
          image here
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
