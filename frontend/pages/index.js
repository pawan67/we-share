import { Button, CssVarsProvider, Sheet } from "@mui/joy";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Login from "../components/authentication/Login";
import AuthLayout from "../components/layout/AuthLayout";
import PostCard from "../components/posts/PostCard";
import { logoutUser, userDetails } from "../src/handlers/authHandler";
import { getUserPosts } from "../src/handlers/postsHandler";

import styles from "../styles/Home.module.css";

export default function Home() {
  const user = userDetails();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await getUserPosts();
    console.log(response);
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AuthLayout>
      <div className=" max-w-xl mx-auto ">
        <div className=" space-y-5 ">
          {data && data?.map((post, i) => <PostCard key={i} postData={post} />)}
        </div>
      </div>
    </AuthLayout>
  );
}
