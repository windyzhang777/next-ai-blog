type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-wh-900 text-wh-50 p-10">
      <div className="justify-between gap-16 sm:flex">
        {/* BLOG OF THE FUTURE */}
        <div className="basis-1/2">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <div className="[&>p:not(:last-child)]:my-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ipsum nisi magnam doloremque non aspernatur nihil maxime dolorem
              dignissimos deleniti.
            </p>
            <p>&#169; Blog of the Future All Rights Reserved.</p>
          </div>
        </div>
        {/* LINKS */}
        <div className="mt-16 sm:mt-0 basis-1/4">
          <h4 className="font-bold">Links</h4>
          <div className="[&>p:not(:last-child)]:my-5">
            <p>Lorem, ipsum dolor.</p>
            <p>sit amet consectetur.</p>
            <p>Molestiae ipsum nisi.</p>
          </div>
        </div>
        {/* CONTACT US */}
        <div className="mt-16 sm:mt-0 basis-1/4">
          <h4 className="font-bold">Contact Us</h4>
          <div className="[&>p:not(:last-child)]:my-5">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>(333) 444-5555</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
