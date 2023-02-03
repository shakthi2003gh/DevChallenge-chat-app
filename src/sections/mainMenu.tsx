import { useState } from "react";
import { Input, Groups } from "../components";
import { displayModal } from "../state/modal";

const MainMenu = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    const value = (e.target.value as string)
      .replaceAll("[", "")
      .replaceAll("(", "")
      .replaceAll(")", "")
      .replaceAll("\\", "");

    setSearch(value);
  };

  const handleClick = () => {
    displayModal("createChannel");
  };

  return (
    <div className="main-menu">
      <div className="header">
        <span className="title">Channels</span>
        <span
          className="material-symbols-rounded create-channel"
          onClick={handleClick}
        >
          add
        </span>
      </div>

      <div className="body">
        <Input
          placeholder="Search"
          icon="search"
          value={search}
          onChange={handleSearch}
        />

        <Groups search={search} />
      </div>
    </div>
  );
};

export default MainMenu;
