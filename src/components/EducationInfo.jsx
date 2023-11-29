import { useState } from "react";
import "../css/styles.css";

const EducationInfo = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    highschoolname: "",
    highschooltitle: "",
    highschooldate: "",
    uniname: "",
    unidegree: "",
    unidate: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log(formData);
  };

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <h2 className="inline">Education</h2>{" "}
      {!isEditing && (
        <button type="button" onClick={handleEditClick}>
          Edit
        </button>
      )}
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <label>
            Highschool:
            <input
              type="text"
              name="highschoolname"
              value={formData.highschoolname}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Title:
            <input
              type="text"
              name="highschooltitle"
              value={formData.highschooltitle}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Dates:
            <input
              type="date"
              name="highschooldate"
              value={formData.highschooldate}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            University:
            <input
              type="text"
              name="uniname"
              value={formData.uniname}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Degree:
            <input
              type="text"
              name="unidegree"
              value={formData.unidegree}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Dates:
            <input
              type="date"
              name="unidate"
              value={formData.unidate}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      )}
      {/* Display submitted values */}
      {!isEditing && (
        <div>
          <p>Highschool Name: {formData.highschoolname}</p>
          <p>Title: {formData.highschooltitle}</p>
          <p>Date: {formData.highschooldate}</p>
          <p>Univerity Name: {formData.uniname}</p>
          <p>Degree: {formData.unidegree}</p>
          <p>Date: {formData.unidate}</p>
        </div>
      )}
    </div>
  );
};

export default EducationInfo;
