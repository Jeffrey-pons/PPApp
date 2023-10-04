import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleInputVisibility } from "../../redux/reducers/searchSlice.reducer.js";
import { performSearch } from "../../redux/actions/searchActions";
import Hamburger from "./Hamburger.jsx";
import "./NavBar.scss";

const SearchSection = () => {
  const dispatch = useDispatch();
  const isInputVisible = useSelector((store) => store.searchState.isInputVisible);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchIconClicked, setSearchIconClicked] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("isMenuOpen:", isMenuOpen);
  };

  const handleSearchIconClick = () => {
    if (windowWidth <= 650) {
      dispatch(toggleInputVisibility());

      // Sélectionnez l'élément d'entrée par son id et définissez le focus
      const inputElement = document.querySelector("#search");
      if (inputElement) {
        inputElement.focus();
      }
    } else {
      dispatch(performSearch(""));
    }
    setSearchIconClicked(true);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className={`SearchSection ${isMenuOpen ? "menu-open" : "menu-close"}`}>
      <div className={`Logo-Slogan ${isInputVisible ? "hidden-titles" : ""}`}>
        <Link to={"/"}>
          <h1>Pinceaux Progressifs</h1>
        </Link>
        <h4>Décoder l'Art Moderne</h4>
      </div>
      <form className="search-bar">
        <img
          className="search-icon"
          src="/assets/img/loupe-search-icon.png"
          alt=""
          onClick={handleSearchIconClick}
        />
        {(isInputVisible || windowWidth > 650) && (
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            placeholder=""
            onChange={(e) => {}}
            onBlur={() => {
              if (windowWidth <= 650 && !searchIconClicked) {
                dispatch(toggleInputVisibility());
              }
            }}
            className={searchIconClicked ? "search-input-focused" : ""}
          />
        )}
      </form>
      <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />
    </nav>
  );
};

export default SearchSection;
