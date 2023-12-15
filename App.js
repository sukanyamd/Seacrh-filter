// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// const TemperatureComponent=()=>{
// const[temperature,settemperature]=useState(0);
// const incrementTemperature = () => {
//   settemperature(temperature + 1);
// };

// const decrementTemperature = () => {
//   settemperature(temperature - 1);
// };

// const backgroundcolor=()=>{
//   if(temperature>30){
//     return 'red';
//   }
//   else if(temperature<=30){
//   return 'blue';
// }
// else{
//   return 'green';
// }
// }

// const temperatureStyle = {
//   backgroundColor: backgroundcolor(),
 
// };




  // return (
//     <div style={temperatureStyle}>
//       <h2><center>{temperature}</center></h2>
//       <center><button onClick={incrementTemperature}>Increment</button>
//       <button onClick={decrementTemperature}>Decrement</button></center>
      
//     </div>
//   );
// }

// export default TemperatureComponent;
import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

const SearchBar = () => {
  const initialItems = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Lemon',
    'Orange',
    'Peach',
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




