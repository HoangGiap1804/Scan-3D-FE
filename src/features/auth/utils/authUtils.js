import { jwtDecode } from "jwt-decode";

export const getUserInfo = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        return jwtDecode(token);
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
};

export const hasRole = (role) => {
    const userInfo = getUserInfo();
    if (!userInfo) return false;

    const realmRoles = userInfo.realm_access?.roles || [];
    return realmRoles.includes(role);
};

export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    // Ideally check expiration here too
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp > currentTime;
    } catch (e) {
        return false;
    }
};
