import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";


function App() {
  const apikey = "55a8fc88";
  const [ movie, setMovie ] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async (searchTerm) => {
    try {
      setIsLoading(true)
    //Fetch request with search term

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apikey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
    setIsLoading(false)
  } catch (error) {
    setIsLoading(false)
    console.log(error)
  }
  };

  useEffect(()=>{
    getMovies("shrek")
  },[])

  return (
    <div className="App">
      <h1>React Movie App</h1>
      <Form movieSearch={getMovies} />
      <MovieDisplay movie={movie} isLoading={isLoading}/>
    </div>
  );
}

export default App;
