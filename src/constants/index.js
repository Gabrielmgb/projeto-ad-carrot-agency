import service1 from "../assets/service1.jpeg";
import service2 from "../assets/service2.jpeg";
import service3 from "../assets/service3.jpeg";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import profile1 from "../assets/profile1.jpeg";
import profile2 from "../assets/profile2.jpeg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import profile5 from "../assets/profile5.jpg";
import profile6 from "../assets/profile6.jpeg";
import testimonial1 from "../assets/testimonial1.jpeg";
import testimonial2 from "../assets/testimonial2.jpeg";
import testimonial3 from "../assets/testimonial3.jpeg";
import testimonial4 from "../assets/testimonial4.jpeg";

export const LINKS = [
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Pricing", id: "pricing" },
  { name: "Team", id: "team" },
  { name: "Reviews", id: "reviews" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

export const ABOUT = {
  profileImages: [
    {
      src: profile6,
      alt: "Creative Team",
      delay: 0.1,
    },
    {
      src: profile3,
      alt: "Marketing Strategy",
      delay: 0.2,
    },
    {
      src: profile4,
      alt: "Digital Campaign",
      delay: 0.3,
    },
  ],
  aboutUsText:
    "At adCarrot, we are a dynamic team of creative professionals, marketing experts, and digital strategists committed to elevating your brand. We specialize in crafting innovative ad campaigns that drive engagement and deliver results.",
};

export const SERVICES = [
  {
    id: 1,
    title: "Marketing",
    content: "Tailored strategies to meet your unique business needs.",
    description:
      "Ultimately, this service empowers us to deliver data-driven marketing strategies that are laser-focused on achieving our clients' specific goals.",
    imgSrc: service1,
  },
  {
    id: 2,
    title: "Campaigns",
    content: "Optimize your campaigns for maximum reach and engagement.",
    description:
      "Ultimately, this service empowers us to deliver data-driven marketing strategies that are laser-focused on achieving our clients' specific goals.",
    imgSrc: service2,
  },
  {
    id: 3,
    title: "Consulting",
    content: "Get expert advice and insights to boost your marketing efforts.",
    description:
      "Ultimately, this service empowers us to deliver data-driven marketing strategies that are laser-focused on achieving our clients' specific goals.",
    imgSrc: service3,
  },
];

export const PROJECTS = [
  {
    year: "2023",
    title: "Olliviere",
    description: "How we furthered AI in tech.",
    details:
      "Olliviere approached us with a vision to integrate AI into their existing tech infrastructure. Our team worked closely with their engineers to develop and deploy advanced AI models that have significantly enhanced their operational efficiency and product offerings.",
    imageUrl: project1,
    figures: {
      investment: "$2M",
      duration: "12 months",
      outcome: "200% ROI",
    },
  },
  {
    year: "2023",
    title: "Jubilant",
    description: "How we doubled market growth.",
    details:
      "Jubilant was looking to expand their market presence. We conducted comprehensive market research and developed a targeted marketing strategy that led to a substantial increase in their market share, ultimately doubling their growth within a year.",
    imageUrl: project2,
    figures: {
      investment: "$1.5M",
      duration: "9 months",
      outcome: "150% market growth",
    },
  },
  {
    year: "2023",
    title: "Arper",
    description: "How we generated interest in type.",
    details:
      "Arper wanted to create a buzz around their new product line. We designed a creative campaign that highlighted the unique features of their products, resulting in a significant boost in brand awareness and customer engagement.",
    imageUrl: project3,
    figures: {
      investment: "$800K",
      duration: "6 months",
      outcome: "300% increase in engagement",
    },
  },
];

export const PACKAGES = [
  {
    name: "Premium",
    price: "$25K",
    description:
      "This premium package offers comprehensive advertising solutions for large-scale campaigns.",
    services: [
      "Brand strategy development",
      "Comprehensive market analysis",
      "Creative campaign design",
      "Multi-channel media planning",
      "24/7 campaign management",
    ],
  },
  {
    name: "Standard",
    price: "$15K",
    description:
      "This package includes effective market research and strategic campaign development.",
    services: [
      "Brand strategy development",
      "Market research and analysis",
      "Creative campaign design",
      "Multi-channel media planning",
      "Weekly campaign updates",
    ],
  },
  {
    name: "Basic",
    price: "$10K",
    description:
      "This package offers essential advertising solutions for startups and small businesses.",
    services: [
      "Brand strategy development",
      "Basic market analysis",
      "Creative campaign design",
      "Social media planning",
      "Monthly campaign reviews",
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Emily Martinez",
    title: "Creative Director",
    image: profile1,
  },
  {
    name: "Janine Mensah",
    title: "Marketing Strategist",
    image: profile2,
  },
  {
    name: "James Carter",
    title: "Lead Graphic Designer",
    image: profile3,
  },
  {
    name: "Claire Dunes",
    title: "Social Media Manager",
    image: profile4,
  },
  {
    name: "James Okafor",
    title: "SEO Specialist",
    image: profile5,
  },
  {
    name: "Michael Turner",
    title: "Content Creator",
    image: profile6,
  },
];

export const TESTIMONIALS = [
  {
    text: "Working with adCarrot has transformed our marketing strategy. Their creative solutions and dedication are unmatched.",
    author: "Sarah Johnson",
    title: "CEO, BrightFuture",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
    image: testimonial1,
  },
  {
    text: "The team at adCarrot is professional, innovative, and incredibly skilled. They have significantly improved our brand's online presence.",
    author: "David Williams",
    title: "CTO, TechSavvy",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    image: testimonial2,
  },
  {
    text: "adCarrot's approach to marketing is both strategic and creative. They understand our needs and deliver outstanding results.",
    author: "Emily Davis",
    title: "Marketing Director, FinancePro",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
    image: testimonial3,
  },
  {
    text: "The quality of work and the level of expertise at adCarrot is exceptional. We highly recommend their services. Overall happy!",
    author: "John Smith",
    title: "COO, StartSmart",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
    image: testimonial4,
  },
];

export const FAQS = [
  {
    question: "What services does adCarrot offer?",
    answer:
      "adCarrot offers a wide range of services including personalized marketing plans, flexible campaign scheduling, online consulting sessions, and more. Our services are designed to elevate your brand and drive engagement.",
  },
  {
    question: "How can adCarrot help my business grow?",
    answer:
      "adCarrot specializes in creating data-driven marketing strategies that are tailored to your unique business needs. Our team of experts works closely with you to optimize your campaigns and achieve your business goals.",
  },
  {
    question: "Can adCarrot handle social media management?",
    answer:
      "Yes, adCarrot offers comprehensive social media management services. We create engaging content, manage your social media accounts, and run targeted ad campaigns to increase your online presence.",
  },
  {
    question: "How does adCarrot measure campaign success?",
    answer:
      "We use advanced analytics and tracking tools to measure the success of your campaigns. Our team provides detailed reports and insights to help you understand the performance and ROI of your marketing efforts.",
  },
  {
    question: "What is the process for getting started with adCarrot?",
    answer:
      "Getting started with adCarrot is easy. Simply contact us to schedule a consultation. We'll discuss your business needs, develop a customized marketing plan, and get your campaigns up and running in no time.",
  },
  {
    question:
      "Is there customer support available for troubleshooting or customization assistance?",
    answer:
      "Yes, adCarrot offers dedicated customer support to assist you with any questions or issues. Our support team is available to help you with troubleshooting and provide guidance on customizing your marketing strategies.",
  },
];

export const FAQ_DESCRIPTION =
  "Explore quick answers to common queries in our FAQ section. Whether it's about our services, policies, or more, find the information you need. Need further assistance? Contact our customer support for personalized help!";
