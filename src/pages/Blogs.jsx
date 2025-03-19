import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/constant";

const Blogs = () => {
  return (
    <div className="pt-[10rem] pb-[4rem] bg-gradient-to-b from-[#f8e4de] to-[#f5f5f5]">
      <div className="wrapper">
        <h1 data-aos="fade-up" className="section-heading text-center">
          Blogs
        </h1>
        <div className="max-w-5xl mx-auto mt-7 grid sm:grid-cols-2 gap-5">
          {blogData.map((blog, i) => (
            <div
              key={blog.id}
              data-aos="fade-up"
              className="group space-y-2 p-5 rounded-xl border border-black/20"
            >
              <Link to={`/blogs/${blog.title}`}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="group-hover:brightness-90 w-full h-[20rem] object-cover rounded-xl transition-all duration-300"
                />
              </Link>
              <Link
                to={`/blogs/${blog.title}`}
                className="text-lg font-semibold line-clamp-2 group-hover:text-purpleColor transition-all duration-300"
              >
                {blog.title}
              </Link>
              <p className="line-clamp-3">{blog.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
