import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Button } from "@mui/joy";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MobileNav from "./MobileNav";
import AddPhoto from "../smallComponents/AddPhoto";
function NavigationBar() {
  return (
    <>
      <div className=" fixed p-3 z-20   dark:bg-black/60 backdrop-blur-sm left-0  right-0 top-0 ">
        <div className=" max-w-2xl mx-auto flex justify-between items-center">
          <div className=" flex items-center">
            <Button variant="outline" color="neutral">
              <InstagramIcon />
            </Button>
            <div className=" font-bold">WeShare</div>
          </div>

          <div>
            <Button variant="outline" color="neutral">
              <AddPhoto />
            </Button>
            <Button variant="outline" color="neutral">
              <AccountCircleIcon />
            </Button>
          </div>
        </div>
      </div>

      <div className=" fixed bottom-0 sm:bottom-10 left-0 right-0 z-50">
        <MobileNav />
      </div>
    </>
  );
}

export default NavigationBar;
