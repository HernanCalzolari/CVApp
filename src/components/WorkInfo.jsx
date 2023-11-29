import { useState } from 'react';

const WorkInfo = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    companyName: '',
    posTitle: '',
    responsabilities: '',
    dates: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { companyName, value } = e.target;
    setFormData({
      ...formData,
      [companyName]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, e.g., send it to a server
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input
            type="text"
            name="companyname"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Job Title:
          <input
            type="text"
            name="jobtitle"
            value={formData.posTitle}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Responsabilities:
          <input
            type="text"
            name="responsabilites"
            value={formData.responsabilities}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Dates:
          <input
            type="date"
            name="dates"
            value={formData.dates}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WorkInfo;
