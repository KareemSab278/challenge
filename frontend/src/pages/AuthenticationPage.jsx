import { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeApiRequest } from '../logic/helpers';


export { AuthenticationPage };

const AuthenticationPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [payload, setPayload] = useState({ username: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await makeApiRequest(`/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...payload }),
            });

            if (data.user) {
                const expiry = Date.now() + 3600 * 1000; // 1 hour expiry
                localStorage.setItem('signedInUser', JSON.stringify({ userId: data.userId, expiry }));

                const { redirectTo } = queryString.parse(location.search);
                navigate(redirectTo == null ? '/' : redirectTo);

            } else {
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const inputStyle = {
        width: '95%',
        padding: '8px',
        marginTop: '5px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    }

    return (
        <>
            <section
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    padding: '20px',
                }}
            >
                <div
                    style={{
                        background: '#202020ff',
                        padding: '30px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        width: '100%',
                        maxWidth: '400px',
                    }}
                >
                    <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#fff' }}>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff' }}>Username</label>
                            <input
                                type="text"
                                value={payload.username}
                                onChange={(e) => setPayload({ ...payload, username: e.target.value })}
                                placeholder="Enter your username..."
                                required
                                style={inputStyle}
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ color: '#fff' }}>Password</label>
                            <input
                                type="password"
                                value={payload.password}
                                onChange={(e) => setPayload({ ...payload, password: e.target.value })}
                                placeholder="Enter your password"
                                required
                                style={inputStyle}
                            />
                        </div>
                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '4px',
                                border: 'none',
                                background: '#007bff',
                                color: '#fff',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                            }}
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};
