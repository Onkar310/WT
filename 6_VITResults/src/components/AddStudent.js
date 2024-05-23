// src/components/AddStudent.js
import React, { useState } from 'react';
import '../styles.css';

const divisions = ['CS-A', 'CS-B', 'CS-C', 'CS-D'];

const AddStudent = ({ onAddStudent }) => {
  const [showForm, setShowForm] = useState(false);
  const [prn, setPrn] = useState('');
  const [name, setName] = useState('');
  const [division, setDivision] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  // Create state for subjects with their respective MSE and ESE marks
  const initialSubjects = [
    { name: 'Subject 1', mse: '', ese: '' },
    { name: 'Subject 2', mse: '', ese: '' },
    { name: 'Subject 3', mse: '', ese: '' },
    { name: 'Subject 4', mse: '', ese: '' },
  ];

  const [subjects, setSubjects] = useState(initialSubjects);

  const handleAddStudent = () => {
    // Validate if all required fields are filled
    if (prn && name && division && rollNumber && subjects.every(sub => sub.mse !== '' && sub.ese !== '')) {
      // Calculate total marks based on the sum of MSE and ESE for all subjects
      const totalMarks =
        subjects.reduce((total, sub) => total + parseFloat(sub.mse) + parseFloat(sub.ese), 0) / 8;

      // Pass student information to the parent component
      onAddStudent({
        prn,
        name,
        division,
        rollNumber,
        totalMarks,
        subjects: subjects.map(sub => ({
          name: sub.name,
          mseMarks: parseFloat(sub.mse),
          eseMarks: parseFloat(sub.ese),
        })),
      });

      // Clear the form fields after adding a student
      setPrn('');
      setName('');
      setDivision('');
      setRollNumber('');
      // Reset subjects to clear input fields
      setSubjects(initialSubjects);

      // Hide the form after adding a student
      setShowForm(false);
    } else {
      alert('Please fill in all the details for subjects.');
    }
  };

  return (
    <div className="container">
      <h2>Add Student</h2>
      {showForm ? (
        <div>
          <div>
            <label>PRN:</label>
            <input type="text" value={prn} onChange={(e) => setPrn(e.target.value)} />
          </div>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Division:</label>
            <select value={division} onChange={(e) => setDivision(e.target.value)}>
              <option value="">Select Division</option>
              {divisions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Roll Number:</label>
            <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
          </div>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>MSE Marks</th>
                <th>ESE Marks</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td>{subject.name}</td>
                  <td>
                    <input
                      type="text"
                      value={subject.mse}
                      onChange={(e) =>
                        setSubjects((prevSubjects) =>
                          prevSubjects.map((sub, idx) =>
                            idx === index ? { ...sub, mse: e.target.value } : sub
                          )
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={subject.ese}
                      onChange={(e) =>
                        setSubjects((prevSubjects) =>
                          prevSubjects.map((sub, idx) =>
                            idx === index ? { ...sub, ese: e.target.value } : sub
                          )
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="form-button" onClick={handleAddStudent}>Add Student</button>
          <button className="form-button" onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      ) : (
        <button className="form-button" onClick={() => setShowForm(true)}>Add Student</button>
      )}
    </div>
  );
};

export default AddStudent;
