import { useState } from "react";
import { Input, Groups } from "../components";

const MainMenu = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="main-menu">
      <div className="header">
        <span className="title">Channels</span>
        <span className="material-symbols-rounded create-channel">add</span>
      </div>

      <div className="body">
        <Input
          placeholder="Search"
          icon="search"
          value={search}
          onChange={handleSearch}
        />

        <Groups />
      </div>
    </div>
  );
};

export default MainMenu;
