import './apply.css';
import React, { useState } from 'react';
import jsPDF from 'jspdf';

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    course: '',
    qualification: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('GIET University Admission Form', 20, 20);

    doc.setFontSize(12);
    let y = 40;

    Object.entries(formData).forEach(([key, value]) => {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      doc.text(`${label}: ${value}`, 20, y);
      y += 10;
    });

    doc.save('University_Admission_Form.pdf');
  };

  return (
    <div className="form-container">
      <h1 className="formhead">GIET University Admission Form</h1>

      <form className="form-content">
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} rows="3" required />

        <label>Course Applied For:</label>
        <input type="text" name="course" value={formData.course} onChange={handleChange} required />

        <label>Last Qualification:</label>
        <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
      </form>

      <button onClick={generatePDF} className="print-button">Download PDF</button>
    </div>
  );
};

export default Apply;
