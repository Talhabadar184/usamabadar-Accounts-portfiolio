import React from "react";
import services from "../assets/Clients/services.svg"
import services_tyres from "../assets/Clients/services_tyre.svg"
import sefam from "../assets/Clients/sefam.svg"
import Jomo from "../assets/Clients/jomo.svg"
import city from "../assets/Clients/city.svg"
import AT from "../assets/Clients/AT.svg"
import AKI from "../assets/Clients/AKI.svg"
import procon from "../assets/Clients/procon.svg"
import SG from "../assets/Clients/SG.svg"
import Sindh from "../assets/Clients/sindh.svg"
import Gray from "../assets/Clients/gray.svg"
import stylers from "../assets/Clients/stylers.svg"
import NC from "../assets/Clients/NC.svg"
import Master from "../assets/Clients/Master.svg"
import HND from "../assets/Clients/HND.svg"
import services_foot from "../assets/Clients/services_foot.svg";
import Maple from "../assets/Clients/Maple.svg";
import adam from "../assets/Clients/adam.svg";
import docs from "../assets/Clients/docs.svg";
import be from "../assets/Clients/BE.png";
import passion from "../assets/Clients/passion.jpeg";
import mg from "../assets/Clients/mg.png";
import { motion } from "framer-motion";
import { useState } from "react";

// ─── Mahmood Group Projects ───────────────────────────────────────────────────
const mahmoodProjects = [
  {
    title: "Beyond East (Masood Retail Pvt. Ltd.) – Retail",
    image: be,
    description: `
      • Managed the complete finance and accounting function for a multi-brand retail business, ensuring accurate financial reporting and compliance with IFRS and statutory requirements.\n
      • Oversaw retail accounting across multiple outlets, including sales accounting, POS reconciliations, inventory accounting, and daily cash and bank reconciliations.\n
      • Monitored inventory movements, stock valuation, gross margins, and shrinkage analysis to strengthen inventory controls and improve profitability.\n
      • Managed Accounts Payable and Accounts Receivable functions, ensuring timely vendor payments, customer collections, and effective working capital management.\n
      • Prepared monthly management accounts, budget variance reports, profitability analysis, and MIS reports to support strategic business decisions.\n
      • Coordinated with procurement, warehouse, operations, and retail teams to strengthen financial controls and streamline business processes.\n
      • Supervised month-end and year-end closing activities, ensuring timely preparation of financial statements and management reports.\n
    `,
    link: "https://www.beyondeast.com/?srsltid=AfmBOopbHAkXPmqOunZ_xUtVKIRAT1mmAxIaVIckoP00nM2jdopd9QM6",
  },
  {
    title: "Passion Foods Pvt. Ltd. – Food & Beverage (Subway Franchise & Bakery Operations)",
    image: passion,
    description: `
      • Managed finance operations for a food and beverage business operating Subway franchise restaurants and bakery outlets, ensuring accurate accounting and financial compliance.\n
      • Oversaw restaurant and bakery revenue accounting, including POS reconciliations, food cost analysis, inventory controls, wastage monitoring, and daily sales reporting.\n
      • Monitored recipe costing, gross profit margins, operating expenses, and outlet profitability to support pricing and operational decisions.\n
      • Managed supplier payments, procurement accounting, payroll-related reconciliations, and operational expenditure controls across multiple outlets.\n
      • Prepared monthly financial statements, cash flow forecasts, budget variance analysis, and management reports for senior leadership.\n
      • Implemented financial controls to safeguard inventory, cash collections, and operational assets while improving process efficiency.\n
      • Collaborated with operations and procurement teams to optimize food costs, improve cost efficiency, and enhance financial performance.\n
    `,
    link: "https://www.linkedin.com/company/passion-foods/?originalSubdomain=pk",
  },
  {
    title: "MG Agri Foods Pvt. Ltd. – Agricultural Exports",
    image: mg,
    description: `
      • Managed accounting and financial operations for an agricultural export business dealing in seasonal produce, ensuring compliance with financial reporting and export documentation requirements.\n
      • Oversaw export sales accounting, foreign customer receivables, supplier payments, and reconciliation of export-related transactions.\n
      • Managed inventory valuation, procurement accounting, cost allocation, and profitability analysis for agricultural products.
      • Prepared financial statements, management reports, budgets, forecasts, and variance analysis to support business planning and decision-making.\n
      • Coordinated with procurement, logistics, and export teams to ensure accurate accounting of inventory movements, shipping costs, and export-related expenses.\n
      • Strengthened internal controls, streamlined accounting processes, and ensured compliance with tax regulations, IFRS, and corporate reporting requirements.\n
    `,
    link: "https://mgagrifoods.com/",
  },
];

