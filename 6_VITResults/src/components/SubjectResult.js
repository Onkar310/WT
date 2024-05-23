// src/components/SubjectResult.js
import React from 'react';

const SubjectResult = ({ subjectName, mseMarks, eseMarks }) => {
  return (
    <tr>
      <td>{subjectName}</td>
      <td>{mseMarks}</td>
      <td>{eseMarks}</td>
    </tr>
  );
};

export default SubjectResult;
