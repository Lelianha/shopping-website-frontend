import React, { useState } from "react"
import useOnclickOutside from "react-cool-onclickoutside"
import  "../components/SearchBar.css";
import { getAllItems } from "../services/api";
import {  useEffect } from "react";
import {MdSearch,MdClose} from "react-icons/md"
const SearchBar = () => {
  const [searchStatus, setSearchStatus] = useState(false)
  const [existingItems, setExistingItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [matchingItems, setMatchingItems] = useState([]);



  useEffect(() => {
    getAllItems().then(
      res => {
        const items = res.data.map(item => {
          return ({
            ...item
          })
        });
        setExistingItems(items);

      }
    );
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
    setWordEntered((value.title));
  };
  
  const handleKeyPress = (event, searchWord, value) => {
    if (event.key === 'Enter') {
      clearInput()
    }
  }

  const toggle = () => {
    setSearchStatus(!searchStatus)
    clearInput()
  }

  const closeSearch = () => (searchStatus === true ? setSearchStatus(false) : null)

  const ref = useOnclickOutside(() => {
    closeSearch()
    clearInput()
  })

  return (
    <>
     <div  ref={ref} onKeyPress={handleKeyPress}>
       <div
        className={
           searchStatus === true
          ? "searchBar "
          : ""
      }
      
       >
        {searchStatus === true && (
          <input
             className={
                 searchStatus === true
                 ? "searchInput fadeIn"
                 : searchStatus === false
               ? "searchInput fadeOut"
                : "searchInput"
            }
         type="text"
         value={wordEntered}
         onChange={handleFilter}
         placeholder="Search..."
           />

        )}
         <div
           className={
             searchStatus === true
               ? "iconClose fadeOut"
              : searchStatus === false
              ? "iconSearch fadeIn"
              : "iconSearch"
          }
         >
          
          {((searchStatus !== true)&& (filteredData.length === 0) ) ? (
            <MdSearch 
             className={
            searchStatus === true
              ? "searchIcon fadeOut"
              : searchStatus === false
               ? "searchIcon fadeIn"
           : "searchIcon"
           }  
           onClick={toggle} />
           ) : (
             <MdClose onClick={toggle} className={
                 searchStatus === true
                  ? "closeIcon fadeOut"
                   : searchStatus === false
               ? "closeIcon fadeIn"
                  : "closeIcon"
              }  />
          )} 

<div className="search">
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank" onClick={()=>writeInput(value)}>
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div> 
      </div>
      </div>
     </div>

 </>
  )
}

export default SearchBar
//note: I Should add code that if I click on the title that I wanted to search should 
//hide the other title that includes the title words bur not equal them
// and on click at the input see the search items if there are amd show no item founded with nice icom if there are not