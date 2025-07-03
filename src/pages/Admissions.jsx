import './Admissions.css';
import { Link } from 'react-router-dom';
const Admission = () => {
  return (
    <div className="admission-container">
      <h1 className="title">Application Procedure</h1>
      <p className="intro">
        Application Form and Prospectus for admissions 2025 are available online. Aspirants have to apply online at
        <Link to='/admissions/register'> https://www.giet.edu/</Link>
      </p>

      <h2>Steps for Online Applications:</h2>
      <ol className="steps">
        <li>STEP 1 – Browse GIET University website</li>
        <li>STEP 2 – Click on Admission Open 2025 “Apply Now”</li>
        <li>STEP 3 – Register on our application portal with your email address. To register <Link to='/admissions/register'>click here</Link></li>
        <li>STEP 4 – Log-in using your email id and password</li>
        <li>STEP 5 – Fill in the application form online. Please note that a partially filled application form will not be saved.</li>
        <li>STEP 6 – After filling in the application form, click “Submit” and then on the next page, agree to the declaration and click on “Confirm Submission”.</li>
        <li>STEP 7 – Preview your application and print it if you require.</li>
      </ol>

      <h2>Check List:</h2>
      <div className="checklist-box">
        <p><strong>Please keep the following handy before starting to apply:</strong></p>
        <ul>
          <li>Scanned copy of photograph / digital photograph (Colour, 3.5 cm X 4.5 cm, 10 KB TO 20 KB)</li>
          <li>
            Marks of all required academic qualifications. For graduate programme applications, class XII marks may be updated later if results are not yet declared. For post graduate programme applications, graduation marks may be updated later if results are not yet declared.
          </li>
          <li>Roll nos. and scores of entrance tests (as applicable). These may be updated later if results are not yet declared</li>
        </ul>

        <p><strong>Note:</strong></p>
        <ul>
          <li>No Application/ Examination Fees for GIETEE– 2024 are charged. Please refer separate notification for Ph.D.</li>
          <li>
            If you are paying Initial Admission fee; you can pay online to:
            <br />
            <strong>ACCOUNT NAME:</strong> GIET UNIVERSITY, GUNUPUR<br />
            <strong>ACCOUNT NO.:</strong> 38401477840<br />
            <strong>IFSC CODE:</strong> SBIN0017769<br />
            <strong>BRANCH CODE:</strong> 17769
          </li>
        </ul>
      </div>

      <p className="contact">
        YOU CAN MAIL US THE APPLICATION ID, NAME OF THE CANDIDATE AND PAYMENT DETAILS ACROSS
        <a href="mailto:admission@giet.edu"> admission@giet.edu</a> or <strong>WhatsApp/Call:</strong> +91 7735745535
      </p>

      <address className="address">
        <strong>Office of Dean Admissions</strong><br />
        Central Admission Cell, Admin Block<br />
        GIET University, Gunupur<br />
        At – Gobriguda, Po- Kharling, Gunupur-765022<br />
        Dist – Rayagada, Odisha, India.
      </address>
    </div>
  );
};

export default Admission;