import Image from "next/image";
import AboutProfile from "../../public/assets/about-profile.jpg";
import Advert from "../../public/assets/ad-2.png";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";

type SidebarProps = {
  className: string;
};

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <section className={`${className}`}>
      <h4 className="font-bold bg-wh-900 text-wh-50 text-xs text-center py-3">
        Subscribe and Follow
      </h4>
      <SocialLinks isDark className="p-5" />
      <Subscribe className="flex px-10" />
      <Image
        className="my-5 hidden md:block w-full"
        alt="advert-image"
        src={Advert}
        placeholder="blur"
        width={500}
        height={1000}
      />
      <h4 className="font-bold bg-wh-900 text-wh-50 text-xs text-center py-3">
        About the Blog
      </h4>
      <div className="my-5 flex justify-center">
        <Image
          className="object-cover"
          alt="about-profile-image"
          src={AboutProfile}
          placeholder="blur"
          width={500}
          height={250}
        />
      </div>
      <h4 className="font-bold text-center py-3">Jane Doe</h4>
      <p className="text-center text-sm text-wh-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non eveniet
        consectetur unde autem tempora!
      </p>
    </section>
  );
};

export default Sidebar;
