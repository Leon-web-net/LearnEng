import React, { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";
import getmodules from "../Pages/ModulePages/GetModules";

function SearchBar() {
  const [word, setWord] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  const SearchRef = getmodules("Wordbank", "wordbank");

  useEffect(() => {
    SearchRef.onSnapshot((querySnapshot) => {
      const words = [];
      querySnapshot.forEach((doc) => {
        words.push(doc.data());
      });
    });
  }, []);

  useEffect(()=>{

  })

  return (
    <>
      <div>
        <p></p>
        <input type="text" className={classes.searchBar} />
        <div className={classes.searchBack}>
          <div className={classes.searchEntry}>Static placeholder</div>
          <div className={classes.searchEntry}>Static placeholder</div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
