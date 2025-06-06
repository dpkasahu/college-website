import React from "react";
import "./AccreditationPage.css"; 
const accreditationData = [
  {
    image: "/assets/naac.png",
    title:
      "NAAC (National Assessment and Accreditation Council, UGC, Govt. of India) accredited GIET in SECOND Cycle with – the highest grade (CGPA 3.28 on a four point scale.) certificate was awarded again for the years 2015-2020.",
   
  },
  {
    image: "/assets/dsir.png",
    title:
      "GIET University is recognized by DSIR (Govt. of India) as an institution for Quality Research.",
  },
  {
    image: "/assets/aicte.png",
    title: "Approved by AICTE, New Delhi, INDIA since 1997",
    
  },
  {
    image: "/assets/odisha.png",
    title:
      "Authorization under Biomedical Waste Management Rules, 2016 and Amendment thereof for operating a facility for collection, transportation, reception, treatment, storage and disposal.",
  },
  {
    image: "/assets/startup.png",
    title: "Recognition as a 'incubator' under the Odisha Startup Policy 2016",
  },
  {
    image: "/assets/iso.png",
    title: "ISO Certification (9001:2015)",
  },
  {
    image: "/assets/itda.png",
    title: "Integrated Tribal Development Agency",
  },
  {
    image: "/assets/nurses.png",
    title: "INDIAN NURSING COUNCIL ( INC )",
    
  },
  {
    image: "/assets/odisha-act.png",
    title: "Government of Odisha Act 2018",
  },
 
  {
    image: "/assets/aiu.png",
    title: "Membership of Association of Indian Universities",
  },
  {
    image: "/assets/nba.png",
    title:
      "NBA (National Board of Accreditation) AICTE, Govt. of India FIVE TIMES Accredited Five B.Tech programs (CSE, MECH, EEE, Biotech and ECE) for high quality technical education.",
  },
];

const AccreditationPage = () => {
  return (
    <div className="accreditation-page">
      <h1 className="page-title">Accreditations</h1>
      <div className="card-container">
        {accreditationData.map((item, index) => (
          <div className="accreditation-card" key={index}>
            <div className="image-container">
              <img
                src={item.image}
                alt={`Accreditation ${index + 1}`}
                className="accreditation-img"
              />
            </div>
            <div className="content-container">
              <p className="accreditation-title">{item.title}</p>
              {item.links && (
                <div className="accreditation-links">
                  {item.links.map((link, idx) => (
                    <span key={idx} className="link-item">
                      {link}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccreditationPage;