// ─── Nexia Projects ───────────────────────────────────────────────────────────
const categories = ["All", "Internal Audit", "Statutory Audit", "Cost Audit", "Demerger", "Forensic Audit", "Business Process Reengineering (BPR)", "Liquidation / Agreed Upon Procedures"];

const nexiaProjects = [
  {
    title: "Service Global Footwear Limited",
    subtitle: "Statutory Audit - Annual",
    image: services_foot,
    description: `
      • Led the annual statutory audit of Service Global Footwear Limited, a public listed company engaged in the manufacturing and export of footwear, ensuring compliance with International Financial Reporting Standards (IFRS) and regulatory guidelines of the Securities and Exchange Commission of Pakistan (SECP).\n
      • Led the audit team throughout the engagement, from planning to completion, ensuring timely execution of audit procedures, effective team coordination, and delivery of quality audit deliverables within reporting deadlines.\n
      • Prepared the complete set of financial statements, including the Statement of Financial Position, Profit or Loss and Other Comprehensive Income, Statement of Cash Flows, Statement of Changes in Equity, and related notes, ensuring accuracy, consistency, and compliance with IFRS and Companies Act, 2017.\n
      • Took ownership of the audit of contingencies and commitments, including legal claims, tax exposures, and guarantees, by reviewing legal correspondence, board meeting minutes, and representations from management.\n
      • Evaluated management's assessments and disclosures related to contingent liabilities under IAS 37 – Provisions, Contingent Liabilities, and Contingent Assets, ensuring sufficient audit evidence and appropriate accounting treatment.\n
      • Collaborated with internal and external legal counsel to assess the likelihood and financial impact of ongoing litigations and regulatory matters.\n
      • Prepared the audit report and management letter, summarizing key issues, control observations, and value-adding recommendations.\n
    `,
    category: "Statutory Audit",
    link: "https://serviceglobalfootwear.com/",
  },
  {
    title: "Service Industries Limited",
    subtitle: "Demerger and Statutory Audit - Annual",
    image: services,
    description: `
      • Led the end-to-end statutory audit of Service Industries Limited, a listed entity in the manufacturing and retail sector.\n
      • Prepared the complete set of financial statements, including disclosures for contingent liabilities and other critical notes as per IFRS and applicable regulations.\n
      • Oversaw the demerger process, resulting in incorporation of Service Tyres (Pvt.) Ltd. and Service Retail (Pvt.) Ltd., ensuring seamless audit coverage and regulatory compliance.\n
      • Ensured accurate transfer of assets, liabilities, and equity between demerged and resulting entities in accordance with the demerger scheme approved by SECP.\n
      • Coordinated with legal and finance departments to validate the correctness of balances, ensuring a smooth and compliant transition.\n
      • Conducted risk assessments and implemented audit procedures tailored to demerger-related complexities, enhancing reliability of financial reporting.\n
    `,
    category: ["Statutory Audit", "Demerger"],
    link: "https://servisgroup.com/",
  },
  {
    title: "Service Tyres (Private) Limited",
    subtitle: "Demerger and Statutory Audit - Annual",
    image: services_tyres,
    description: `
      • Managed the first statutory audit of Service Tyres (Private) Limited, a newly incorporated entity post-demerger from Service Industries Limited.\n
      • Prepared the inaugural set of financial statements, ensuring accurate incorporation of opening balances as per the approved demerger scheme and certificate.\n
      • Verified and ensured correct classification and recognition of assets, liabilities, and equity transferred under the demerger, in compliance with Companies Act, 2017 and relevant financial reporting standards.\n
      • Ensured full regulatory compliance with SECP requirements for newly incorporated entities resulting from corporate restructuring.\n
      • Collaborated with cross-functional teams to reconcile intercompany balances and disclosures, ensuring completeness and accuracy.\n
      • Played a key role in establishing initial financial reporting frameworks and control procedures for the new entity.\n
    `,
    category: ["Statutory Audit", "Demerger"],
    link: "https://www.servistyres.com/",
  },
  {
    title: "Service Retail (Private) Limited",
    subtitle: "Demerger and Statutory Audit - Annual",
    image: services,
    description: `
      • Led the first statutory audit of Service Retail (Private) Limited, incorporated as a result of the demerger from Service Industries Limited.\n
      • Prepared the initial complete set of financial statements, ensuring accurate recognition of opening balances in line with the approved demerger certificate and scheme of arrangement.\n
      • Ensured proper transfer and presentation of assets, liabilities, and equity, maintaining compliance with the Companies Act, 2017 and relevant IFRS/IAS requirements.\n
      • Verified alignment of financial records with demerger documents and facilitated compliance with SECP regulations for newly formed entities.\n
      • Coordinated with the finance, legal, and audit teams to resolve demerger-related complexities and establish robust initial reporting controls.\n
      • Ensured timely and accurate disclosures of related party transactions and transitional adjustments, enhancing financial statement transparency and audit quality.\n
    `,
    category: ["Statutory Audit", "Demerger"],
    link: "https://servis.pk/",
  },
  {
    title: "Stylers International Limited",
    subtitle: "Statutory Audit - Annual",
    image: stylers,
    description: `
      • Served as Audit Senior on the statutory financial audit of Stylers International Limited, ensuring full compliance with IFRS and local regulatory requirements.\n
      • Took lead responsibility for the audit of fixed assets, including verification of additions, disposals, depreciation, and compliance with IAS 16 – Property, Plant and Equipment.\n
      • Reviewed the revaluation of fixed assets conducted during the year, ensuring compliance with relevant IFRS and proper treatment of revaluation surplus and reserves.\n
      • Assessed the methodology and assumptions used by external valuation experts for revaluation.\n
      • Evaluated the adequacy of disclosures related to revalued assets, revaluation reserves, and fair value hierarchy in the notes to the financial statements.\n
      • Conducted audit procedures on accounts payable, including supplier reconciliations, ageing analysis, cutoff testing, and review of accruals and provisions.\n
    `,
    category: "Statutory Audit",
    link: "https://www.stylersintl.com/",
  },
  {
    title: "Nishat Chunian Limited",
    subtitle: "Statutory Audit – Annual and Special",
    image: NC,
    description: `
      • Led the annual and interim statutory audits of Nishat Chunian Limited, a listed company and one of Pakistan's leading textile exporters, ensuring compliance with IFRS and local corporate laws.\n
      • Prepared complete sets of standalone and consolidated financial statements incorporating three foreign subsidiaries.\n
      • Performed detailed audit procedures on long-term and short-term financing arrangements, including FE-25 loans, TERF, Running Finance, and international finance arrangements.\n
      • Verified loan agreements, reviewed compliance with covenants, validated interest and markup calculations, and ensured proper classification and disclosure in the financial statements.\n
      • Drafted the audit report and management letter, highlighting significant audit findings and recommending improvements.\n
    `,
    category: "Statutory Audit",
    link: "https://www.nishat.net/",
  },
  {
    title: "At Tahur Limited",
    subtitle: "Statutory Audit - Interim",
    image: AT,
    description: `
      • Performed interim audit procedures at At-Tahur Limited, a listed dairy company producing milk, lassi, flavored milk, and other dairy products.\n
      • Conducted audit of inventory and stores, covering raw materials, packing materials, WIP, and finished goods.\n
      • Carried out cut-off testing around period-end to ensure accurate recording of goods issued and received.\n
      • Verified inventory valuation at lower of cost or NRV as per IAS 2 – Inventories.\n
      • Performed audit procedures on trade receivables, including aging analysis and subsequent receipts testing for recoverability.\n
    `,
    category: "Statutory Audit",
    link: "https://www.at-tahur.com/",
  },
  {
    title: "Maple Leaf Capital Limited",
    subtitle: "Statutory Audit – Annual",
    image: Maple,
    description: `
      • Prepared the complete set of financial statements in accordance with IFRS and relevant regulatory requirements applicable to NBFCs.\n
      • Performed detailed audit procedures on the company's investment portfolio, including equities, mutual funds, and other financial instruments.\n
      • Verified initial recognition, classification, subsequent measurement, and disclosures of financial assets under IFRS 9 – Financial Instruments.\n
      • Conducted fair value testing of investments by obtaining market data and evaluating valuation methodologies.\n
      • Ensured compliance with regulatory guidelines issued by SECP for asset management companies.\n
    `,
    category: "Statutory Audit",
    link: "https://www.mapleleafcapital.org/",
  },
  {
    title: "Adamjee Insurance Company Limited",
    subtitle: "Statutory Audit – Interim",
    image: adam,
    description: `
      • Acted as Audit Senior during a special audit engagement focused on understanding the entity's operations and financial reporting framework.\n
      • Focused on key insurance areas including Gross Written Premium (GWP), Unearned Premium Reserve (UPR), Claims Liabilities, and Reinsurance Arrangements.\n
      • Reviewed reinsurance contracts, tested reinsurance recoveries, and verified premium cessions to reinsurers.\n
      • Ensured compliance with SECP insurance regulations and applicable accounting standards (IFRS 4 / IFRS 17 awareness).\n
    `,
    category: "Statutory Audit",
    link: "https://www.adamjeeinsurance.com/",
  },
  {
    title: "Sefam (Private) Limited",
    subtitle: "Business Process Engineering (BPR) and Standard Operating Procedures (SOPs)",
    image: sefam,
    description: `
      • Conducted a comprehensive Business Process Engineering (BPR) project for Sefam (Private) Limited, a leading textile and apparel manufacturer.\n
      • Conducted extensive "As-Is" process mapping by engaging with department heads and operational staff to document current workflows and identify inefficiencies.\n
      • Designed and developed Standard Operating Procedures (SOPs) from scratch for critical business functions in Finance, HR, and IT.\n
      • Created a full suite of customized supporting documents and templates including Purchase Orders, Inward Gate Passes, Sales Reconciliation Reports, and Asset Requisition Forms.\n
      • Delivered 25% faster inventory turnover and 13% cost efficiencies across supply chain and store operations.\n
    `,
    category: "Business Process Reengineering (BPR)",
    link: "https://sefam.com/",
  },
  {
    title: "Jomo Technologies (Private) Limited",
    subtitle: "Agreed Upon Procedures / Liquidator",
    image: Jomo,
    description: `
      • Served on secondment at Jomo Technologies (Private) Limited, a non-going concern under the management of Service Industries Limited, to execute agreed-upon procedures during the company's wind-up phase.\n
      • Acted as management-appointed liquidator, overseeing the orderly sale of assets and inventory.\n
      • Led final settlement negotiations and payments with employees, vendors, and suppliers.\n
      • Managed the company's liquidity and cash flows, including cash management, bank reconciliation statements, and payment scheduling.\n
      • Ensured accurate and compliant financial closure by aligning liquidation steps with applicable legal and financial reporting frameworks.\n
    `,
    category: "Liquidation / Agreed Upon Procedures",
    link: "https://pitchbook.com/profiles/company/500577-22",
  },
  {
    title: "The City School",
    subtitle: "Forensic Audit",
    image: city,
    description: `
      • Conducted a forensic audit at the North Region Office of The City School, overseeing financial and operational activities across 22 branches.\n
      • Uncovered multiple fraudulent practices in the procurement and supply chain departments, including irregular vendor dealings and unauthorized payments.\n
      • Assessed the effectiveness of internal controls and identified critical weaknesses in procurement processes, documentation flow, and authorization protocols.\n
      • Conducted a comprehensive HR audit, revealing unethical practices related to recruitment, payroll, and attendance records.\n
      • Drafted and presented forensic audit reports to senior management, contributing to strategic decisions on disciplinary actions and internal restructuring.\n
    `,
    category: "Forensic Audit",
    link: "https://thecityschool.edu.pk/",
  },
  {
    title: "Sindh Bank Limited",
    subtitle: "Compliance Audit",
    image: Sindh,
    description: `
      • Performed branch audits in accordance with firm methodology and SBP/AML regulatory frameworks, covering operations, compliance, and internal controls.\n
      • Physically verified branch closing cash balances, ensured dual control over keys, and adherence to SBP cash limits.\n
      • Verified account opening and closure processes, ensuring compliance with KYC, customer due diligence, and SBP Prudential Regulations.\n
      • Evaluated AML/CFT implementation including STR/CTR reporting mechanisms, staff training records, and sanctions list screening.\n
    `,
    link: "https://www.sindhbank.com.pk/",
  },
  {
    title: "DOCS Medical Billing, LLC",
    subtitle: "Human Resource and Information Technology Audit",
    image: docs,
    description: `
      • Conducted a comprehensive internal audit at DOCS Medical Billing, covering key operational areas including HR and IT functions.\n
      • Performed a thorough HR audit, identifying significant internal control weaknesses in attendance tracking, leave management, and the approval process.\n
      • Carried out a detailed IT audit, verifying the physical existence, tagging, and stock count of IT equipment and assets.\n
      • Proposed structured policy improvements and controls for asset management, enhancing operational efficiency and record accuracy.\n
    `,
    category: "Internal Audit",
    link: "https://docsmedicalbilling.com/",
  },
  {
    title: "Masters Textile Mills Limited",
    subtitle: "Internal Audit – Procurement & Inventory",
    subtitle1: "Cost Audit – Procurement & Inventory",
    image: Master,
    description: `
      The objective was to strengthen transparency, accountability, and accuracy of goods received and recorded, while also identifying weaknesses in internal control and process efficiency.\n

      Key Outcomes:\n
      • Initiated a dedicated receipt room assignment, ensuring that a third-party physically verifies goods entering the premises.\n
      • Identified key weaknesses in internal controls within the procurement department, including gaps in documentation, approval hierarchy, and material handling.\n
      • Streamlined the entire procurement process — from purchase order creation and approval to receipt and storage of goods.\n
      • Improved alignment between procurement, stores, and accounts departments, ensuring real-time updates and accurate GRN generation.\n
    `,
    description1: `
      The focus was to ensure proper classification of costs, detect inefficiencies in consumption, and provide management with reliable data for cost control and decision-making.\n

      Key Outcomes:\n
      • Verified accurate recording and allocation of procurement costs (purchase price, freight, duties, etc.) into inventory and cost centers.\n
      • Analyzed material consumption variances between standard and actual usage, identifying inefficiencies and wastage.\n
      • Evaluated GRN postings and store ledgers for correct valuation and timely cost recognition.\n
      • Ensured proper allocation of costs to production departments, in line with Cost Accounting Records Rules (Textiles).\n
    `,
    category: ["Internal Audit", "Cost Audit"],
    link: "https://mastertex.com/",
  },
  {
    title: "Procon Engineering (Private) Limited",
    subtitle: "Internal Audit and Process Improvement",
    image: procon,
    description: `
      • Initiated a dedicated receipt room assignment, ensuring that a third-party physically verifies goods entering the premises and records them based on actual quantities received.\n
      • Identified key weaknesses in internal controls within the procurement department, including gaps in documentation, approval hierarchy, and material handling.\n
      • Streamlined the entire procurement process — from purchase order creation and approval to receipt and storage of goods.\n
      • Improved alignment between procurement, stores, and accounts departments, ensuring real-time updates and accurate GRN generation.\n
    `,
    category: "Internal Audit",
    link: "https://procon.com.pk/",
  },
  {
    title: "H. Nizam Din & Sons (Private) Limited",
    subtitle: "Internal Audit – Procurement & Inventory",
    subtitle1: "Cost Audit – Procurement & Inventory",
    image: HND,
    description: `
      The objective was to strengthen transparency, accountability, and accuracy of goods received and recorded, while also identifying weaknesses in internal control and process efficiency.\n

      Key Outcomes:\n
      • Initiated a dedicated receipt room assignment, ensuring that a third-party physically verifies goods entering the premises.\n
      • Identified key weaknesses in internal controls within the procurement department.\n
      • Streamlined the entire procurement process — from purchase order creation and approval to receipt and storage of goods.\n
      • Improved alignment between procurement, stores, and accounts departments, ensuring real-time updates and accurate GRN generation.\n
    `,
    description1: `
      The focus was to ensure proper classification of costs, detect inefficiencies in consumption, and provide management with reliable data.\n

      Key Outcomes:\n
      • Verified accurate recording and allocation of procurement costs into inventory and cost centers.\n
      • Analyzed material consumption variances between standard and actual usage.\n
      • Evaluated GRN postings and store ledgers for correct valuation and timely cost recognition.\n
      • Ensured proper allocation of costs to production departments, in line with Cost Accounting Records Rules (Textiles).\n
    `,
    category: ["Internal Audit", "Cost Audit"],
    link: "https://nizamgroup.com/",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const getCategoryColor = (category) => {
  switch (category) {
    case "Statutory Audit": return "from-blue-400 to-cyan-500";
    case "Internal Audit": return "from-purple-400 to-pink-500";
    case "Cost Audit": return "from-emerald-400 to-teal-500";
    case "Forensic Audit": return "from-yellow-400 to-orange-500";
    case "Business Process Reengineering (BPR)": return "from-red-400 to-pink-500";
    case "Liquidation / Agreed Upon Procedures": return "from-gray-400 to-gray-600";
    default: return "from-gray-400 to-gray-600";
  }
};

const ProjectCard = ({ project, index, showCategory = false }) => (
  <div
    key={index}
    className="group bg-white text-black p-6 mt-5 rounded-lg shadow-md transition-all duration-300"
  >
    <img
      src={project.image}
      alt={project.title}
      className=" h-42 object-fill  rounded-t-lg"
    />
    <h2 className="text-1xl font-bold mt-4">{project.title}</h2>
    <h2 className="text-1xl font-bold mt-4">{project.subtitle}</h2>

    <div className="mt-2 overflow-hidden max-h-16 group-hover:max-h-[1150px] transition-all duration-500 ease-in-out">
      {project.description
        ? project.description.split("\n").map((line, i) => (
            <p key={i} className="text-sm leading-relaxed text-justify">{line}</p>
          ))
        : null}

      {project.subtitle1 && (
        <h2 className="text-1xl font-bold mt-4">{project.subtitle1}</h2>
      )}

      {project.description1
        ? project.description1.split("\n").map((line, i) => (
            <p key={i} className="mt-2 text-sm leading-relaxed text-justify">{line}</p>
          ))
        : null}

      <div className="flex flex-col items-center mt-3">
        {showCategory && project.category && (
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {(Array.isArray(project.category) ? project.category : [project.category]).map((cat, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(cat)} text-white`}
              >
                {cat}
              </span>
            ))}
          </div>
        )}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-black text-white py-2 px-4 rounded border border-blue-500 hover:bg-blue-500 transition"
        >
          View
        </a>
      </div>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
function Clients() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNexiaProjects =
    selectedCategory === "All"
      ? nexiaProjects
      : nexiaProjects.filter((project) => {
          const cats = Array.isArray(project.category)
            ? project.category
            : [project.category];
          return cats.includes(selectedCategory);
        });

  return (
    <section id="portfolio" className="py-12 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Mahmood Group Section ── */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-blue-700">Mahmood Group of Industries</h1>
        </div>

        <div className="grid grid-cols-1 max-w-6xl mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mahmoodProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} showCategory={false} />
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="my-16 border-t border-gray-200" />

        {/* ── Nexia Section ── */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-blue-700">
            Key Clientele <span className="text-gray-800">- Nexia International</span>
          </h1>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-black hover:bg-white/20 hover:border-white/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Nexia Projects Grid */}
        <div className="grid grid-cols-1 max-w-6xl mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNexiaProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} showCategory={true} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clients;