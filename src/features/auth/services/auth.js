export const login = async (email, password) => {
    try {
        const response = await fetch('http://localhost:8081/realms/test/protocol/openid-connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: 'test-frontend',
                grant_type: 'password',
                username: email,
                password: password,
                scope: 'openid',
            }),
        });

        if (!response.ok) {
            throw new Error('Login failed. Please check your credentials.');
        }

        const data = await response.json();

        // Store tokens
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refreshToken', data.refresh_token);

        return data;
    } catch (error) {
        throw error;
    }
};
