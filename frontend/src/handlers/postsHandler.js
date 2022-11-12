import { BASE_URL } from "../config/urls";
import { userDetails } from "./authHandler";
import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${userDetails().token}`,
};

export const getUserPosts = async () => {
  const res = await axios.get(`${BASE_URL}/api/posts`, {
    headers,
  });
  return res.data;
};

export const createPost = async (caption, image) => {
  const res = await axios.post(
    `${BASE_URL}/api/posts`,
    {
      caption,
      image,
    },
    {
      headers,
    }
  );
  return res.data;
};

export const deletePost = async (id) => {
  const res = await axios.delete(`${BASE_URL}/api/posts/?=${id}`, {
    headers,
  });
  return res.data;
};
