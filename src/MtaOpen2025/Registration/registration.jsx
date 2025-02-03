import React from 'react';
import RegisteredList from './RegisteredList/registeredList.jsx'; // Adjust the relative path
import './registration.css'; // Make sure this file is correctly imported
import SignUpForm from './SignUp/signUp.jsx'; // Adjust the relative path

const RegistrationPage = ({ isDarkMode }) => {
    return (
        <div className={`registrationPageContainer ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className="RegisterTitle">Register</h1>
            <div className="formAndList">
                <div className="signUpSection">
                    <SignUpForm isDarkMode={isDarkMode} />
                </div>
                <div className="registeredListSection">
                    <RegisteredList isDarkMode={isDarkMode}/>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
