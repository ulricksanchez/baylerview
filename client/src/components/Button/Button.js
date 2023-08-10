import React, { useState } from "react";

export const Button = ({ isLoading, onClick, children }) => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState(children);
  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);
  const [isEmailDisabled, setEmailDisabled] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const handleClick = async () => {
    if (!isEmailValid) {
      return;
    }

    if (email.trim() === "") {
      alert("Email cannot be empty"); // Display prompt when email is empty
      return;
    }

    setButtonDisabled(true); // Disable the button
    setButtonText("Subscribing..."); // Change the button text

    await onClick(); // Perform the asynchronous action

    setButtonDisabled(true);
    setButtonText("Subscribed!"); // Restore the original button text
    setEmailDisabled(true); // Disable the email textbox
    setEmailSuccess(true); // Set email success state
    setEmail(""); // Clear the email input
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailValid(value === "" || validateEmail(value));
    if (emailSuccess) {
      setEmailSuccess(false); // Reset email success state when email changes
    }
  };

  const validateEmail = (value) => {
    // Very basic email validation example
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="bg-gray-600 py-20 my-20 mx-20">
      <form className="max-w-md mx-auto">
        <div className="flex items-center">
          <input
            id="email"
            type="email"
            name="email"
            className={`bg-white mr-3 py-2 px-4 w-full rounded-md focus:outline ${
              isEmailValid ? "" : "border-red-500"
            }`}
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            disabled={isEmailDisabled} // Disable the email textbox
          />
          <button
            className={`bg-red-600 text-white py-2 px-4 rounded-md ${
              isButtonDisabled ? "" : "hover:bg-red-500"
            }`}
            onClick={handleClick}
            disabled={isButtonDisabled || isLoading}
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};
