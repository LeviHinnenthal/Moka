import BannerHome from "../src/assets/Img/bannerHome.png";
import Community1 from "../src/assets/Img/comu1.png";
import Community2 from "../src/assets/Img/comu2.png";
import Community3 from "../src/assets/Img/comu3.png";
import FooterImg from "../src/assets/Img/Footer.png";
import Logo from "../src/assets/Img/logo.png";
import LogoWithBakcground from "../src/assets/Img/logoWithBack.png";
import Training1 from "../src/assets/Img/tr1.png";
import Training2 from "../src/assets/Img/tr2.png";
import Training3 from "../src/assets/Img/tr3.png";
import Training4 from "../src/assets/Img/tr4.png";
import Training5 from "../src/assets/Img/tr5.png";
import Calendar from "../src/assets/Img/calendar.png";
import UserIcon from "../src/assets/Img/userIcon.png";
import Sale from "../src/assets/Img/sale.png";
import Message from "../src/assets/Img/message.png";
import Question from "../src/assets/Img/question.png"


export const header = {
  logo: Logo,
  btnLoginText: "Log in",
  btnSignupText: "Sign Up",
};
export const nav = [

  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Workouts", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Community", href: "/" },
  { name: "FAQ", href: "/" },
];

export const banner = {
  titlePart1: "Get the best part of your day",
  titlePart2: "- you fit here.",
  subtitle:
    "We provide serious fitness but within a fun and friendly, safe space",
  textBtn: "Join Now",
  img: BannerHome,
};

export const about = {
  icon: UserIcon,
  title: "Our mission",
  subtitle1:
    "We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exersice equipment, wich supports our members in meeting their individual fitness goals.",
  subtitle2:
    "The strenght of out heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves",
  link: "Join Now",
};

export const workouts = {
  icon: Calendar,
  title: "Training programs",
  progrmas: [
    {
      image: Training1,
      name: "Resistance",
    },
    {
      image: Training2,
      name: "Boxing",
    },
    {
      image: Training3,
      name: "Body Pump",
    },
    {
      image: Training4,
      name: "Yoga",
    },
    {
      image: Training5,
      name: "Full Body",
    },
    {
      image: Training2,
      name: "Fitness",
    },
    {
      image: Training4,
      name: "Battle Rope",
    },
    {
      image: Training4,
      name: "Yoga",
    },
    {
      image: Training5,
      name: "Full Body",
    },
    {
      image: Training2,
      name: "Fitness",
    },
    {
      image: Training4,
      name: "Battle Rope",
    }
  ],
};

export const pricing = {
  icon: Sale,
  title: "Pricing plan",
  plans: [
    {
      name: "Basic",
      price: "20",
      list: [
        { name: "unlimited gym access" },
        { name: "1 training programs" },
        { name: "free fitness consultation" },
      ],
      delay: 600,
    },
    {
      name: "Premium",
      price: "35",
      list: [
        { name: "unlimited gym access" },
        { name: "5 training programs" },
        { name: "free fitness consultation" },
        { name: "personal trainer" },
      ],
      delay: 800,
    },
    {
      name: "Elite",
      price: "49",
      list: [
        { name: "unlimited gym access" },
        { name: "all training programs" },
        { name: "free fitness consultation" },
        { name: "personal trianer" },
        { name: "50% off drinks" },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: Message,
  title: "Community",
  testimonials: [
    {
      image: Community1,
      name: "Jesse R.",
      message:
        "“Great location, great price and great people. What to want more?“",
    },
    {
      image: Community2,
      name: "Mark A.",
      message:
        "“Great location, great price and great people. What to want more?“",
    },
    {
      image: Community3,
      name: "Robert W.",
      message:
        "“Great location, great price and great people. What to want more?“",
    },
    {
      image: Community2,
      name: "Laurel A.",
      message:
        "“Great location, great price and great people. What to want more?“",
    },
    {
      image: Community1,
      name: "Jesse R.",
      message:
        "“Great location, great price and great people. What to want more?“",
    },
    {
      image: Community2,
      name: "Mark A.",
      message:
        "“Great location, great price and great people. What to want more?“",
    },
    {
      image: Community3,
      name: "Robert W.",
      message:
        "“Great location, great price and great people. What to want more?“",
    },
    {
      image: Community2,
      name: "Laurel A.",
      message:
        "“Great location, great price and great people. What to want more?“",
    }
  ],
};

export const faq = {
  icon: Question,
  title: "FAQ",
  accordions: [
    {
      question: "How can I book a workour class?",
      answer:
        "Lorem impsum dolor sit amet consectetur, adispising elit. Molestiae temporibus beatae, lorem impsum dolor sit amet consectetur",
    },
    {
      question: "Can I pay by cash for my membership?",
      answer:
        "Lorem impsum dolor sit amet consectetur, adispising elit. Molestiae temporibus beatae, lorem impsum dolor sit amet consectetur",
    },
    {
      question: "Are there any lockers?",
      answer:
        "Lorem impsum dolor sit amet consectetur, adispising elit. Molestiae temporibus beatae, lorem impsum dolor sit amet consectetur",
    },
    {
      question: "How do I cancell my membership?",
      answer:
        "Lorem impsum dolor sit amet consectetur, adispising elit. Molestiae temporibus beatae, lorem impsum dolor sit amet consectetur",
    },
    {
      question: "Is there water available at the gym?",
      answer:
        "Lorem impsum dolor sit amet consectetur, adispising elit. Molestiae temporibus beatae, lorem impsum dolor sit amet consectetur",
    },
  ],
};

export const join = {
  image: FooterImg,
  title: "Wanna join & have fun?",
  subtitle:
    "We´ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.",
  btnText: "Join now",
};

export const footer = {
    logo:Logo,
    copyrightText: 'All rights reserved. Gymme 2022.',
}
