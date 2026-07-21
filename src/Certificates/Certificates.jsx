// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import certi1 from "../assets/Cerrificates/1.svg";
// import certi2 from "../assets/Cerrificates/2.svg";
// import certi3 from "../assets/Cerrificates/3.svg";
// import certi4 from "../assets/Cerrificates/4.svg";
// import certi5 from "../assets/Cerrificates/5.svg";
// import certi6 from "../assets/Cerrificates/6.svg";
// import certi7 from "../assets/Cerrificates/7.svg";
// import certi8 from "../assets/Cerrificates/8.svg";
// import certi9 from "../assets/Cerrificates/9.jpg";
// import certi10 from "../assets/Cerrificates/10.jpg";
// import certi11 from "../assets/Cerrificates/11.jpg";
// import certi12 from "../assets/Cerrificates/12.jpg";

// const projects = [
//   {
//     title: "Audit Simulation - PwC",
//     image: certi1,
//     description: `Key expertise include:\n• Control testing of a client's purchasing process for PwC's Audit team.\n• Compiling data through walkthrough documentation including findings.\n• Outlining the purchase process in a flowchart and risk control matrix.`,
//     link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/CA4pBqsy4b4PdyaBP/N9wYyLnaWpizw8Yjy_CA4pBqsy4b4PdyaBP_27odRkja688jCQkjA_1734707244466_completion_certificate.pdf",
//   },
//   {
//     title: "Audit Job Simulation - EY",
//     image: certi2,
//     description:
//     "Key expertise include: \n •Completed a job simulation involving identifying and assessing risks, and control and substantive testing for EY's Audit team.  \n •Put a transaction flow into the correct order, assigned risks of material misstatement to elements of the transaction flow, and identified which significant accounts these issues could impact. \n •Prepared for a conversation with the client about control failures found during control testing and what this means for testing strategy. \n•Reviewed outputs of an accounts analysis tool and summarized which issues to raise with my Senior",   
//     link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Z3pPDqCPapFTSGBgi/d2mpB4NEF4HQBkbhE_Z3pPDqCPapFTSGBgi_27odRkja688jCQkjA_1735067558408_completion_certificate.pdf",
//   },
//   {
//     title: "Career Catalyst: Audit - KPMG",
//     image: certi3,
//     description:
//       "Key expertise include: \n •Conducted a job simulation focused on auditing a hypothetical client, Ashbourne Industries. \n •Determined the materiality of general ledger accounts to plan the audit.•Prepared, sent, and evaluated the results of confirmations sent to third parties. \n •Reviewed the client's order-to-cash (OTC) process.•Communicated the audit findings via a video presentation and reviewed the audit opinion.",
//     link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/dqdMvpBtAYYtbbNge/G7BF7EPuCNecw3Bb3_dqdMvpBtAYYtbbNge_27odRkja688jCQkjA_1734963521494_completion_certificate.pdf",
//   },
//   {
//     title: "Investment Banking Job Simulation - J.P. Morgan Chase",
//     image: certi4,
//     description:
//       "Key expertise include: \n •Identified an ideal M&A target for a client based on an assessment of their strategic and financial criteria. \n•Constructed a DCF model to calculate the valuation of the M&A target and adjusted the model to account for a competitor bid and supply chain interruption. \n •Created a 2-pager for the client containing a company profile and summary of the auction process.",
//     link:
//       "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ZtgA28qyexifyEdHE/YD2kY95RQxQtXxFTS_ZtgA28qyexifyEdHE_27odRkja688jCQkjA_1735627582703_completion_certificate.pdf",
//   },
//   {
//     title: "Data Modeling in Power BI - Microsoft ",
//     image: certi5,
//     description:
//       `Key expertise include: \n
//       • Data Modeling: Creating and maintaining relationships, and implementing Star Schema designs for efficient data structures.\n
//       • DAX Proficiency: Developing calculated columns, measures, and time intelligence functions (YTD, YoY, etc.) for advanced analytics.\n
//       • Performance Optimization: Configuring models to enhance efficiency and support robust reporting capabilities.\n`,
//     link: "https://www.coursera.org/account/accomplishments/verify/SO9XOX0BZUXH",
//   },
//   {
//     title: "Professional Values, Ethics and Attitudes Course - ICAP",
//     image: certi6,
//     description:
//       `Successfully completed the mandatory ICAP course on Professional Values, Ethics and Attitudes, designed to instill the ethical foundation and professional conduct required of Chartered Accountants. Key learning outcomes included: \n
//       •In-depth understanding of ICAP’s Code of Ethics and the IFAC ethical framework.\n
//       •Application of professional skepticism and sound judgment in ethical decision-making.\n
//       •Identification and resolution of ethical threats and conflicts of interest.\n
//       •Promotion of integrity, transparency, and accountability in professional roles.\n
//       •Development of the right attitudes and behavior for leadership, public trust, and responsible governance.
// `,     link: "/professional.pdf",
//   },
//   {
//     title: "Data Management and Analytics - ICAP",
//     image: certi7,
//     description:
//       `Successfully completed the ICAP course on Data Management and Analytics, designed to equip Chartered Accountancy professionals with essential skills in modern data handling and analysis. Key competencies gained during the course include:\n
//       •Hands-on experience with Power BI for data visualization, dashboard creation, and business intelligence reporting.\n
//       •Application of DAX (Data Analysis Expressions) for advanced datamodeling and custom calculations.\n
//       •Introduction to Python for data extraction, transformation, and basic automation tasks.\n
//       •Understanding of data structuring, relational databases, and ETL (Extract, Transform, Load) processes.\n
//       •Strengthened ability to analyze trends, derive insights, and support data-driven decision-making.
// `,    link: "/DMA.pdf",
//   },
//   {
//     title: "Writing Skills and Presentation  ICAP",
//     image: certi8,
//     description:
//       `Successfully completed the ICAP Writing Skills and Presentation course, aimed at enhancing communication abilities for finance professionals. The course focused on building clarity, accuracy, and confidence in both written and verbal business communication. Key learnings included: \n
//       •Techniques for professional, concise, and reader-focused report writing. \n
//       •Use of clear structure, tone, and formatting for effective business correspondence.\n
//       •Application of creative writing strategies to improve engagement and impact.\n
//       •Development of presentation skills, including audience analysis, visual aids, and confident delivery.\n
//       •Practice through simulated board-level reports and live presentation exercises.\n`,
//     link: "/writing.pdf",
//   },
//   {
//     title: "Certificate in Accounting and Finance (CAF) ",
//     image: certi9,
//     description:
//       "Completed CA Intermediate, Certificate in Accounting and Finance (CAF) in 2021.",
//     link: "/accounting.pdf",
//   },
//   {
//     title: "ACCA (Part Qualified)",
//     image: certi10,
//     description:
//       "Granted exemption from 8 papers of ACCA based on qualifications in Chartered Accountancy of Pakistan.",
//     link: "/ACCA.pdf",
//   },
//   {
//     title: "Grade 11-12 / Senior High School",
//     image: certi11,
//     description:
//       "Passed Higher Secondary School (Grade 11-12) from Board of Intermediate and Secondary Education, Lahore with 78% marks.",
//     link: "/2nd.pdf",
//   },
//   {
//     title: "Grade 9 - 10 / High School",
//     image: certi12,
//     description:
//       "Passed  Secondary School (Grade 09-10) from Board of Intermediate and Secondary Education, Lahore with 85% marks.",
//     link: "/10th.pdf",
//   },
// ];

