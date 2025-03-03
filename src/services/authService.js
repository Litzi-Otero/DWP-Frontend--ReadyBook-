import api from "./api";

export const registerUser = async (email, username, password) => {
    try {
        console.log(`Registrando usuario: ${username} (${email})`);
        const response = await api.post("/register", { email, username, password });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error en el registro:", error.response?.data || error.message);
        throw error.response?.data?.message || "Error en el registro";
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await api.post("/login", { email, password });
        console.log("Respuesta del login:", response.data);
        if (response.data.token) {
            localStorage.setItem("token", response.data.token); // Guardar solo el token
        }
        return response.data;
    } catch (error) {
        console.error("Error al iniciar sesión:", error.response?.data || error.message);
        throw error.response?.data?.message || "Error al iniciar sesión";
    }
};

export const logoutUser = () => {
    console.log("Cerrando sesión...");
    localStorage.removeItem("token");
};