import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const onChange = (e) => setPassword(e.target.value);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`/api/auth/reset-password/${token}`, { password });
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response.data.message);
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="password"
                        placeholder="New Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                        required
                    />
                </div>
                <input type="submit" value="Reset Password" />
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;
