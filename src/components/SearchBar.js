import React, { useState, useEffect } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import "../components/SearchBar.css";
import { getAllItems } from "../services/api";
import { MdSearch, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [existingItems, setExistingItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAllItems().then((res) => {
      const items = res.data.map((item) => {
        return {
          ...item,
        };
      });
      setExistingItems(items);
    });
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = existingItems.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const writeInput = (value) => {
    setWordEntered(value.title);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Navigate and pass filtered data
      navigate(`/searchedItems`, { state: { items: filteredData } });
      clearInput();  // Optionally clear the input after navigating
    }
  };

  const toggle = () => {
    setSearchStatus(!searchStatus);
    clearInput();
  };

  const closeSearch = () => (searchStatus === true ? setSearchStatus(false) : null);

  const ref = useOnclickOutside(() => {
    closeSearch();
    clearInput();
  });

  return (
    <>
      <div ref={ref} onKeyPress={handleKeyPress}>
        <div className={searchStatus === true ? "searchBar " : ""}>
          {searchStatus === true && (
            <input
              className={searchStatus === true ? "searchInput fadeIn" : searchStatus === false ? "searchInput fadeOut" : "searchInput"}
              type="text"
              value={wordEntered}
              onChange={handleFilter}
              placeholder="Search..."
            />
          )}
          <div className={searchStatus === true ? "iconClose fadeOut" : searchStatus === false ? "iconSearch fadeIn" : "iconSearch"}>
            {searchStatus !== true && filteredData.length === 0 ? (
              <MdSearch className={searchStatus === true ? "searchIcon fadeOut" : searchStatus === false ? "searchIcon fadeIn" : "searchIcon"} onClick={toggle} />
            ) : (
              <MdClose className={searchStatus === true ? "closeIcon fadeOut" : searchStatus === false ? "closeIcon fadeIn" : "closeIcon"} onClick={toggle} />
            )}

            <div className="search">
              {filteredData.length !== 0 && (
                <div className="dataResult">
                  {filteredData.slice(0, 15).map((value, key) => {
                    return (
      
                    <div className="dataItem" key={key} onClick={() => {
            writeInput(value);
            navigate(`/searchedItems`, { state: { id: value.id, items: [value] } });
            clearInput();  // Clear the search bar after clicking the title
          }}>
            <p>
              {value.title}
            </p>
          </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
