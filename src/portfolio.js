import emoji from "react-easy-emoji";

import gsoc from "./assets/img/icons/common/gsoc.png";
import uniacco from "./assets/img/icons/common/uniacco.jpeg";
import sdslabs from "./assets/img/icons/common/sdslabsdark.jpeg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";
import marigold from "./assets/img/icons/common/marigold.jpg";
import iitr from "./assets/img/icons/common/iitr.jpg";
import chinar from "./assets/img/icons/common/chinar.png";

export const greetings = {
  name: "burnerlee",
  title: "Hey, I'm Aviral",
  description:
    "I am an ardent software developer and always try to build something practical with my developing skills.\n I love listening to music, watching cricket and am always up for a match of FIFA.",
  resumeLink:
    "https://drive.google.com/file/d/1cbKbm4nS7m8vfzi15QozVDp-frc3u1Eb/view?usp=sharing",
};

export const openSource = {
  githubUserName: "burnerlee",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/aviral.jain.12177",
  instagram: "https://www.instagram.com/tflying_phoenix/",
  twitter: "https://twitter.com/tflying_phoenix",
  github: "https://github.com/burnerlee",
  linkedin: "https://www.linkedin.com/in/burnerlee/",
};

export const skillsSection = {
  title: "My Skills",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ I develop highly interactive Frontend / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ I work on backend services & microservices and on integration of third party services such as Firebase/ AWS / Payment Portals etc"
    ),
    emoji("⚡ I love to build games on Unity3D"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "vscode-icons:file-type-reacttemplate",
    },
    {
      skillName: "django",
      fontAwesomeClassname: "logos:django-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "grommet-icons:golang",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
    {
      skillName: "unity3D",
      fontAwesomeClassname: "logos:unity",
    },
    {
      skillName: "C",
      fontAwesomeClassname: "logos:c",
    },
    {
      skillName: "cpp",
      fontAwesomeClassname: "logos:c-plusplus",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "HTML/CSS", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Django/Flask",
    progressPercentage: "87",
  },
  {
    Stack: "Javascript",
    progressPercentage: "85",
  },
  {
    Stack: "ReactJS/VueJS",
    progressPercentage: "80",
  },
  {
    Stack: "Golang/Python",
    progressPercentage: "75",
  },
  {
    Stack: "Unity3D",
    progressPercentage: "65",
  },
  {
    Stack: "Docker/AWS",
    progressPercentage: "55",
  },
  {
    Stack: "C/C++",
    progressPercentage: "50",
  },
];

export const educationInfo = [
  {
    schoolName: "Indian Institute of Technology, Roorkee",
    subHeader: "B.Tech in Electronics & Communication Engineering",
    duration: "July 2019 - July 2023",
    desc: "CGPA: 9.01",
    descBullets: [],
    pic: iitr,
  },
  {
    schoolName: "Marigold Public School, Delhi",
    subHeader: "Senior Secondary Education",
    duration: "April 2017 - March 2019",
    desc: "XII Boards Percentage: 94.8%",
    descBullets: ["JEE MAINS AIR: 1082", "JEE ADVANCED AIR: 1163"],
    pic: marigold,
  },
  {
    schoolName: "Chinar Public School",
    subHeader: "Secondary Education",
    duration: "April 2013 - March 2017",
    desc: "X Boards CGPA: 10",
    descBullets: [],
    pic: chinar,
  },
];

export const experience = [
  {
    role: "GSoC 2021 Intern",
    company: "CloudCV",
    companylogo: gsoc,
    date: "May 2021 – August 2021",
    desc: "Working as a Devops engineer to setup a monitoring and alerting system on EvalAI. As the number of challenges on EvalAI are increasing, we want to focus on improving the performance of our services. As a first step, we will focus on monitoring and measuring all the key metrics of our services. Insights from these will allow us to efficiently utilize our infrastructure, improve uptime and reduce costs.",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Uniacco",
    companylogo: uniacco,
    date: "May 2020 – July 2020",
    desc: "Worked as a full-stack web developer to build and maintain the Uniacco Main Website and CRM using Django and ReactJS framework. Developed RESTAPIs, added their functionality on the frontend and integrated 3rd party features like Stripe, Facebook Lead Ads and AWS. Implemented feature to automate the updating process of property details using government provided data APIs and developed new components and pages on the frontend.",
  },
  {
    role: "Software Developer",
    company: "SDSLabs",
    companylogo: sdslabs,
    date: "Jan 2020 – Present",
    desc: "SDSLabs or Software Development Section Laboratories is a student-run technical group at IIT Roorkee, which aims to encourage the development of technology and innovation in the campus and beyond. We believe in learning and sharing knowledge; collaboration and experimentation; and human interaction that matters the most.",
  },
];

export const projects = [
  {
    name: "CricLive",
    desc: "The cross platform app takes cricket text-commentary as input and generates live streaming of Cricket Match. The app was developed for Inout7.0 hackathon and bagged second position.",
    link: {
      name: "Github",
      url: "https://github.com/burnerlee/criclive",
    },
  },
  {
    name: "PlayCTF",
    desc: "PlayCTF serves as the frontend interface to the Beast - a Jeopardy style CTF challenge deployment and management tool. Admins can host CTF competitions and keep track of the progress of partcipants.",
    link: {
      name: "Github",
      url: "https://github.com/sdslabs/beast-frontend",
    },
  },
  {
    name: "Ikai",
    desc: "Ikai can scan, edit multimedia, share in both online and offline mode and has the chat feature to facilitate smooth remote collaboration. The app was developed for HAB59 hackathon and bagged the first prize in Office Productivity Category.",
    link: {
      name: "Github",
      url: "https://github.com/mhk19/ikai",
    },
  },
  {
    name: "Issue-Labeler Bot",
    desc: "It is an ML-bot to autmoate labelling of issues on github. It is based on Google Bert model which uses Text-Multi-Classification-Algorithms to assign multiple labels like bug/enhancement/high-priority to a single issue",
    link: {
      name: "Github",
      url: "https://github.com/sdslabs/sdslabs-issue-labeler",
    },
  },
  {
    name: "Pinger",
    desc: "Pinger is an uptime and status monitoring app with pluggable probes, storage backends and alerts. Added probes and checks for TCP & UDP Protocols and database APIs using Postgres GORM",
    link: {
      name: "Github",
      url: "https://github.com/sdslabs/pinger",
    },
  },
  {
    name: "Coderunner2.0",
    desc: "Coderunner2.0 is an open source application to execute code written in various programming languages in a safe and isolated docker environment. This projects is currently under production.",
  },
  {
    name: "Automatic Screen Brightness Controller",
    desc: "It is a side-fun project built using python which automatically changes the screen brightness according to the colors being displayed on the screen to protect your eyes from unwanted strain.",

    link: {
      name: "Github",
      url: "https://github.com/burnerlee/Automatic-Brightness-Controller",
    },
  },
  {
    name: "App-Controlled Robotic Arm",
    desc: "Developed a mechanical robotic arm with 5 degrees of freedom which was controlled by a self-built android app. It could pick and drop objects and could also be programmed to perform repeated movements.",
  },
];
