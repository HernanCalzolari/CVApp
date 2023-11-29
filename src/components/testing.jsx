import { useState } from 'react';

const FormWithEdit = () => {
  // State to manage form data and editing mode
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false);

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
  };

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <h2>Form With Edit</h2>

      {isEditing && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
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
          <h3>Submitted Values:</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
        </div>
      )}

      {!isEditing && (
        <button type="button" onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
  );
};

export default FormWithEdit;
