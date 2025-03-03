import { CodeXml, NotebookPen, Rocket, ShieldCheck } from "lucide-react";
import logo from "../assets/logo/logo.png";
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";

export { logo };

// company
export const companyDetails = {
  name: "ASHBUCK TECHNOLOGIES",
  address:
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptatem vero aut earum molestias recusandae.",
  phone: "+0000000000",
  email: "abc@example.com",
};

// working process
export const workingProcess = [
  {
    step: 1,
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your business, your challenges, and your goals. This helps us craft a tailored strategy that aligns with your objectives and sets the foundation for success.",
    icon: NotebookPen,
  },
  {
    step: 2,
    title: "Design & Development",
    description:
      "With a clear strategy in place, we move on to the design and development phase. Whether it’s building a custom app, creating a website, or implementing AI, we ensure every solution is intuitive, scalable, and designed with the user experience in mind.",
    icon: CodeXml,
  },
  {
    step: 3,
    title: "Quality Assurance & Testing",
    description:
      "We believe in delivering nothing short of excellence. Our team conducts thorough testing to ensure that our solutions are reliable, secure, and perform as expected.",
    icon: ShieldCheck,
  },
  {
    step: 4,
    title: "Launch & Ongoing Optimization",
    description:
      "Once the solution is live, we continue to optimize and refine, providing continuous support to ensure your solution evolves with your business and remains at peak performance.",
    icon: Rocket,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    image: require("../assets/images/landingpage/ecommerce.webp"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    image: require("../assets/images/landingpage/socialmedia.webp"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    image: require("../assets/images/landingpage/landing.webp"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    image: require("../assets/images/landingpage/customweb.webp"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landingpage/ios.webp"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landingpage/android.webp"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    image: require("../assets/images/landingpage/flutter.webp"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    image: require("../assets/images/landingpage/hybrid.webp"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// AI Development Services
export const aiMlDevelopmentServices = [
  {
    id: 1,
    title: "Custom AI & ML Solutions",
    image: require("../assets/images/landingpage/ai_custom.jpg"),
    description:
      "Develop tailored AI and ML models to address unique business challenges, ensuring efficiency, accuracy, and optimized performance across various domains.",
  },
  {
    id: 2,
    title: "Intelligent Automation & Deployment",
    image: require("../assets/images/landingpage/ai_automation.jpg"),
    description:
      "Streamline business operations with AI-powered automation and seamlessly integrate machine learning models into workflows with continuous monitoring.",
  },
  {
    id: 3,
    title: "Data-Driven Insights & Preprocessing",
    image: require("../assets/images/landingpage/ai_insights.jpg"),
    description:
      "Leverage AI and ML to extract actionable intelligence from complex datasets while ensuring high-quality data preprocessing for accurate model training.",
  },
  {
    id: 4,
    title: "AI-Powered Predictive Analytics",
    image: require("../assets/images/landingpage/ai_analytics.jpg"),
    description:
      "Enhance business forecasting with AI-driven predictive analytics, utilizing historical data to anticipate future trends and growth opportunities.",
  },
];
export const digitalMarketingServices = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    image: require("../assets/images/landingpage/dmseo.jpg"),
    description:
      "Boost your online presence with data-driven SEO strategies, improving search rankings, organic traffic, and visibility across search engines.",
  },
  {
    id: 2,
    title: "Content Marketing",
    image: require("../assets/images/landingpage/dmcontent.jpg"),
    description:
      "Engage and educate your audience with high-quality, value-driven content, enhancing brand authority and driving customer interactions.",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    image: require("../assets/images/landingpage/dmsocial.jpg"),
    description:
      "Grow your brand’s presence across multiple social media platforms with targeted campaigns that increase engagement and conversions.",
  },
  {
    id: 4,
    title: "Pay-Per-Click (PPC) Advertising",
    image: require("../assets/images/landingpage/dmppc.jpg"),
    description:
      "Maximize ROI with high-performing PPC campaigns, leveraging paid ads to drive traffic, leads, and sales efficiently.",
  },
];

// testimonials
export const testimonials = [
  {
    name: "Sarah K.",
    position: "Chief Technology Officer, Innovate Tech Solutions",
    desc: `We partnered with ASHBUCK TECHNOLOGIES to implement blockchain technology for our business,
and the experience has been transformative. They helped us create a secure, scalable system
that is now the backbone of our operations. The team’s deep understanding of blockchain
technology made the process smooth, and we’ve already seen significant improvements in
efficiency and transparency.`,
    // img: require("../assets/images/testimonials/1.jpg"),
  },
  {
    name: "David L.",
    position: "Founder, FunPlay Games",
    desc: `ASHBUCK TECHNOLOGIES turned our game concept into a reality. They not only helped us with
game development but also provided insightful suggestions that improved gameplay and user
engagement. Their team delivered the project on time and exceeded our expectations. We’ve
received positive feedback from players, and the game is performing well in the app stores.`,
    // img: require("../assets/images/testimonials/2.jpg"),
  },
  {
    name: "Emma W.",
    position: "CEO, GreenLeaf Enterprises",
    desc: `Creating a custom app for our business was a challenge, but the team at ASHBUCK TECHNOLOGIES
made it an enjoyable experience. They listened to our needs and delivered a mobile app that’s
intuitive, feature-rich, and well-received by our customers. From design to development, they
provided excellent support and guidance throughout the process.`,
    // img: require("../assets/images/testimonials/3.jpg"),
  },
  {
    name: "Mark T.",
    position: "Operations Manager, GlobalCorp",
    desc: `Adopting RPA with ASHBUCK TECHNOLOGIES has streamlined many of our routine processes,
saving us time and resources. Their team took the time to understand our unique requirements
and designed bots that fit seamlessly into our operations. The results have been impressive —
we’ve reduced human error and increased overall efficiency.`,
    // img: require("../assets/images/testimonials/4.jpg"),
  },
  {
    name: "Jasmine D.",
    position: "Customer Support Head, BrightWave Tech",
    desc: `Integrating AI into our customer service operations has made a huge difference, and
ASHBUCK TECHNOLOGIES was instrumental in making it happen. Their expertise in AI development
helped us create a personalized experience for our customers, and we’ve seen higher
engagement and satisfaction since the implementation. The team was responsive and highly
skilled throughout the process.`,
    // img: require("../assets/images/testimonials/5.jpg"),
  },
  {
    name: "Chris H.",
    position: "Data Analyst, NextGen Enterprises",
    desc: `Working with ASHBUCK TECHNOLOGIES was a pivotal moment for our company. They helped us
harness the power of machine learning to better understand our data and make more informed
decisions. Their solutions enabled us to predict trends and optimize our operations, leading to
a measurable increase in productivity and profitability.`,
    // img: require("../assets/images/testimonials/6.jpg"),
  },
  {
    name: "Rebecca M.",
    position: "IT Manager, BrightTech Industries",
    desc: `Before migrating to the cloud, our infrastructure was holding us back. ASHBUCK TECHNOLOGIES
facilitated a smooth transition, providing expert guidance on cloud solutions and ensuring
that everything was integrated seamlessly. Our new cloud-based systems are more scalable
and cost-effective, allowing us to focus on growth without worrying about IT infrastructure.`,
    // img: require("../assets/images/testimonials/7.jpg"),
  },
  {
    name: "Michael S.",
    position: "Marketing Director, EcoGreen Solutions",
    desc: `We needed a modern, responsive website to represent our brand, and ASHBUCK TECHNOLOGIES
delivered exactly what we envisioned. Their team crafted an aesthetically pleasing and user-
friendly site that has increased our online presence. We’re already seeing more website traffic
and conversions, and we couldn’t be happier with the final result.`,
    // img: require("../assets/images/testimonials/8.jpg"),
  },
  {
    name: "Lily P.",
    position: "Chief Marketing Officer, LuxeGoods Retail",
    desc: `Our company had a large amount of unstructured data, and we needed a way to extract
valuable insights. ASHBUCK TECHNOLOGIES provided us with comprehensive data science solutions
that enabled us to make smarter, data-driven decisions. Their team’s expertise in predictive
analytics has helped us optimize our operations and improve overall business performance.`,
    // img: require("../assets/images/testimonials/9.jpg"),
  },
  {
    name: "Daniel R.",
    position: "Head of Technology, VoiceTech Solutions",
    desc: `We were looking for a solution to automate our customer interactions, and [Company
Name] provided the perfect NLP-powered solution. Their technology enabled us to deploy a
highly efficient virtual assistant, which has improved customer engagement and streamlined
our support process. We’ve already seen a marked reduction in response times.`,
    // img: require("../assets/images/testimonials/10.jpg"),
  },
  {
    name: "Nina F.",
    position: "Chief Technology Officer, WebFlow Enterprises",
    desc: `Moving our data and applications to the cloud was a huge undertaking, but [Company
Name] made the entire process seamless. From the initial assessment to post-migration
support, they handled every detail and ensured everything was up and running without
disruption. Our systems are now more flexible and efficient, and we have full confidence in
our new cloud infrastructure.`,
    // img: require("../assets/images/testimonials/11.jpg"),
  },
  {
    name: "Joshua E.",
    position: "CEO, Urban Style Apparel",
    desc: `The UI/UX redesign of our website and mobile app was a success, thanks to [Company
Name]. They worked closely with us to understand our audience and objectives, and the
results speak for themselves. Our users now have a smoother, more intuitive experience, and
we’ve seen a noticeable improvement in user engagement.`,
    // img: require("../assets/images/testimonials/12.jpg"),
  },
  {
    name: "Olivia G.",
    position: "Customer Service Manager, ComTech Solutions",
    desc: `Integrating AI into our customer support calls has been a major win for our team. The AI-
powered system built by ASHBUCK TECHNOLOGIES not only handles customer inquiries but also
provides accurate responses in real-time. This has freed up our support agents to handle more
complex cases, while improving our customer satisfaction ratings.`,
    // img: require("../assets/images/testimonials/13.jpg"),
  },
  {
    name: "Jack L.",
    position: "Digital Marketing Director, FutureTrend Media",
    desc: `ASHBUCK TECHNOLOGIES revamped our digital marketing strategy, and the results have been
outstanding. Their expertise in SEO, social media, and paid advertising has significantly
boosted our online presence and brought in more qualified leads. They’re a trusted partner,
and we continue to see positive results month after month.`,
    // img: require("../assets/images/testimonials/14.jpg"),
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
