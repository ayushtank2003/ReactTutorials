import React, { useEffect, useState } from 'react'

const EmailValidation = () => {
    const [email, setEmail] = useState('');
    const [isvalid, setIsValid] = useState(true);
    const handleSubmit = () => {
    if (isvalid) {
      alert('Form Submitted Successfully!');
    } else {
      alert('Please enter a valid email address.');
    }
  };
    
    useEffect(() => {
        const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;
        if (email) {
      setIsValid(pattern.test(email));
    } else {
      setIsValid(false); // Reset state for empty input
    }
  }, [email]);
  return (
    <div>
        <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        {!isvalid && <p>Email Id is Invalid</p>}
        <button onClick={handleSubmit}>Save Data</button>
    </div>
  )
}

export default EmailValidation