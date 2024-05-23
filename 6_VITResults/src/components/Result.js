// src/components/Result.js
import React from 'react';
import SubjectResult from './SubjectResult';

const Result = ({ studentInfo, onGoBack }) => {
  // Replace these values with actual student result data
  const subjects = [
    { name: 'Computer Networks', mse: 80, ese: 90 },
    { name: 'Design and Analysis of Algorithms', mse: 75, ese: 85 },
    { name: 'Software Design and Modeling', mse: 85, ese: 80 },
    { name: 'Web Technology', mse: 78, ese: 88 },
  ];

  return (
    <div>
      <h1>{studentInfo.name}'s Marks</h1>
      <p>PRN: {studentInfo.prn}</p>
      <p>Division: {studentInfo.division}</p>
      <p>Roll Number: {studentInfo.rollNumber}</p>
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
            <SubjectResult
              key={index}
              subjectName={subject.name}
              mseMarks={subject.mse}
              eseMarks={subject.ese}
            />
          ))}
        </tbody>
      </table>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
};

export default Result;
