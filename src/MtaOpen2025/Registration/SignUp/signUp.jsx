import React, { useState } from 'react';
import './signUp.css';

const SignUpForm = ({ isDarkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cfcNumber: '',
        interestLevel: '',
        acceptedTerms: false,
        otherInterest: '',
        competedBefore: '',  // New field for whether they've competed in CFC tournament
        rating: '',  // Rating field if they've competed before
        paymentMethod: '',  // New field for payment method
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';

        if (!formData.cfcNumber) errors.cfcNumber = 'CFC Membership number is required';
        if (!formData.interestLevel) errors.interestLevel = 'Please select your interest level';
        if (!formData.acceptedTerms) errors.acceptedTerms = 'You must accept the terms and conditions';

        if (formData.competedBefore === 'yes' && !formData.rating) {
            errors.rating = 'Please enter your rating';
        }

        if (Object.keys(errors).length === 0) {
            alert('Form submitted successfully!');
            setFormData({
                name: '',
                email: '',
                cfcNumber: '',
                interestLevel: '',
                acceptedTerms: false,
                otherInterest: '',
                competedBefore: '',
                rating: '',
                paymentMethod: '', // Reset payment method
            });
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className={`signUpFormContainer ${isDarkMode ? 'dark' : 'light'}`}>
            <h2 className="formTitle">Sign Up for Mount Allison Open 2025</h2>
            <form className="signUpForm" onSubmit={handleSubmit}>
                <div className="formField">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="inputField"
                    />
                    {formErrors.name && <p className="error">{formErrors.name}</p>}
                </div>

                <div className="formField">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="inputField"
                    />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}
                </div>

                <div className="formField">
                    <label htmlFor="cfcNumber">CFC Membership Number</label>
                    <input
                        type="text"
                        id="cfcNumber"
                        name="cfcNumber"
                        value={formData.cfcNumber}
                        onChange={handleChange}
                        required
                        className="inputField"
                    />
                    {formErrors.cfcNumber && <p className="error">{formErrors.cfcNumber}</p>}
                </div>

                <div className="formField">
                    <label htmlFor="interestLevel">Interest Level</label>
                    <select
                        id="interestLevel"
                        name="interestLevel"
                        value={formData.interestLevel}
                        onChange={handleChange}
                        required
                        className="selectField"
                    >
                        <option value="">Select Interest Level</option>
                        <option value="going">Going</option>
                        <option value="interested">Interested</option>
                        <option value="undecided">Undecided</option>
                        <option value="other">Other</option>
                    </select>
                    {formErrors.interestLevel && <p className="error">{formErrors.interestLevel}</p>}
                </div>

                {formData.interestLevel === 'other' && (
                    <div className="formField">
                        <label htmlFor="otherInterest">Please specify your interest</label>
                        <input
                            type="text"
                            id="otherInterest"
                            name="otherInterest"
                            value={formData.otherInterest}
                            onChange={handleChange}
                            className="inputField"
                        />
                    </div>
                )}

                {/* New field for competition history */}
                <div className="formField">
                    <label>Have you competed in a CFC Regular Rated Tournament before?</label>
                    <div>
                        <input
                            type="radio"
                            id="competedYes"
                            name="competedBefore"
                            value="yes"
                            checked={formData.competedBefore === 'yes'}
                            onChange={handleChange}
                            className="radioField"
                        />
                        <label htmlFor="competedYes">Yes   </label>
                        <input
                            type="radio"
                            id="competedNo"
                            name="competedBefore"
                            value="no"
                            checked={formData.competedBefore === 'no'}
                            onChange={handleChange}
                            className="radioField"
                        />
                        <label htmlFor="competedNo">No</label>
                    </div>
                </div>

                {/* If they have competed, ask for their rating */}
                {formData.competedBefore === 'yes' && (
                    <div className="formField">
                        <label htmlFor="rating">CFC Regular Rating</label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            className="inputField"
                        />
                        {formErrors.rating && <p className="error">{formErrors.rating}</p>}
                    </div>
                )}

                {/* Payment Method (appears only if 'Going' is selected) */}
                {formData.interestLevel === 'going' && (
                    <div className="formField">
                        <label>Payment Method</label>
                        <div>
                            <input
                                type="radio"
                                id="cashInPerson"
                                name="paymentMethod"
                                value="cashInPerson"
                                checked={formData.paymentMethod === 'cashInPerson'}
                                onChange={handleChange}
                                className="radioField"
                            />
                            <label htmlFor="cashInPerson">Cash in person   </label>

                            <input
                                type="radio"
                                id="eTransfer"
                                name="paymentMethod"
                                value="eTransfer"
                                checked={formData.paymentMethod === 'eTransfer'}
                                onChange={handleChange}
                                className="radioField"
                            />
                            <label htmlFor="eTransfer">E-Transfer</label>
                        </div>

                        {/* If E-Transfer is selected, show email */}
                        {formData.paymentMethod === 'eTransfer' && (
                            <div className="eTransferEmail">
                                <p>Please send your payment to: <strong>payment@mta-chess.com</strong></p>
                            </div>
                        )}
                    </div>
                )}

                <div className="formField">
                    <label className="termsLabel">
                        <input
                            type="checkbox"
                            name="acceptedTerms"
                            checked={formData.acceptedTerms}
                            onChange={handleChange}
                            required
                            className="checkbox"
                        />
                        I accept the <a href="/terms" target="_blank" rel="noopener noreferrer">terms and conditions</a>
                    </label>
                    {formErrors.acceptedTerms && <p className="error">{formErrors.acceptedTerms}</p>}
                </div>

                <button type="submit" className="submitBtn">Submit</button>
            </form>
        </div>
    );
};

export default SignUpForm;
