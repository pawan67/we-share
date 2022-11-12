import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddPhoto from "./AddPhoto";
export default function DesktopTabs() {
  return (
    <div className=" rounded-xl max-w-sm">
      <Tabs
        aria-label="Icon tabs"
        sx={{
          borderRadius: "10px",
        }}
        defaultValue={0}
      >
        <TabList>
          <Tab>
            <HomeRoundedIcon />
          </Tab>
          <Tab>
            <AddPhoto />
          </Tab>
          <Tab>
            <FavoriteIcon />
          </Tab>
          <Tab>
            <AccountCircleRoundedIcon />
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
}
