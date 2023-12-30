import Sidebar from "@/app/(shared)/Sidebar";
import { Post } from "@prisma/client";
import prisma from "../../api/client";
import Content from "./Content";

type PageProps = {
  params: { id: string };
};

const getPost = async (id: string) => {
  const post: Post | null = await prisma.post.findUnique({ where: { id } });
  if (!post) {
    console.log(`post ${id} not found`);
    return null;
  }
  return {
    ...post,
    createdAt: post.createdAt?.toISOString(),
    updatedAt: post.updatedAt?.toISOString(),
  };
};

const Post = async ({ params: { id } }: PageProps) => {
  const post = await getPost(id);
  // console.log(`post :`, post);

  return (
    <main className="leading-7 px-10">
      <div className="md:flex gap-10 mb-5">
        {/* BODY 3/4 */}
        <div className="basis-3/4">
          {post ? <Content post={post} /> : `post ${id} not found`}
        </div>
        {/* SUBSCRIBE SIDEBAR 1/4 */}
        <Sidebar className="basis-1/4" />
      </div>
    </main>
  );
};

export default Post;
