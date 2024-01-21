import Sidebar from "@/app/(shared)/Sidebar";
import prisma from "@/app/api/client";
import Content from "@/app/post/[id]/Content";
import { Post } from "@prisma/client";

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

  if (!post) {
    return <div className="my-8">post {id} not found</div>;
  }

  return (
    <main className="leading-7 px-10">
      <div className="md:flex gap-10 mb-5">
        {/* BODY 3/4 */}
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        {/* SUBSCRIBE SIDEBAR 1/4 */}
        <Sidebar className="basis-1/4" />
      </div>
    </main>
  );
};

export default Post;
