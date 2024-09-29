// import React, { useState } from "react"

// import { Nav, Form } from "react-bootstrap"
// import useOnclickOutside from "react-cool-onclickoutside"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faSearch } from "@fortawesome/free-solid-svg-icons"
// import  "../components/ThirdSearchBar.css";
// import { getAllItems } from "../services/api";
// import {  useEffect } from "react";
// import {MdSearch,MdClose} from "react-icons/md"
// const Search = () => {
//   const [searchStatus, setSearchStatus] = useState()
//   const [existingItems, setExistingItems] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");
// //   const [searchStatus, setSearchStatus] = useState();
//   const [matchingItems, setMatchingItems] = useState([]);

//   useEffect(() => {
//     getAllItems().then(
//         res => {
//             const items = res.data.map(item => {
//                 return ({...item})
//             });
//             setExistingItems(items);
            
//         }
//     );
// }, []);


// const handleFilter = (event) => {
// const searchWord = event.target.value;
// setWordEntered(searchWord);
// const newFilter = existingItems.filter((value) => {
//   return value.title.toLowerCase().includes(searchWord.toLowerCase());
// });

// if (searchWord === "") {
//   setFilteredData([]);
// } else {
//   setFilteredData(newFilter);
// }
// };

// const clearInput = () => {
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
//     // var searchButton =document


// }

//   const closeSearch = () => (searchStatus === true ? setSearchStatus(false) : null)

//   const ref = useOnclickOutside(() => {
//     // closeSearch()
//     // clearInput()
//     // filteredData.length=0;

//   })

 
//   const haha = () => {
//     setSearchStatus(false)
//   }



//   return (
//      <div className="my-auto" ref={ref} onKeyPress={handleKeyPress}>
//      <div className="my-auto" >

//        <div
//          className={
//              searchStatus === false
//              ? " fadeOutWidth"
//              : searchStatus === true
//              ? "searchbar fadeInWidth"
//              : "searchbar"
//          }
//        >
//         {searchStatus === true && (
//           <input
//              // ref={ref}
//              className={
//                  searchStatus === true
//                  ? "search-input fadeIn"
//                  : searchStatus === false
//                ? "search-input fadeOut"
//                 : "search-input"
//             }
//          type="text"
//             name=""
//      value={wordEntered}
//      onChange={handleFilter}
//              placeholder="Search..."
//            />
//          //     {/* <MdClose id="clearBtn"  /> */}
//          //   {/* </input> */}
//         )}
//          <div
//            className={
//              searchStatus === true
//                ? "icon-clo fadeOut"
//               : searchStatus === false
//               ? "icon-bg fadeIn"
//               : "icon-bg"
//           }
//          >
 
          
//           {((searchStatus !== true)&& (filteredData.length === 0) ) ? (
//             <MdSearch id="searchBtn"  className={
//             searchStatus === true
//               ? "search-icon fadeOut"
//               : searchStatus === false
//                ? "search-icon fadeIn"
//            : "search-icon"
//            }  onClick={toggle} />
//            ) : (
//              <MdClose onClick={clearInput} className={
//                  searchStatus === true
//                   ? "close-icon fadeOut"
//                    : searchStatus === false
//                ? "close-icon fadeIn"
//                   : "close-icon"
//               }  />
//           )} 

//                     {/* {search !== true && (
//            <MdSearch id="searchBtn"  className={
//             search === true
//               ? "search-icon fadeOut"
//               : search === false
//               ? "search-icon fadeIn"
//               : "search-icon"
//           }  onClick={toggle} />
          
//           )} */}
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
//      </div>
// </div>
 
//   )
// }

// export default Search