// function Certificates() {
//   return (
//     <section id="certificates" className="py-12 text-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="mb-12">
//           <h1 className="text-3xl font-bold text-blue-700">Professional Training <span className="text-gray-700">And Certificates</span></h1>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-white text-black p-6 mt-5 rounded-lg shadow-md transition-all duration-300"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-72 h-60 object-fill rounded-t-lg"
//               />
//               <h2 className="text-xl font-bold mt-4">{project.title}</h2>

//               <div className="mt-2 overflow-hidden max-h-16 group-hover:max-h-[550px] transition-all duration-500 ease-in-out">
//                 {project.description.split('\n').map((line, i) => (
//                   <p key={i} className="text-sm leading-relaxed text-justify">
//                     {line}
//                   </p>
//                 ))}
//                  <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className=" inline-block bg-black text-white py-2 px-4 rounded border border-blue-500 hover:bg-blue-500 transition"
//               >
//                 View
//               </a> 
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Certificates;
// import React from "react";
// import certi1 from "../assets/Cerrificates/1.svg"
// import certi2 from "../assets/Cerrificates/2.svg"
// import certi3 from "../assets/Cerrificates/3.svg"
// import certi4 from "../assets/Cerrificates/4.svg"
// import certi5 from "../assets/Cerrificates/5.svg"
// import certi6 from "../assets/Cerrificates/6.svg"
// import certi7 from "../assets/Cerrificates/7.svg"
// import certi8 from "../assets/Cerrificates/8.svg"
// import certi9 from "../assets/Cerrificates/9.jpg"
// import certi10 from "../assets/Cerrificates/10.jpg"
// import certi11 from "../assets/Cerrificates/11.jpg"
// import certi12 from "../assets/Cerrificates/12.jpg"

