import { Briefcase, Users } from "lucide-react";

const TeamSection = () => {
  return (
    <div className="wrapper">
      <div className="bg-gray-100 p-8 rounded-xl shadow-lg my-10">
        <div className="flex items-center gap-4">
          <Briefcase className="w-10 h-10 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">
            About Our Leadership & Team
          </h2>
        </div>
        <p className="mt-4 text-gray-700">
          Our company is built on the foundation of innovation and excellence.
          Led by a visionary leader, our team of dedicated professionals brings
          together years of experience in digital marketing, branding, and
          technology solutions. With a passion for creativity and data-driven
          strategies, we work collaboratively to deliver impactful results for
          our clients.
        </p>
        <div className="flex items-center gap-4 mt-6">
          <Users className="w-10 h-10 text-green-600" />
          <h3 className="text-xl font-semibold text-gray-800">
            Meet Our Experts
          </h3>
        </div>
        <p className="mt-2 text-gray-700">
          Our diverse team consists of strategists, designers, developers, and
          marketing specialists, each contributing their unique expertise to
          create tailored solutions that drive growth and success for businesses
          worldwide.
        </p>
      </div>
    </div>
  );
};

export default TeamSection;
