// src/components/StudentInfo.js
import React from 'react';
import '../styles.css'; // Make sure to import your styles

const StudentInfo = ({ students, onViewMarks, onDeleteStudent }) => {
  return (
    <div className="container">
      <h2>Student Information</h2>
      <table>
        <thead>
          <tr>
            <th>PRN</th>
            <th>Name</th>
            <th>Division</th>
            <th>Roll Number</th>
            <th>Total Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.prn}>
              <td>{student.prn}</td>
              <td>{student.name}</td>
              <td>{student.division}</td>
              <td>{student.rollNumber}</td>
              <td>{isNaN(student.totalMarks) ? 'N/A' : student.totalMarks.toFixed(2)}</td>
              <td>
                <button onClick={() => onViewMarks(student)}>View Marks</button>
                <button onClick={() => onDeleteStudent(student)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentInfo;