// const projects = [
//   {
//     title: "Audit Simulation - PwC",
//     image: certi1,
//     description: `Key expertise include:\n• Control testing of a client's purchasing process for PwC's Audit team.\n• Compiling data through walkthrough documentation including findings.\n• Outlining the purchase process in a flowchart and risk control matrix.`,
//     link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/CA4pBqsy4b4PdyaBP/N9wYyLnaWpizw8Yjy_CA4pBqsy4b4PdyaBP_27odRkja688jCQkjA_1734707244466_completion_certificate.pdf",
//   },
//   {
//     title: "Audit Job Simulation - EY",
//     image: certi2,
//     description:
//     "Key expertise include: \n •Completed a job simulation involving identifying and assessing risks, and control and substantive testing for EY's Audit team.  \n •Put a transaction flow into the correct order, assigned risks of material misstatement to elements of the transaction flow, and identified which significant accounts these issues could impact. \n •Prepared for a conversation with the client about control failures found during control testing and what this means for testing strategy. \n•Reviewed outputs of an accounts analysis tool and summarized which issues to raise with my Senior",   
//     link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Z3pPDqCPapFTSGBgi/d2mpB4NEF4HQBkbhE_Z3pPDqCPapFTSGBgi_27odRkja688jCQkjA_1735067558408_completion_certificate.pdf",
//   },
//   {
//     title: "Career Catalyst: Audit - KPMG",
//     image: certi3,
//     description:
//       "Key expertise include: \n •Conducted a job simulation focused on auditing a hypothetical client, Ashbourne Industries. \n •Determined the materiality of general ledger accounts to plan the audit.•Prepared, sent, and evaluated the results of confirmations sent to third parties. \n •Reviewed the client's order-to-cash (OTC) process.•Communicated the audit findings via a video presentation and reviewed the audit opinion.",
//     link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/dqdMvpBtAYYtbbNge/G7BF7EPuCNecw3Bb3_dqdMvpBtAYYtbbNge_27odRkja688jCQkjA_1734963521494_completion_certificate.pdf",
//   },
//   {
//     title: "Investment Banking Job Simulation - J.P. Morgan Chase",
//     image: certi4,
//     description:
//       "Key expertise include: \n •Identified an ideal M&A target for a client based on an assessment of their strategic and financial criteria. \n•Constructed a DCF model to calculate the valuation of the M&A target and adjusted the model to account for a competitor bid and supply chain interruption. \n •Created a 2-pager for the client containing a company profile and summary of the auction process.",
//     link:
//       "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ZtgA28qyexifyEdHE/YD2kY95RQxQtXxFTS_ZtgA28qyexifyEdHE_27odRkja688jCQkjA_1735627582703_completion_certificate.pdf",
//   },
//   {
//     title: "Data Modeling in Power BI - Microsoft ",
//     image: certi5,
//     description:
//       `Key expertise include: \n
//       • Data Modeling: Creating and maintaining relationships, and implementing Star Schema designs for efficient data structures.\n
//       • DAX Proficiency: Developing calculated columns, measures, and time intelligence functions (YTD, YoY, etc.) for advanced analytics.\n
//       • Performance Optimization: Configuring models to enhance efficiency and support robust reporting capabilities.\n`,
//     link: "https://www.coursera.org/account/accomplishments/verify/SO9XOX0BZUXH",
//   },
//   {
//     title: "Professional Values, Ethics and Attitudes Course - ICAP",
//     image: certi6,
//     description:
//       `Successfully completed the mandatory ICAP course on Professional Values, Ethics and Attitudes, designed to instill the ethical foundation and professional conduct required of Chartered Accountants. Key learning outcomes included: \n
//       •In-depth understanding of ICAP’s Code of Ethics and the IFAC ethical framework.\n
//       •Application of professional skepticism and sound judgment in ethical decision-making.\n
//       •Identification and resolution of ethical threats and conflicts of interest.\n
//       •Promotion of integrity, transparency, and accountability in professional roles.\n
//       •Development of the right attitudes and behavior for leadership, public trust, and responsible governance.
// `,     link: "/professional.pdf",
//   },
//   {
//     title: "Data Management and Analytics - ICAP",
//     image: certi7,
//     description:
//       `Successfully completed the ICAP course on Data Management and Analytics, designed to equip Chartered Accountancy professionals with essential skills in modern data handling and analysis. Key competencies gained during the course include:\n
//       •Hands-on experience with Power BI for data visualization, dashboard creation, and business intelligence reporting.\n
//       •Application of DAX (Data Analysis Expressions) for advanced datamodeling and custom calculations.\n
//       •Introduction to Python for data extraction, transformation, and basic automation tasks.\n
//       •Understanding of data structuring, relational databases, and ETL (Extract, Transform, Load) processes.\n
//       •Strengthened ability to analyze trends, derive insights, and support data-driven decision-making.
// `,    link: "/DMA.pdf",
//   },
//   {
//     title: "Writing Skills and Presentation  ICAP",
//     image: certi8,
//     description:
//       `Successfully completed the ICAP Writing Skills and Presentation course, aimed at enhancing communication abilities for finance professionals. The course focused on building clarity, accuracy, and confidence in both written and verbal business communication. Key learnings included: \n
//       •Techniques for professional, concise, and reader-focused report writing. \n
//       •Use of clear structure, tone, and formatting for effective business correspondence.\n
//       •Application of creative writing strategies to improve engagement and impact.\n
//       •Development of presentation skills, including audience analysis, visual aids, and confident delivery.\n
//       •Practice through simulated board-level reports and live presentation exercises.\n`,
//     link: "/writing.pdf",
//   },
//   {
//     title: "Certificate in Accounting and Finance (CAF) ",
//     image: certi9,
//     description:
//       "Completed CA Intermediate, Certificate in Accounting and Finance (CAF) in 2021.",
//     link: "/accounting.pdf",
//   },
//   {
//     title: "ACCA (Part Qualified)",
//     image: certi10,
//     description:
//       "Granted exemption from 8 papers of ACCA based on qualifications in Chartered Accountancy of Pakistan.",
//     link: "/ACCA.pdf",
//   },
//   {
//     title: "Grade 11-12 / Senior High School",
//     image: certi11,
//     description:
//       "Passed Higher Secondary School (Grade 11-12) from Board of Intermediate and Secondary Education, Lahore with 78% marks.",
//     link: "/2nd.pdf",
//   },
//   {
//     title: "Grade 9 - 10 / High School",
//     image: certi12,
//     description:
//       "Passed  Secondary School (Grade 09-10) from Board of Intermediate and Secondary Education, Lahore with 85% marks.",
//     link: "/10th.pdf",
//   },
// ];

