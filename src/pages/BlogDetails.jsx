import React, { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { blogData } from "../data/constant";

const BlogsSection = lazy(() => import("../components/website/BlogsSection"));

const BlogDetails = () => {
  const { title } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Find the blog with the matching ID
    // const blogId = parseInt(title);
    const foundBlog = blogData.find((blog) => blog.title === title);

    if (foundBlog) {
      setBlog(foundBlog);
      window.scrollTo(0, 0);
    }
  }, [title]);

  if (!blog) {
    return (
      <div className="pt-[10rem] pb-[4rem] bg-gradient-to-b from-[#f8e4de] to-[#f5f5f5]">
        <div className="wrapper text-center">
          <h1 className="section-heading">Blog not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[10rem] pb-[4rem] bg-gradient-to-b from-[#f8e4de] to-[#f5f5f5]">
      <div className="wrapper">
        <img
          data-aos="fade-up"
          src={blog.image}
          className="rounded-xl w-full aspect-video md:aspect-[16/7] object-cover"
          alt={blog.title}
        />
        <h1 data-aos="fade-up" className="section-heading mt-7">
          {blog.title}
        </h1>
        <h2 data-aos="fade-up" className="text-xl text-gray-700 mt-2">
          {blog.subtitle}
        </h2>
        <hr data-aos="fade-up" className="border-secondary my-7" />
        <div
          data-aos="fade-up"
          className=""
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
      <BlogsSection />
    </div>
  );
};

export default BlogDetails;
