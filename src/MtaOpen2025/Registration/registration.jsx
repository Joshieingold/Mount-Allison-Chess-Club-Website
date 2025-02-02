import React from 'react';
import RegisteredList from './RegisteredList/registeredList.jsx'; // Relative import
import './registration.css'; // Ensure this CSS file exists
import SignUpForm from './SignUp/signUp.jsx'; // Relative import


const RegistrationPage = ({ isDarkMode }) => {
    return (
        <div className={`registrationPageContainer ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="formAndList">
                <div className="signUpSection">
                    <SignUpForm isDarkMode={isDarkMode} />
                </div>
                <div className="registeredListSection">
                    <RegisteredList />
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
