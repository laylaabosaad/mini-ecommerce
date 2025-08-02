import axios from "axios";

export async function register(prevState, formData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    role: formData.get("role"),
  };
  console.log("data", data);
  try {
    const res = await axios.post("http://localhost:2000/auth/register", data);
    if (res.status !== 200 && res.status !== 201) {
      return { error: res.data?.message || "Registration failed." };
    }

    return { success: true };
  } catch (err) {
    console.error(err);
    const message = err.response?.data?.error;

    return { error: message, fieldData: data };
  }
}

export async function login(prevState, formData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log("data", data);
  try {
    const res = await axios.post("http://localhost:2000/auth/login", data);
    if (res.status !== 200 && res.status !== 201) {
      return { error: res.data?.message || "logging in failed." };
    }
    const token = res.data.token;
    document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60};`;
    return { success: true };
  } catch (err) {
    console.error(err);
    const message = err.response?.data?.error;

    return { error: message, fieldData: data };
  }
}

export async function logout() {
  try {
    await axios.post("http://localhost:2000/auth/logout", null, {
      withCredentials: true,
    });
    return { success: true };
  } catch (err) {
    console.error("Logout failed:", err);
    return { success: false };
  }
}
