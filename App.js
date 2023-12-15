



 
import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

const SearchBar = () => {
  const initialItems = [
  'sukanya',
   'Anil',
    'Amritha',
    'Arun',
    'Samuel',
   'San',
  ];

  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Filter the items based on the search term
    const filteredItems = initialItems.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setItems(filteredItems);
  };

  return (
    <div>
      <h1>Search Bar Example</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
// const array=[
//   "sukanya","sneha","Amritha"
// ];
// const InputTextField=()=>{
//   const initialItems=["Sukanya","Amritha","Lisa","lina"];
//   const[inputField,setinputfield]=useState(initialItems);
//   const[searchTerm,setsearchTerm]=useState("");

//   const handleSearch = (e) => {
//     setsearchTerm(e.target.value);
//   };
//   const filteredItems=()=>{
//     inputField.filter((items)=>{
//     inputField.tolowercase().includes(searchTerm.toLowerCase());
//     })
//     setinputfield(filteredItems);

//   }
//   return (
//     <div>
//       <h1>Search Filter Example</h1>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul>
//         {inputField.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//   export default InputTextField;




