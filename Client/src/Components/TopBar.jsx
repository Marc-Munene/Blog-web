import React from "react";
import { SearchArticles } from "./SearchArticles";
import { IoIosNotifications } from "react-icons/io";
import { CiUser } from "react-icons/ci";

const TopBar = () => {
  return (
    <div>
      <SearchArticles />
      <div>
        <span>
          <IoIosNotifications />
        </span>
        <span>
          <CiUser />
        </span>
      </div>
    </div>
  );
};

export default TopBar;
