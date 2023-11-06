type SubscribeProps = {
  className?: string;
};

const Subscribe = ({ className }: SubscribeProps) => {
  return (
    <section
      className={`${className} bg-wh-100 flex-col gap-2 text-center py-10`}
    >
      <h4 className="text-base font-semibold">Subscribe to our Newsletter</h4>
      <p className="text-wh-500">
        Enter email address to get top news and great deals
      </p>
      <input
        type="email"
        placeholder="Enter Email Address"
        className="bg-wh-50 text-center w-full py-2 border-2"
      />
      <button className="bg-accent-red font-semibold text-wh-10 py-2 uppercase">
        subscribe
      </button>
    </section>
  );
};

export default Subscribe;
