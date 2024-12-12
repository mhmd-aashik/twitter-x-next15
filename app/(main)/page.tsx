import TrendsSidebar from "@/components/menu/TrendsSidebar";
import PostEditor from "@/components/posts/editor/PostEditor";
import Post from "@/components/posts/Post";
import prisma from "@/lib/prisma";
import { postDataIncludes } from "@/lib/types";
import React from "react";

const Home = async () => {
  const posts = await prisma.post.findMany({
    include: postDataIncludes,
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log(posts);
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <TrendsSidebar />
    </main>
  );
};

export default Home;
