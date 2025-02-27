import React, { lazy } from "react";
import bannerImg from "../assets/images/services-banner.webp";
import { ArrowLinkButton } from "../components/ArrowButtons";

const ContactForm = lazy(() => import("../components/ContactForm"));
const ServicesWeProvide = lazy(() =>
  import("../components/website/ServicesWeProvide")
);

const Services = () => {
  return (
    <>
      <section
        className="min-h-screen relative flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 h-full w-full">
          <div
            data-aos="fade-up"
            className="pt-[10rem] pb-[3rem] h-full wrapper text-white z-10 flex flex-col gap-3 justify-center items-center"
          >
            <h1 className="heading-2 max-w-5xl text-center">
              Empowering Businesses with AI-Driven Digital Transformation
            </h1>
            <p className="max-w-5xl text-center text-[1.1rem]">
              We harness the power of AI, blockchain, and cutting-edge software
              development to build scalable, intelligent solutions for the
              modern digital landscape. Our expertise spans AI automation, web
              and mobile applications, UI/UX design, and next-generation
              technologies, ensuring your business stays ahead in a rapidly
              evolving world.
            </p>
            <ArrowLinkButton to="/contact">Contact Us</ArrowLinkButton>
          </div>
        </div>
      </section>

      <ServicesWeProvide />
      <ContactForm />
    </>
  );
};

export default Services;
