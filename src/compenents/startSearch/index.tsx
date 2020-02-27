import React, { useState, useEffect } from "react";
import SearchBar from "../searchBar";
import "./startSearch.css";

const StartSearch = () => {

  const [loading, setLoading] = useState(false);

  const setTitle = () => {
    document.title = 'Destiny stats'

    setLoading(true);
  };

  useEffect(() => {
    if(!loading) {
      setTitle();
    }
  });

  return (
    <section className="startSerch">
    <div>
      <h1>account name</h1>
      <SearchBar />
    </div>
    </section>
  );
};

export default StartSearch;
