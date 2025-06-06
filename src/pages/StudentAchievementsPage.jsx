import React from "react";
import "./AwardsRanking.css";

const awards = [
  {
    title: "Best University for Innovation and Campus Placement (2021)",
    description:
      "Awarded at the International Education Pride Awards 2021, presented by Shri Faggan Singh Kulaste, Hon'ble Union Minister of State for Steel, Government of India."
  },
  {
    title: "Best Disciplined University for Academics and Ambience (2021)",
    description:
      "Recognized at the Nation’s Education Pride Awards 2021, also presented by Shri Faggan Singh Kulaste."
  },
  {
    title: "Best University in Eastern India for Campus Placement (2020)",
    description:
      "Honored at the Asia Education Summit & Awards 2020, with the award presented by Shri Pratap Chandra Sarangi, Hon'ble Union Minister of State for MSME, Government of India."
  },
  {
    title: "Best University in Rural Area (2019)",
    description:
      "Received the ASSOCHAM Education Excellence Award during EduMeet 2019 & Education Excellence Awards in Kolkata."
  },
  {
    title: "Green Building and Energy Conservation Awards",
    description:
      "Recognized by the Indian Green Building Council (IGBC) for green building design and by the Department of Energy, Government of Odisha, for efforts in energy conservation."
  }
];

const rankings = [
  {
    title: "NIRF Engineering Category",
    description:
      "Ranked in the 201–300 band in both 2022 and 2024 by the National Institutional Ranking Framework (NIRF), Ministry of Education, Government of India."
  },
  {
    title: "ARIIA 2020",
    description:
      "Placed in Band B (Rank 26th–50th) by the Ministry of Human Resource Development (MHRD)."
  }
];
const StudentAchievementsPage = () => {
   return (
    <div className="awards-container">
      <h1 className="main-heading">Awards & Rankings</h1>

      <section>
        <h2 className="section-heading">Notable Awards</h2>
        <ul className="card-list">
          {awards.map((award, index) => (
            <li key={index} className="card">
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="section-heading">National Rankings</h2>
        <ul className="card-list">
          {rankings.map((rank, index) => (
            <li key={index} className="card">
              <h3>{rank.title}</h3>
              <p>{rank.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StudentAchievementsPage;