// function Certificates() {
//   return (
//     <section id="certificates" className="py-12 text-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="mb-12">
//           <h1 className="text-3xl font-bold text-blue-700">Professional Training <span className="text-gray-700">And Certificates</span></h1>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-white text-black p-6 mt-5 rounded-lg shadow-md transition-all duration-300"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-72 h-60 object-fill rounded-t-lg"
//               />
//               <h2 className="text-xl font-bold mt-4">{project.title}</h2>

//               <div className="mt-2 overflow-hidden max-h-16 group-hover:max-h-[550px] transition-all duration-500 ease-in-out">
//                 {project.description.split('\n').map((line, i) => (
//                   <p key={i} className="text-sm leading-relaxed text-justify">
//                     {line}
//                   </p>
//                 ))}
//                  <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className=" inline-block bg-black text-white py-2 px-4 rounded border border-blue-500 hover:bg-blue-500 transition"
//               >
//                 View
//               </a> 
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Certificates;
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certi1 from "../assets/Cerrificates/1.svg";
import certi2 from "../assets/Cerrificates/2.svg";
import certi3 from "../assets/Cerrificates/3.svg";
import certi4 from "../assets/Cerrificates/4.svg";
import certi5 from "../assets/Cerrificates/5.svg";
import certi6 from "../assets/Cerrificates/6.svg";
import certi7 from "../assets/Cerrificates/7.svg";
import certi8 from "../assets/Cerrificates/8.svg";
import certi9 from "../assets/Cerrificates/9.jpg";
import certi10 from "../assets/Cerrificates/10.jpg";
import certi11 from "../assets/Cerrificates/11.jpg";
import certi12 from "../assets/Cerrificates/12.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORY_COLORS = {
  "Job Simulation":   { pill: "bg-blue-100 text-blue-800",    dot: "bg-blue-500"    },
  "Microsoft":        { pill: "bg-cyan-100 text-cyan-800",    dot: "bg-cyan-500"    },
  "ICAP":             { pill: "bg-emerald-100 text-emerald-800", dot: "bg-emerald-500" },
  "Qualification":    { pill: "bg-purple-100 text-purple-800", dot: "bg-purple-500"  },
  "Education":        { pill: "bg-amber-100 text-amber-800",  dot: "bg-amber-500"   },
};

