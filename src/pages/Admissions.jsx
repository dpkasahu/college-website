// src/components/AdmissionsAid.jsx
// import './Admissions.css';

const Admissions = () => {
  return (
    <div className="admissions">
      <header className="aa-header">
        <h1>Admissions & Aid</h1>
        <p>Adimissions into GIET University, Gunupur.</p>
      </header>

      <section className="aa-section">
        <h2>Admissions Requirements</h2>
        <ul>
          <li>Completed Online Application</li>
          <li>Official High School/College Transcripts</li>
          <li>Personal Statement</li>
          <li>Interview with the Admissions Committee</li>
        </ul>
      </section>

      {/* <section className="aa-section">
        <h2>Financial Aid</h2>
        <p>Zaytuna College is committed to making education accessible. We offer:</p>
        <ul>
          <li>Need-based scholarships</li>
          <li>Merit-based scholarships</li>
          <li>Federal and state aid (FAFSA)</li>
          <li>Payment plans</li>
        </ul>
      </section> */}

      <section className="aa-section">
        <h2>Tuition & Fees</h2>
        <p></p>
      </section>

      <section className="aa-section contact">
        <h2>Contact Admissions</h2>
        <p>Email: enquiry@giet.edu</p>
        <p>Phone: +91 7735745535, 06857-250172</p>
      </section>

      <footer className="aa-footer">
        <p>&copy; {new Date().getFullYear()} GIET University, Gunupur. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Admissions;