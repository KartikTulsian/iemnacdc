'use client';

import React, { useState } from 'react';
import BlogSidebar1 from "@/components/About/BlogSideBar1";
import BlogSidebar2 from "@/components/About/BlogSideBar2";
import BlogSidebar3 from "@/components/About/BlogSideBar3";

export default function BlogChanging() {
  const [activeBlog, setActiveBlog] = useState<"blog1" | "blog2" | "blog3">("blog1");

  const handleBlogChange = (blog: "blog1" | "blog2" | "blog3") => {
    setActiveBlog(blog);
  };

  const renderActiveBlog = () => {
    switch (activeBlog) {
      case "blog1":
        return <BlogSidebar1 onSelect={handleBlogChange} />;
      case "blog2":
        return <BlogSidebar2 onSelect={handleBlogChange} />;
      case "blog3":
        return <BlogSidebar3 onSelect={handleBlogChange} />;
    }
  };

  return (
    <div key={activeBlog} className="transition-opacity duration-500 ease-in-out animate-fadeIn">
      {renderActiveBlog()}
    </div>
  );
}