const getColor = (cat) =>
  CATEGORY_COLORS[cat] ?? { pill: "bg-gray-100 text-gray-700", dot: "bg-gray-400" };

const projects = [
  {
    title: "Audit Simulation",
    issuer: "PwC",
    category: "Job Simulation",
    image: certi1,
    summary: "Control testing of a client's purchasing process for PwC's Audit team.",
    bullets: [
      "Control testing of a client's purchasing process for PwC's Audit team.",
      "Compiled data through walkthrough documentation including findings.",
      "Outlined the purchase process in a flowchart and risk control matrix.",
    ],
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/CA4pBqsy4b4PdyaBP/N9wYyLnaWpizw8Yjy_CA4pBqsy4b4PdyaBP_27odRkja688jCQkjA_1734707244466_completion_certificate.pdf",
  },
  {
    title: "Audit Job Simulation",
    issuer: "EY",
    category: "Job Simulation",
    image: certi2,
    summary: "Identifying and assessing risks, control and substantive testing for EY's Audit team.",
    bullets: [
      "Assigned risks of material misstatement to transaction flow elements and identified impacted accounts.",
      "Prepared for a client conversation about control failures and their impact on testing strategy.",
      "Reviewed outputs of an accounts analysis tool and summarised issues for the Senior.",
    ],
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Z3pPDqCPapFTSGBgi/d2mpB4NEF4HQBkbhE_Z3pPDqCPapFTSGBgi_27odRkja688jCQkjA_1735067558408_completion_certificate.pdf",
  },
  {
    title: "Career Catalyst: Audit",
    issuer: "KPMG",
    category: "Job Simulation",
    image: certi3,
    summary: "Auditing a hypothetical client — Ashbourne Industries — from planning through to opinion.",
    bullets: [
      "Determined materiality of general ledger accounts to plan the audit scope.",
      "Prepared, sent, and evaluated confirmations sent to third parties.",
      "Reviewed the client's order-to-cash (OTC) process.",
      "Communicated audit findings via video presentation and reviewed the audit opinion.",
    ],
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/dqdMvpBtAYYtbbNge/G7BF7EPuCNecw3Bb3_dqdMvpBtAYYtbbNge_27odRkja688jCQkjA_1734963521494_completion_certificate.pdf",
  },
  {
    title: "Investment Banking Job Simulation",
    issuer: "J.P. Morgan Chase",
    category: "Job Simulation",
    image: certi4,
    summary: "M&A target identification, DCF modelling, and client 2-pager preparation.",
    bullets: [
      "Identified an ideal M&A target based on strategic and financial criteria assessment.",
      "Constructed a DCF model for valuation, adjusted for a competitor bid and supply chain interruption.",
      "Created a 2-pager with company profile and auction process summary for the client.",
    ],
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ZtgA28qyexifyEdHE/YD2kY95RQxQtXxFTS_ZtgA28qyexifyEdHE_27odRkja688jCQkjA_1735627582703_completion_certificate.pdf",
  },
  {
    title: "Data Modeling in Power BI",
    issuer: "Microsoft",
    category: "Microsoft",
    image: certi5,
    summary: "Building efficient Star Schema data models and advanced DAX analytics in Power BI.",
    bullets: [
      "Created and maintained relationships and implemented Star Schema designs for efficient data structures.",
      "Developed calculated columns, measures, and time intelligence functions (YTD, YoY) for advanced analytics.",
      "Configured models to enhance performance and support robust reporting capabilities.",
    ],
    link: "https://www.coursera.org/account/accomplishments/verify/SO9XOX0BZUXH",
  },
  {
    title: "Professional Values, Ethics and Attitudes",
    issuer: "ICAP",
    category: "ICAP",
    image: certi6,
    summary: "Mandatory ICAP course instilling the ethical foundation required of Chartered Accountants.",
    bullets: [
      "In-depth understanding of ICAP's Code of Ethics and the IFAC ethical framework.",
      "Application of professional scepticism and sound judgement in ethical decision-making.",
      "Identification and resolution of ethical threats and conflicts of interest.",
      "Development of attitudes for leadership, public trust, and responsible governance.",
    ],
    link: "/professional.pdf",
  },
  {
    title: "Assessment of Fundamental Competencies (AFC) Certificate",
    issuer: "Institute of Chartered Accountants of Pakistan",
    category: "ICAP",
    image: certi7,
    summary: "Completed CA foundation in 2019",
    bullets: [
      "Hands-on Power BI for data visualisation, dashboard creation, and business intelligence reporting.",
      "Applied DAX for advanced data modelling and custom calculations.",
      "Introduction to Python for data extraction, transformation, and basic automation.",
      "Understanding of relational databases and ETL processes for data-driven decision-making.",
    ],
    link: "/AFC Certificate (CA Foundation).pdf",
  },
  {
    title: "Certificate in Accounting and Finance (CAF)",
    issuer: "ICAP",
    category: "Qualification",
    image: certi9,
    summary: "Completed CA Intermediate — Certificate in Accounting and Finance — in 2021.",
    bullets: [
      "Completed CA Intermediate, Certificate in Accounting and Finance (CAF) in 2021.",
    ],
    link: "/accounting.pdf",
  },
  {
    title: "Certified Finance and Accounting Professional (CFAP) Certificate",
    issuer: "Intitute of Chartered Accountants of Pakistan",
    category: "Qualification",
    image: certi9,
    summary: "1st stage of CA finals examination.",
    bullets: [
      "Completed CA Intermediate, Certificate in Accounting and Finance (CAF) in 2021.",
    ],
    link: "/CFAP Certificate (CA Finals).pdf",
  },
  {
    title: "ACCA (Part Qualified)",
    issuer: "ACCA",
    category: "Qualification",
    image: certi10,
    summary: "Granted exemption from 8 ACCA papers based on CA Pakistan qualifications.",
    bullets: [
      "Granted exemption from 8 papers of ACCA based on qualifications in Chartered Accountancy of Pakistan.",
    ],
    link: "/ACCA.pdf",
  },
  {
    title: "Grade 11–12 / Senior High School",
    issuer: "BISE Lahore",
    category: "Education",
    image: certi11,
    summary: "Higher Secondary School Certificate with 78% marks from BISE Lahore.",
    bullets: [
      "Passed Higher Secondary School (Grade 11–12) from Board of Intermediate and Secondary Education, Lahore with 78% marks.",
    ],
    link: "/2nd.pdf",
  },
  {
    title: "Grade 9–10 / High School",
    issuer: "BISE Lahore",
    category: "Education",
    image: certi12,
    summary: "Secondary School Certificate with 85% marks from BISE Lahore.",
    bullets: [
      "Passed Secondary School (Grade 9–10) from Board of Intermediate and Secondary Education, Lahore with 85% marks.",
    ],
    link: "/10th.pdf",
  },
];

