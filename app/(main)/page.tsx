import PostEditor from "@/components/posts/editor/PostEditor";
import React from "react";

const Home = () => {
  return (
    <main className="h-[200vh] w-full bg-red-50">
      <div className="w-full">
        <PostEditor />
      </div>
    </main>
  );
};

export default Home;
