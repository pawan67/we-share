import { BASE_URL } from "../config/urls";
import axios from "axios";
export const loginUser = async (email, password) => {
  const res = await axios.post(`${BASE_URL}/api/users/login`, {
    email,
    password,
  });
  return res.data;
};

export const saveuserToLocalStorage = (user) => {
  if (window !== "undefined") {
    localStorage.setItem("userDetails", JSON.stringify(user));
  }
};

export const checkIsUserLoggedIn = () => {
  if (window !== "undefined") {
    const user = localStorage.getItem("userDetails");
    if (user) {
      return JSON.parse(user);
    } else {
      return false;
    }
  }
};

export const logoutUser = () => {
  if (window !== "undefined") {
    localStorage.removeItem("userDetails");
  }
  window.location.href = "/login";
};

export const userDetails = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("userDetails");
    if (user) {
      return JSON.parse(user);
    } else {
      return false;
    }
  }
};

export const registerUser = async (name, email, password, pic) => {
  const res = await axios.post(`${BASE_URL}/api/users`, {
    name,
    email,
    password,
    pic,
  });
  return res.data;
};