const CATEGORIES = ["All", ...Object.keys(CATEGORY_COLORS)];

// ─── Modal ────────────────────────────────────────────────────────────────────

function DetailModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const { pill } = getColor(project.category);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Certificate image */}
        <div className="h-52 bg-gray-50 flex items-center justify-center border-b border-gray-100 rounded-t-2xl overflow-hidden px-8">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-44 max-w-full object-contain"
          />
        </div>

        {/* Body */}
        <div className="p-7">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${pill}`}>
            {project.category}
          </span>

          <h2 className="text-xl font-bold text-gray-900 leading-snug mt-3">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-blue-600 mt-1 mb-4">{project.issuer}</p>

          <p className="text-sm text-gray-500 leading-relaxed mb-5">{project.summary}</p>

          {project.bullets.length > 1 && (
            <ul className="space-y-3">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-100">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200"
            >
              View Certificate ↗
            </a>
            <button
              onClick={onClose}
              className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>

        {/* Close ✕ */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-gray-700 text-lg leading-none transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function CertCard({ project, index, onClick }) {
  const { pill, dot } = getColor(project.category);

  return (
    <motion.div
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm
                 cursor-pointer overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      layout
    >
      {/* Certificate preview */}
      <div className="h-44 bg-gray-50 flex items-center justify-center border-b border-gray-100 overflow-hidden px-6">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-36 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category dot */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`w-2 h-2 rounded-full ${dot}`} />
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${pill}`}>
            {project.category}
          </span>
        </div>

        <h3 className="text-sm font-bold text-gray-900 leading-snug">{project.title}</h3>
        <p className="text-xs text-blue-600 font-medium mt-1">{project.issuer}</p>

        <p className="text-xs text-gray-500 mt-3 leading-relaxed line-clamp-2">
          {project.summary}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-end">
          <span className="text-xs font-semibold text-blue-600 group-hover:underline">
            Details →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const closeModal = useCallback(() => setActiveProject(null), []);

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="certificates" className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-700">
            Professional Training{" "}
            <span className="text-gray-500 font-normal">& Certificates</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Click any card to view certificate details.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  active
                    ? "bg-blue-600 text-white border-blue-600 shadow"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <CertCard
                key={project.title}
                project={project}
                index={i}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-20 text-sm">
            No certificates found for this category.
          </p>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <DetailModal project={activeProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;