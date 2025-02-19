import React from "react";
import { useState } from "react";

function Form (props) {

  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

 const handleSubmit = (event) => {
  // Prevent page from refreshing on form submission
  event.preventDefault();
  // Pass the search term to moviesearch prop, which is App's getMovie function
  props.movieSearch(formData.searchTerm);
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="searchTerm" 
        onChange={handleChange} 
        value={formData.searchTerm} 
        />
        <input type="submit" value="submit" />
       </form>
    </div>
  );
}
export default Form