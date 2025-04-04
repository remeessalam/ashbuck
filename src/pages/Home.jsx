import React, { lazy } from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vids/banner.mp4";
import {
  Ambulance,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Cloudy,
  CodeXml,
  Cpu,
  Quote,
  StickyNote,
  Store,
  Tv,
} from "lucide-react";
import { ReactComponent as icon1 } from "../assets/svg/services/ai.svg";
import { ReactComponent as icon2 } from "../assets/svg/services/digital.svg";
import { ReactComponent as icon3 } from "../assets/svg/services/App Development.svg";
import { ReactComponent as icon4 } from "../assets/svg/services/Web Development.svg";
import { Link } from "react-router-dom";
import howWeBuildCover from "../assets/images/how-we-build.jpeg";
import whyWorkWithUs1 from "../assets/images/whyworkwithus1.png";
import whyWorkWithUs2 from "../assets/images/whyworkwithus2.png";
import whyWorkWithUs3 from "../assets/images/whyworkwithus3.png";
import whyWorkWithUs4 from "../assets/images/whyworkwithus4.png";
import { ArrowLinkButton } from "../components/ArrowButtons";
import TeamSection from "../components/TeamSection";

const ContactForm = lazy(() => import("../components/ContactForm"));
const BlogsSection = lazy(() => import("../components/website/BlogsSection"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const ServicesWeProvide = lazy(() =>
  import("../components/website/ServicesWeProvide")
);

const bannerServices = [
  {
    id: 1,
    title: "AI/ML Development",
    icon: icon1,
    desc: "AI and Machine Learning development focuses on building intelligent systems that automate tasks, analyze data, recognize patterns, and enhance decision-making to drive business innovation.",
    landingPageLink: "/ai-ml-development",
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: icon2,
    desc: "Digital marketing leverages SEO, content marketing, social media, and paid advertising to boost brand visibility, engage audiences, and drive business growth.",
    landingPageLink: "/digital-marketing",
  },
  {
    id: 2,
    title: "App Development",
    icon: icon3,
    desc: "Creating intuitive and high-performing mobile apps for Android and iOS platforms.",
    landingPageLink: "/services/App Development",
  },
  {
    id: 4,
    title: "Web Development",
    icon: icon4,
    desc: "Building responsive, scalable, and modern websites tailored to your business needs.",
    landingPageLink: "/services/Web Development",
  },
];

const industries = [
  {
    icon: Ambulance,
    title: "Healthcare",
  },
  {
    icon: BriefcaseBusiness,
    title: "Finance",
  },
  {
    icon: Cpu,
    title: "Technology",
  },
  {
    icon: Store,
    title: "Retail &\n E-commerce",
  },
  {
    icon: Cloudy,
    title: "SaaS",
  },
  {
    icon: StickyNote,
    title: "Business Services",
  },
  {
    icon: Tv,
    title: "Media & Entertainment",
  },
  {
    icon: BrainCircuit,
    title: "AI",
  },
];

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen bg-black/50">
        <div className="pt-[12rem] pb-[5rem]">
          <div className="wrapper flex flex-col gap-7 justify-center h-full">
            <div
              data-aos="fade-up"
              className="flex items-center text-start self-start text-white px-3 py-2 rounded-full border border-white"
            >
              <CodeXml className="inline mr-2" /> <span>IT & AI Services</span>
            </div>
            <h1 data-aos="fade-up" className="heading text-white">
              Welcome to Your Trusted Digital Solutions Partner
            </h1>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 gap-5 md:gap-14 mt-5"
            >
              {bannerServices.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-secondary/60 backdrop-blur-md lg:hover:bg-primary/60 text-white space-y-4 transition-all duration-300"
                >
                  <p className="text-xl font-medium">{item.title}</p>
                  <p className="min-h-[6rem]">{item.desc}</p>
                  <div className="flex justify-between items-center gap-5">
                    <item.icon className="w-14 h-14 fill-white" />
                    <Link
                      to={item.landingPageLink}
                      className="bg-white/20 p-3 rounded-full"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <ReactPlayer
            url={bannerVid}
            playing
            muted
            loop
            playsinline
            width="100%"
            height="100%"
            className="react-player"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  },
                },
              },
            }}
          />
        </div>
      </section>

      <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section>
      <ServicesWeProvide />
      <section className="py-[4rem] bg-[#D8D8D8A3]">
        <div className="wrapper space-y-3">
          <h2
            data-aos="fade-up"
            data-aos-offset="-900"
            className="section-heading text-center"
          >
            Industries We Serve
          </h2>
          <p data-aos="fade-up" data-aos-offset="-900" className="text-center">
            Using powerful, industry-specific software solutions, our team can
            help you achieve your business goals.
          </p>
          <div className="pt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {industries.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  data-aos="fade-up"
                  data-aos-offset="-900"
                  key={item.title}
                  className="text-center p-5 bg-white rounded-xl space-y-3"
                >
                  <IconComponent className="w-8 h-8 mx-auto text-secondary" />
                  <p className="font-medium text-[.9rem] whitespace-pre-line">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-[4rem]">
        <h2
          data-aos="fade-up"
          data-aos-offset="-900"
          className="wrapper section-heading text-center"
        >
          How Our ASHBUCK TECHNOLOGIES LLC Delivers Exceptional Solutions
        </h2>
        <div
          data-aos="fade-up"
          data-aos-offset="-900"
          className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[3rem] mt-10"
        >
          {[
            {
              title: "Innovation-Driven Solutions",
              desc: "We stay ahead of the curve by leveraging the latest technologies to create forward-thinking digital solutions tailored to your needs.",
              styles: "bg-[#7C42DA] lg:rotate-[-18deg] lg:translate-y-[8rem]",
            },
            {
              title: "Client-Centric Approach",
              desc: "Our success is built on understanding your goals and collaborating closely to ensure our solutions align with your vision.",
              styles: "bg-[#F8B000] lg:rotate-[-10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Excellence and Precision",
              desc: "We prioritize quality and meticulous execution, ensuring that every project meets high-performance standards and delivers lasting impact.",
              styles: "bg-[#B94391]",
            },
            {
              title: "Integrity and Transparency",
              desc: "We uphold honesty and accountability, maintaining clear communication and delivering on our promises to build lasting trust.",
              styles: "bg-[#D1B9F7] lg:rotate-[10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Continuous Support & Growth",
              desc: "Beyond delivery, we provide ongoing optimization and support, ensuring your digital solutions evolve alongside your business needs.",
              styles:
                "bg-[#E85535] col-span-2 md:col-span-1 w-1/2 mx-auto md:w-full lg:rotate-[18deg] lg:translate-y-[8rem]",
            },
          ].map((item) => (
            <div
              className={`p-5 ${item.styles} h-full w-full flex items-center hover:rotate-[180deg] group text-center rounded-xl transition-all duration-300`}
              key={item.title}
            >
              <div className="space-y-3 group-hover:scale-y-[-1] group-hover:scale-x-[-1] transition-all duration-300">
                <p className="md:text-lg font-bold leading-tight">
                  {item.title}
                </p>
                <p className="text-[.9rem]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrapper pt-[4rem] lg:mt-[9rem]">
        <div
          data-aos="fade-up"
          data-aos-offset="-900"
          className="relative min-h-[40vh] rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-[-1]"></div>
          <img
            loading="lazy"
            src={howWeBuildCover}
            alt="hero banner"
            className="w-full h-full object-cover absolute inset-0 z-[-2]"
          />
          <div className="p-10 text-white text-start space-y-3">
            <h3 className="text-2xl font-semibold">
              Our Approach to Building Excellence
            </h3>
            <p className="max-w-xs">
              We combine innovation, collaboration, and cutting-edge technology
              to craft tailored solutions that empower businesses to thrive in
              the digital era.
            </p>
            <div className="pt-7">
              <ArrowLinkButton to="/contact">Let's Chat</ArrowLinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[4rem] wrapper space-y-3">
        <h2
          data-aos="fade-up"
          data-aos-offset="-900"
          className="section-heading text-center md:mb-[2rem]"
        >
          Why Work With Us?
        </h2>
        <div className="flex flex-col gap-5">
          <div
            data-aos="fade-up"
            data-aos-offset="-900"
            className="bg-[#6B308C] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  Our team of innovators, strategists, and engineers brings deep
                  technical expertise and a results-driven approach to every
                  project. We transform challenges into opportunities through
                  cutting-edge AI, blockchain, and software solutions.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs1}
              alt="AI solutions"
              className="md:absolute right-0 top-1/2 md:-translate-y-1/2 max-h-[16rem] md:max-h-[25rem] object-contain"
            />
          </div>

          <div
            data-aos-offset="-900"
            data-aos="fade-up"
            className="bg-[#FE7624] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  We specialize in end-to-end development, from web and mobile
                  apps to AI-driven automation, ensuring seamless user
                  experiences and scalable solutions for businesses of all
                  sizes.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs2}
              alt="AI-driven automation"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[24rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="-900"
            className="bg-[#F45C7B] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  Our AI-powered insights, predictive analytics, and intelligent
                  automation help businesses streamline operations, optimize
                  workflows, and unlock new revenue streams.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs3}
              alt="AI insights"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="-900"
            className="bg-[#507FD7] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  From healthcare and e-commerce to finance and education, our
                  industry-specific solutions drive transformation, ensuring
                  efficiency, security, and scalability for businesses
                  worldwide.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs4}
              alt="Industry solutions"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>
        </div>
      </section>

      <BlogsSection />
      <ContactForm />
    </>
  );
};

export default Home;
