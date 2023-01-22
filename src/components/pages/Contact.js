import React, { useState } from 'react';
import '../../styles/Page.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';
import { validateText } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleInputValidation = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const checkInputType = target.name;
    const checkInputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (checkInputType !== 'email' && !validateText(checkInputValue)) {
      setErrorMessage('This field is required');
    } else if (checkInputType === 'email' && !validateEmail(checkInputValue)) {
      setErrorMessage('Please enter a valid email address');
    } else {
        setErrorMessage('');
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='page'>
      <h1>Contact Me</h1>
      <p>Complete the form below to get in touch</p>
      <form className="form form-control" action="mailto:rebeccakatehedley@gmail.com">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleInputValidation}
          type="text"
          placeholder="Name"
          className='form-control formbox'
        required/>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleInputValidation}
          type="email"
          placeholder="Email address"
          className='form-control formbox'
        required/>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleInputValidation}
          type="text"
          placeholder="Message"
          className='form-control formbox'
          id='message-area'
          required/>
        <button type="button" className='btn formbox' onClick={handleFormSubmit}>GET IN TOUCH</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
