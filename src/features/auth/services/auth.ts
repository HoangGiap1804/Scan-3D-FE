export const login = async (email: string, password: string) => {
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

export const register = async (username: string, email: string, password: string) => {
    try {
        // WARNING: This is for development only.
        // In production, user registration should be handled by a backend service
        // that securely manages admin credentials.

        // 1. Get Admin Token
        const adminTokenResponse = await fetch('http://localhost:8081/realms/master/protocol/openid-connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: 'admin-cli',
                grant_type: 'password',
                username: 'admin',
                password: 'admin',
            }),
        });

        if (!adminTokenResponse.ok) {
            throw new Error('Failed to authenticate as admin. Check your Keycloak configuration.');
        }

        const adminData = await adminTokenResponse.json();
        const adminAccessToken = adminData.access_token;

        // 2. Create User
        const createUserResponse = await fetch('http://localhost:8081/admin/realms/test/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${adminAccessToken}`,
            },
            body: JSON.stringify({
                username: username,
                email: email,
                enabled: true,
                credentials: [{
                    type: 'password',
                    value: password,
                    temporary: false,
                }],
            }),
        });

        if (createUserResponse.status === 409) {
            throw new Error('User already exists');
        }

        if (!createUserResponse.ok) {
            throw new Error('Failed to create user');
        }

        // 3. Automatically login after registration
        return login(email, password);

    } catch (error) {
        console.error('Registration failed:', error);
        throw error;
    }
};
