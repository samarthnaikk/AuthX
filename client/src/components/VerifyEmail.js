import React, { useState } from 'react';
import axios from 'axios';

const VerifyEmail = () => {
    const [formData, setFormData] = useState({
        email: '',
        otp: '',
    });
    const [message, setMessage] = useState('');

    const { email, otp } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/verify-email', { email, otp });
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response.data.message);
        }
    };

    return (
        <div>
            <h2>Verify Email</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="OTP"
                        name="otp"
                        value={otp}
                        onChange={onChange}
                        required
                    />
                </div>
                <input type="submit" value="Verify" />
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default VerifyEmail;
