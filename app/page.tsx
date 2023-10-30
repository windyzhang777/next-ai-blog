import { Post } from "@prisma/client";
import Other from "./(home)/Other";
import Subscribe from "./(home)/Subscribe";
import Tech from "./(home)/Tech";
import Traval from "./(home)/Traval";
import Trending from "./(home)/Trending";
import Sidebar from "./Sidebar";
import prisma from "./api/client";

export const revalidate = 60;

const getPosts = async () => {
  const posts = await prisma?.post.findMany();
  const preparePosts = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      image: require(`../public${post.image}`),
    }))
  );
  return preparePosts;
};

export default async function Home() {
  const posts = await getPosts();

  const preparePost = () => {
    const trendingPosts: Post[] = [];
    const techPosts: Post[] = [];
    const travalPosts: Post[] = [];
    const otherPosts: Post[] = [];
    posts.forEach((post: Post, index: number) => {
      if (index < 4) trendingPosts.push(post);
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travalPosts.push(post);
      } else {
        otherPosts.push(post);
      }
    });
    return [trendingPosts, techPosts, travalPosts, otherPosts];
  };
  const [trendingPosts, techPosts, travalPosts, otherPosts] = preparePost();

  return (
    <main className="leading-7 px-10">
      {/* TRENDING */}
      <Trending trendingPost={trendingPosts} />
      <div className="md:flex gap-10 mb-5">
        {/* BODY 3/4 */}
        <div className="basis-3/4">
          <hr className="border-1" />
          {/* TECH */}
          <Tech techPosts={techPosts} />
          <hr className="border-1" />
          {/* TRAVEL */}
          <Traval travalPosts={travalPosts} />
          <hr className="border-1" />
          {/* OTHER */}
          <Other otherPosts={otherPosts} />
          {/* SUBSCRIBE BOTTOM hide<md */}
          <Subscribe className="hidden md:flex px-20" />
        </div>
        {/* SUBSCRIBE SIDEBAR 1/4 */}
        <Sidebar className="basis-1/4"></Sidebar>
      </div>
    </main>
  );
}
