import Subscribe from "./(home)/Subscribe";
import SocialLinks from "./(shared)/SocialLinks";

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
      <div className="bg-wh-500 my-5">advert image</div>
      <h4 className="font-bold bg-wh-900 text-wh-50 text-xs text-center py-3">
        About the Blog
      </h4>
      <div className="bg-wh-500 my-5">profile image</div>
      <h4 className="font-bold text-center py-3">Jane Doe</h4>
      <p className="text-center text-sm text-wh-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non eveniet
        consectetur unde autem tempora!
      </p>
    </section>
  );
};

export default Sidebar;
