import React,{useState,useEffect} from 'react';
import { PulseSpinner } from "react-spinners-kit";
import './App.css';
import Recipe from './Recipe';
import NotFound from './NotFound'


const App= () => {

  const API_ID="21fb0057";
  const API_KEY="4f9aee0b538230fa85eb3a5af2524bb4";

  const[recipes,setRecipes]=useState([]);
  const[searchBar,setSearchBar]=useState("");
  const [query,setQuery]=useState("chicken");
  const [loading,setLoading]=useState("true");

  useEffect( ()=>{
   fetchRecipes();
  },[query]);

  const onSearch=(e)=>{
    setSearchBar(e.target.value);
  };

  const fetchRecipes= async()=>{
    const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data=await response.json();
    setLoading("false");
    setRecipes(data.hits);
  };
  const updateSearch=(e)=>{
    e.preventDefault();
    setLoading("true")
    setQuery(searchBar);
  }
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  return (
    loading ==="true"?( <div style={style}><PulseSpinner
      size={80}
      color="white"
      loading={loading}
    /></div>):
    <div className="App">
      <form onSubmit={updateSearch} className="search-form">
         <input className="search-bar" type="text" onChange={onSearch} placeHolder="Search for ingredients"/>
         <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipe">
        {recipes.length?
         recipes.map(recipe =>(
              <Recipe title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              dietLabels={recipe.recipe.dietLabels}/>
         ))
      : <NotFound></NotFound>}
      </div>
    </div>
  

  )
}
export default App;
