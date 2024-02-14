import React, { useState } from 'react';
import "./App.css"

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(newPassword.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }
  };

  const validateEmail = (email) => {
    // Very basic email validation, just checking for the presence of @ symbol
    return email.includes('@');
  };

  const PassWordValidate = (password) =>{
    return password.include('@')
  }

  return (
    <div className="sign-up-form">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id='email'
          value={email}
          onChange={handleEmailChange}
          style={{ border: emailValid ? '1px solid green' : '1px solid red' }}
        />
        {!emailValid && <p className="error-message">Please enter a valid email address</p>}
      </div>
      <div className="form-group">
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
          value={password}
          onChange={handlePasswordChange}
        />
        {!passwordValid && <p className="error-message">Password must be at least 8 characters long</p>}
      </div>
      <div className="form-group">
        <label htmlFor="confirm pass">Confirm Password</label>
        <input
          type="password"
          id='confirm pass'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {!confirmPasswordValid && <p className="error-message">Passwords do not match</p>}
      </div>
      <div className='name'><button onClick={handleSubmit}>Sign up</button></div>
      
    </div>
  );
}

export default SignUpForm;
