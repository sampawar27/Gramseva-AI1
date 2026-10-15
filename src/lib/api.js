const API_URL = "http://localhost:8080";

export async function apiRequest(endpoint, options = {}) {
    const token =
        typeof window !== "undefined"
            ? localStorage.getItem("token")
            : null;

    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {})
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
            ...options,
            headers
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Something went wrong"
        );
    }

    return data;
}