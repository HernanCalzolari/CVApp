import { useState } from "react";
import "../css/styles.css";

const WorkInfo = () => {
  // State to store form data
  const [formSets, setFormSets] = useState([
    {
      companyname: "",
      jobtitle: "",
      responsabilities: "",
      datefrom: "",
      dateto: "",
    },
  ]);
  const [isEditing, setIsEditing] = useState(true);

  // Handle form input changes
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFormSets = [...formSets];
    updatedFormSets[index][name] = value;
    setFormSets(updatedFormSets);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleAddSet = () => {
    setFormSets([
      ...formSets,
      {
        companyname: "",
        jobtitle: "",
        responsabilities: "",
        datefrom: "",
        dateto: "",
      },
    ]);
    setIsEditing(true);
  };

  const handleRemoveSet = (index) => {
    const updatedFormSets = [...formSets];
    updatedFormSets.splice(index, 1);
    setFormSets(updatedFormSets);
  };

  return (
    <div>
      <h2 className="inline">Work Experience</h2>
      {!isEditing && (
        <button type="button" onClick={handleEditClick}>
          Edit
        </button>
      )}
      {isEditing &&
        formSets.map((formSet, index) => (
          <form key={index} onSubmit={handleSubmit}>
            <label>
              Company Name:
              <input
                type="text"
                name="companyname"
                value={formSet.companyname}
                onChange={(e) => handleInputChange(index, e)}
              />
            </label>
            <br />

            <label>
              Job Title:
              <input
                type="text"
                name="jobtitle"
                value={formSet.jobtitle}
                onChange={(e) => handleInputChange(index, e)}
              />
            </label>
            <br />

            <label>
              Responsibilities:
              <input
                type="text"
                name="responsabilities"
                value={formSet.responsabilities}
                onChange={(e) => handleInputChange(index, e)}
              />
            </label>
            <br />

            <label>
              Date From:
              <input
                type="date"
                name="datefrom"
                value={formSet.datefrom}
                onChange={(e) => handleInputChange(index, e)}
              />
            </label>
            <br />

            <label>
              Date To:
              <input
                type="date"
                name="dateto"
                value={formSet.dateto}
                onChange={(e) => handleInputChange(index, e)}
              />
            </label>
            <br />

            {formSets.length > 1 && (
              <button type="button" onClick={() => handleRemoveSet(index)}>
                Remove
              </button>
            )}
          </form>
        ))}
      {/* Display submitted values */}
      {!isEditing && (
        <div>
          {formSets.map((formSet, index) => (
            <div key={index}>
              <p>Company Name: {formSet.companyname}</p>
              <p>Job Title: {formSet.jobtitle}</p>
              <p>Responsibilities: {formSet.responsabilities}</p>
              <p>From: {formSet.datefrom}</p>
              <p>To: {formSet.dateto}</p>
            </div>
          ))}
        </div>
      )}

      {!isEditing && (
        <button type="button" onClick={handleAddSet}>
          Add Experience
        </button>
      )}
      {isEditing && (
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default WorkInfo;
