// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
// import { getAllItems } from "../services/api";
// // import { Card, Input } from 'react-card-component'
// import { useState , useEffect } from "react";
// import  "../components/SecondSearchBar.css";
// import {Link , useMatch , useResolvedPath} from "react-router-dom";
// import {MdSearch,MdClose} from "react-icons/md"
// import useOnclickOutside from "react-cool-onclickoutside"
// import { Nav, Form } from "react-bootstrap"
// import { faSearch } from "@fortawesome/free-solid-svg-icons"



// function SearchBar (props) {

//     const [existingItems, setExistingItems] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [wordEntered, setWordEntered] = useState("");
//     const [searchStatus, setSearchStatus] = useState()
//     // const [dataResultStatus, setDataResultStatus] = useState()


//     useEffect(() => {
//         getAllItems().then(
//             res => {
//                 const items = res.data.map(item => {
//                     return ({...item})
//                 });
//                 setExistingItems(items);
                
//             }
//         );
//     }, []);


//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = existingItems.filter((value) => {
//       return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

//   const writeInput = (value) => {
//     setWordEntered((value.title));
//   };
//    const handleKeyPress = (event,searchWord,value) => {
//     // if((event.key === 'Enter') (searchWord==(value.title))){
//       if(event.key === 'Enter'){
//       clearInput()
//       // When we enter to see the mach item
//   }
//   }

//   const toggle = () => {
//     setSearchStatus(true)
// }



//   const closeSearch = () => (searchStatus === true ? setSearchStatus(false) : null)

//   const ref = useOnclickOutside(() => {
//     closeSearch()
//     clearInput()
//     // filteredData.length=0;

//   })

//     return (
//         <>


//  {/* <div className="search">
//       <div className="searchInputs" ref={ref}>
//         <input id="searchInput"
//           type="text"
//           placeholder="Search"
//           value={wordEntered}


// {/* <Nav className="my-auto" ref={ref}>
//       <Form
//         className={
//           searchStatus === false
//             ? "searchbar fadeOutWidth"
//             : searchStatus === true
//             ? "searchbar fadeInWidth"
//             : "searchbar"
//         }
//       >    
// <div className="search">
//       <div className="searchInputs">
//       {searchStatus === true && (<input className="aa"
//           type="text"
//           placeholder="Search"
//           value={wordEntered}
//           onChange={handleFilter}
//           onKeyPress={handleKeyPress}
//           ref={ref}
//         /> )}
//               <div
//           className={
//             searchStatus === true
//               ? "icon-bg fadeOut"
//               : searchStatus === false
//               ? "icon-bg fadeIn"
//               : "icon-bg"
//           }
//         >
        
//          <div className="searchIcon">
//           {(filteredData.length === 0)  ? (
//              <MdSearch  onClick={toggle}
//               className={
//                 searchStatus === true
//                   ? "search-icon fadeOut"
//                   : searchStatus === false
//                   ? "search-icon fadeIn"
//                   : "search-icon"
//               } />
//           ) : (
//             <MdClose id="clearBtn" onClick={clearInput} />
//           )}
//         </div> 
//       </div>
//       {filteredData.length != 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 15).map((value, key) => {
//             return (
//               <a className="dataItem" href={value.link} target="_blank" onClick={()=>writeInput(value)} >
//                 <p>{value.title} </p>
//               </a>
//             );
//           })}
//         </div>
//       )}
//     </div>



      
//         </div>
//         </Form>
//         </Nav> */}
//         <div className="my-auto" ref={ref}>

// <div className="search">
//       <div className="searchInputs">
//       {searchStatus === true && (<input className="aa"
//           type="text"
//           placeholder="Search"
//           value={wordEntered}
//           onChange={handleFilter}
//           ref={ref}
//           onKeyPress={handleKeyPress}
//         /> )}
        
//          <div className="searchIcon">
//           {(filteredData.length === 0)  ? (
//              <MdSearch  onClick={toggle} />
//           ) : (
//             <MdClose id="clearBtn" onClick={clearInput} />
//           )}
//         </div> 
//       </div>
//       {filteredData.length != 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 15).map((value, key) => {
//             return (
//               <a className="dataItem" href={value.link} target="_blank" onClick={()=>writeInput(value)} >
//                 <p>{value.title} </p>
//               </a>
//             );
//           })}
//         </div>
//       )}
//     </div>


// </div>
      


// </>
//     )

// }

// function CustomLink({to , children , ...props}){
//     const resolvedPath=useResolvedPath(to)
//     const isActive=useMatch({path:resolvedPath.pathname , end:true});
  
//     return(
//       <li className={isActive ? "active" : ""}>
//         <Link to={to} {...props}> 
//         {children}
//         </Link>
//       </li>
//     )
//   }
  
// export default SearchBar;

import React, { useState } from "react"

import { Nav, Form } from "react-bootstrap"
import useOnclickOutside from "react-cool-onclickoutside"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
// import  "../components/SecondSearchBar.css";
import {MdSearch,MdClose} from "react-icons/md"

const Search = () => {
  const [search, setSearch] = useState()

  const toggle = () => {
    setSearch(true)
  }
  const SecondToggle = () => {
    setSearch(false)
  }

  const closeSearch = () => (search === true ? setSearch(false) : null)

  const ref = useOnclickOutside(() => {
    closeSearch()
  })

  return (
    <div className="my-auto" ref={ref}>
      <div
        className={
          search === false
            ? " fadeOutWidth"
            : search === true
            ? "searchbar fadeInWidth"
            : "searchbar"
        }
      >
        {search === true && (
          <input
            ref={ref}
            className={
              search === true
                ? "search-input fadeIn"
                : search === false
                ? "search-input fadeOut"
                : "search-input"
            }
            type="text"
            name=""
            placeholder="Search..."
          />
        //     {/* <MdClose id="clearBtn"  /> */}
        //   {/* </input> */}
        )}
        <div
          className={
            search === true
              ? "icon-clo fadeOut"
              : search === false
              ? "icon-bg fadeIn"
              : "icon-bg"
          }
        >

          
          {search !== true ? (
           <MdSearch id="searchBtn"  className={
            search === true
              ? "search-icon fadeOut"
              : search === false
              ? "search-icon fadeIn"
              : "search-icon"
          }  onClick={toggle} />
          ) : (
            <MdClose className={
                search === true
                  ? "close-icon fadeOut"
                  : search === false
                  ? "close-icon fadeIn"
                  : "close-icon"
              }  onClick={SecondToggle}/>
          )} 
                    {/* {search !== true && (
           <MdSearch id="searchBtn"  className={
            search === true
              ? "search-icon fadeOut"
              : search === false
              ? "search-icon fadeIn"
              : "search-icon"
          }  onClick={toggle} />
          
          )} */}
        </div>
      </div>
    </div>
  )
}

export default Search
