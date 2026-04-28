import React, { useState, useEffect } from "react";
import { FiArrowDown, FiCode, FiZap } from "react-icons/fi";
// import { FaBrain, FaCogs } from "react-icons/fa";
import { MdManageAccounts,MdAssignmentAdd  } from "react-icons/md";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-scroll"; // ✅ import Link
import { motion } from "framer-motion";
import {FaUser,FaBrain,FaLightbulb,FaCogs,} from "react-icons/fa";
// import { FiUser, FiAward, FiTarget, FiTrendingUp } from "react-icons/fi";
import fb from "../assets/Home/fb.png";
import insta from "../assets/Home/insta.png";
import linkedin from "../assets/Home/linke.png";
import twitter from "../assets/Home/twitter.png";
import mainBg from "../assets/Home/main7.jpg";
// import ParticlesBg from "../Home/particlesbg";

function Home() {
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstText((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    {
      icon: <FiCode size={18} className="sm:w-5 sm:h-5" />,
      text: "MERN-Stack Development",
    },
    {
      icon: <FaBrain size={18} className="sm:w-5 sm:h-5" />,
      text: "AI/ML Engineering",
    },
    {
      icon: <FaCogs size={18} className="sm:w-5 sm:h-5" />,
      text: " Cloud Computing",
    },
    {
      icon: <FiZap size={18} className="sm:w-5 sm:h-5" />,
      text: "UI/UX Design",
    },
  ];
  const stats = [
    {
      icon: <FaUser />,
      number: "20+",
      label: "Clients within deadlines  ",
      color: "from-blue-400 to-cyan-500",
      target: "clients",
    },
    {
      icon: <MdAssignmentAdd size={18} />,
      number: "10+",
      label: "Assignments as Team Lead",
      color: "from-blue-400 to-cyan-500",
      target: "clients",
    },
      {
      icon: <FaBrain />,
      // number: "4",
      label: "Financial Statements Preparation & IFRS Expertise",
      color: "from-purple-400 to-pink-500",
      target: "clients",
    },
    {
      icon: <TbReportSearch size={18} />,
      label:
        "Fanancial Reporting, Planning & Analysis ",
      color: "from-orange-400 to-red-500",
      target: "clients",
    },
    
  ];
  const stats1 = [
    {
      icon: <FaBrain />,
      number: "4",
      label: "Years Experience",
      color: "from-purple-400 to-pink-500",
      target: "resume",
    },
    {
      icon: <TfiMicrosoftAlt size={18} />,
      label: (
        <>
          Microsoft Office,
          <br />
          Oracle and Power BI
        </>
      ),
      color: "from-emerald-400 to-teal-500",
      target: "certificates",
    },
    {
      icon: <MdManageAccounts size={18} />,
      label: "AP / AR & Reconciliations",
      color: "from-emerald-400 to-teal-500",
      target: "clients",
    },
    {
      icon: <FaLightbulb />,
      label:
        "Audit Strategy & Internal Controls Evaluation",
      color: "from-orange-400 to-red-500",
      target: "clients",
    },
    
  ];

  return (
    <div
      id="home"
      className="relative min-h-screen w-full text-white overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={mainBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-[75%_5%] z-0"
      />

      {/* Particles Layer (above image, below overlay & content) */}
      {/* <ParticlesBg /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center h-full px-6 md:px-10 text-white pt-80 md:pt-5">
        {/* Social Icons */}
<div className="absolute top-4 left-4 flex space-x-3 text-xl md:static md:mb-6">
  <a href="https://www.facebook.com/usama.badar.94">
    <img src={fb} alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
  </a>
  <a href="https://www.instagram.com/usamabadar.31">
    <img src={insta} alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
  </a>
  <a href="https://www.linkedin.com/in/usama-badar">
    <img src={linkedin} alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6" />
  </a>
  <img src={twitter} alt="Twitter" className="w-5 h-5 md:w-6 md:h-6" />
</div>


        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-serif lg:text-4xl lg:text-white font-light animate-fade-up delay-100"
        >
          Hello, I am
        </h2>

        <h1
          data-aos="fade-up"
          className="text-4xl font-serif md:text-6xl lg:text-white  font-bold italic  mt-2 animate-fade-up delay-500"
        >
          USAMA BADAR
        </h1>
        <h1
          data-aos="fade-up"
          className="mt-2 text-lg font-serif md:text-3xl font-bold text-grey-500 transition-opacity duration-1000 delay-1000 ease-in-out"
        >
          CA (F) ACCA (F)
        </h1>

        <h1
          data-aos="fade-up"
          className="mt-3 text-lg md:text-3xl font-serif font-bold lg:text-white tracking-wide animate-fade-up delay-1500"
        >
          Deputy Manager - Accounts & Finance Mahmood Group of Industries
        </h1>

        {/* <p
    data-aos="fade-up"
    className="mt-2 text-lg md:text-2xl font-bold text-grey-500 transition-opacity duration-1000 delay-2000 ease-in-out"
  >
    Chartered Accountant (Finalist)
     
  </p> */}

        <a
          href="/Usama Badar CV (1).pdf"
          print
          className="hover:cursor-pointer mt-6 transition-all duration-300 hover:text-lg  w-fit bg-blue-700  text-white px-5 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 shadow-lg animate-fade-up delay-300"
        >
          Print Resume
        </a>

        {/* Skills Grid
        <motion.div
          className="grid grid-cols-2 gap-3 mt-5 sm:gap-4 max-w-xs sm:max-w-md lg:max-w-1xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.text}
              className="group p-3 sm:p-4 bg-blue-800 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-white font-medium leading-tight">{skill.text}</p>
            </div>
          ))}
        </motion.div> */}

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

      {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-x-3 sm:gap-x-2 gap-y-6 mb-5 sm:gap-y-5 mt-6 sm:mt-8">
          {stats.map((stat, index) => (
            <Link
              key={index}
              to={stat.target}
              smooth={true}
              duration={600}
              offset={-80} // adjust for Navbar height
            >
              <motion.div
                className="cursor-pointer group p-3 sm:p-3 sm:max-w-md lg:max-w-xl
                          bg-transparent rounded-2xl border border-white/10
                          flex flex-col items-center text-center
                          transition-transform duration-100 ease-out hover:bg-white/10 hover:border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${stat.color}
                              flex items-center justify-center mb-2 sm:mb-3 transition-transform duration-100`}
                >
                  {stat.icon}
                </div>
                {stat.number && (
                  <div className="text-lg sm:text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                )}
                <div className="text-xs sm:text-xl text-white">{stat.label}</div>
              </motion.div>
            </Link>
          ))}
        </div>



          {/* Stats1 Grid */}
        <div className="grid grid-cols-2 gap-x-3 sm:gap-x-2 gap-y-6 sm:gap-y-5 mb-5 mt-6 sm:mt-8">
          {stats1.map((stat, index) => (
            <Link
              key={index}
              to={stat.target}
              smooth={true}
              duration={600}
              offset={-80}
            >
              <motion.div
                className="cursor-pointer group p-3 sm:p-3 sm:max-w-md lg:max-w-xl
                          bg-transparent rounded-2xl border border-white/10
                          flex flex-col items-center text-center
                          transition-transform duration-100 ease-out hover:bg-white/10 hover:border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${stat.color}
                              flex items-center justify-center mb-2 sm:mb-3 transition-transform duration-100`}
                >
                  {stat.icon}
                </div>
                {stat.number && (
                  <div className="text-lg sm:text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                )}
                <div className="text-xs sm:text-xl text-white">{stat.label}</div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
