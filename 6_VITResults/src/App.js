// src/App.js
import React, { useState } from 'react';
import StudentInfo from './components/StudentInfo';
import Result from './components/Result';
import AddStudent from './components/AddStudent';
import './App.css';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);
  const [students, setStudents] = useState([]);

  const handleShowMarks = (info) => {
    setStudentInfo(info);
    setShowResult(true);
  };

  const handleGoBack = () => {
    setShowResult(false);
    setStudentInfo(null);
  };

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleDeleteStudent = (student) => {
    // Filter out the deleted student from the state
    const updatedStudents = students.filter((s) => s !== student);
    setStudents(updatedStudents);
  };

  return (
    <div className="App">
      {!showResult ? (
        <div>
          <AddStudent onAddStudent={handleAddStudent} />
          <StudentInfo students={students} onViewMarks={handleShowMarks} onDeleteStudent={handleDeleteStudent} />
        </div>
      ) : (
        <Result studentInfo={studentInfo} onGoBack={handleGoBack} />
      )}
    </div>
  );
}

export default App;
