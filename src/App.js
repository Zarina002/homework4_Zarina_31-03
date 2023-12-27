import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        email: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <label>
                ФИО:
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </label>

            <label>
                Возраст:
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
            </label>

            <label>
                Электронная почта:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>

            <label>
                Номер телефона:
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </label>

            <div id="realTimeValues">
                <p>ФИО: {formData.fullName}</p>
                <p>Возраст: {formData.age}</p>
                <p>Email: {formData.email}</p>
                <p>Телефон: {formData.phoneNumber}</p>
            </div>
        </div>
    );
};

export default RegistrationForm;