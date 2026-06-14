import React from 'react';

const About = () => {
  return (
    <div id='about' className="bg-white  justify-center items-center flex py-12 px-6 md:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto grid justify-center grid-cols-1 md:grid-cols-3 gap-12  border-gray-200 ">
        
        {/* Who Am I */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 border-b-2 border-blue-700 inline-block">Who am I ?</h2>
          <h3 className="mt-4 text-lg font-medium">Chartered Accountant (Finalist)</h3>
          <p className="mt-2 text-sm text-gray-600 text-justify">
  As a CA Finalist and Deputy Manager – Accounts & Finance at Mahmood Group of Industries, I bring over four years of diverse experience spanning external audit and corporate finance within multi-entity environments. Currently, I oversee end-to-end finance operations within a shared services framework, managing financial reporting, general ledger integrity, and working capital optimization across retail, F&B, and agriculture sectors.

My role involves preparation and analysis of IFRS-compliant financial statements, driving monthly reporting and variance analysis to support strategic decision-making. I lead core finance functions including procure-to-pay (P2P), accounts receivable, treasury, and cash flow planning, while ensuring robust internal controls and process standardization across entities.
<br/>
<br/>

Leveraging my prior experience with Nexia International, I bring a strong foundation in audit, risk assessment, and internal controls, enabling me to enhance financial governance and operational efficiency. I actively collaborate with cross-functional teams to streamline processes, implement SOPs, and improve reporting accuracy in dynamic, high-pressure environments.

I am recognized for my analytical mindset, leadership capabilities, and ability to bridge audit rigor with practical finance operations, delivering value-driven insights and sustainable process improvements.
</p>

<a
  href="/UsamaBadar.pdf"
  download
  className="mt-4 inline-block px-5 py-2 border border-blue-700 text-blue-700 transition-all duration-300 hover:text-lg hover:bg-blue-800 hover:text-white  rounded"
>
  Download My CV
</a>

        </div>

        {/* Personal Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 border-b-2 border-blue-700 inline-block">Personal Info</h2>
          <ul className="mt-4 text-sm space-y-2">
            <li className='mt-4'><strong>Birth Date:</strong> July 31, 2000            </li>
            <li className='mt-4'><strong>Email:</strong> usamabadar.finance@gmail.com</li>
            <li className='mt-4'><strong>Phone:</strong> +923314052004</li>
            <li className='mt-4'><strong>Address:</strong> Lahore. Punjab. Pakistan</li>
          </ul>
          <div className="mt-4 flex gap-4 text-blue-700 text-xl">
            {/* Icons */}
          </div>
        </div>

        {/* My Expertise */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 border-b-2 border-blue-700 inline-block"> Skills and Expertise</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h4 className="flex items-center gap-2 text-lg font-medium">
                
              International Financial Reporting Standards

              </h4>
              <p className="text-sm text-gray-600">Financial Statements Preparation, Financial Modeling and Forecasting, Due Diligence and Business Insights.</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-lg font-medium">
              Financial Auditing and Assurance
              </h4>
              <p className="text-sm text-gray-600">Audit Strategy and Development, Regulatory Compliance and Reporting, Internal Controls Evaluation</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-lg font-medium">
              Data Analytics and Management
              </h4>
              <p className="text-sm text-gray-600">Power BI, MS office, Oracle, Team leadership and Effective Communication.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
