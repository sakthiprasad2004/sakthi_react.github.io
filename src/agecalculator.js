import React, { useState } from 'react';

const Agecalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const handleDateChange = (e) => setDob(e.target.value);

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    // Calculate age
    const ageInMilliseconds = currentDate - dobDate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    const roundedAge = Math.floor(ageInYears);

    setAge(roundedAge);
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <div>
        <label>Date of Birth: </label>
        <input type="date" value={dob} onChange={handleDateChange} />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <div>Your age is: {age} years</div>}
    </div>
  );
};

export default Agecalculator;
