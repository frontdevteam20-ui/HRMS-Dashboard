const BASE_URL = "http://localhost/hrms_tcerp/";

export const loginApi = async (email, password) => {
  try {
    // Debug logging
    console.log('Login attempt with:', { email, password: password ? '***' : 'empty' });
    
    const formData = new FormData();
    formData.append("username", email); // Changed back to "username"
    formData.append("password", password);

    // Debug FormData contents
    console.log('FormData contents:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${key === 'password' ? '***' : value}`);
    }

    const response = await fetch(`${BASE_URL}Users_login`, {
      method: "POST", // Changed back to POST method
      body: formData
    });

    const text = await response.text();
    console.log('Raw response:', text);
    console.log('Response status:', response.status);
    
    const data = text ? JSON.parse(text) : {};
    console.log('Parsed response:', data);

    return data;

  } catch (error) {
    console.error("Login API Error:", error);
    throw error;
  }
};