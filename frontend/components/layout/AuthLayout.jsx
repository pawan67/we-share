import { useRouter } from "next/dist/client/router";
import React from "react";
import { useEffect } from "react";
import { checkIsUserLoggedIn } from "../../src/handlers/authHandler";
import DesktopTabs from "../smallComponents/DesktopTabs";
import NavigationBar from "./NavigationBar";

function AuthLayout({ children }) {
  const router = useRouter();

  const user = checkIsUserLoggedIn();
  useEffect(() => {
    console.log(checkIsUserLoggedIn());
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    user && (
      <div className=" relative">
        <NavigationBar />
        <div className=" min-h-screen pt-20">{children}</div>
        <div className=" fixed bottom-10 left-[50%] -translate-x-[50%] "></div>
      </div>
    )
  );
}

export default AuthLayout;
