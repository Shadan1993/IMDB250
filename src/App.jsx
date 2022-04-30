import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import moviesContext from "./Contaxt/movies";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import MoviesRegister from "./pages/moviesRegister/MoviesRegister";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Prev } from "react-bootstrap/esm/PageItem";

const App = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [errorApi, setErrorApi] = useState([]);
  const [genres, setGenres] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  // const urlApi = "http://moviesapi.ir/api/v1/movies?page=";

  useEffect(() => {
    if (!isFetching) {
      DataMovieGet(countPage);
      DataGenresGet();
    }
    setIsFetching(false);
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [isFetching]);

  const DataMovieGet = useCallback(
    async (countp) => {
      if (countPage < 26) {
        try {
          axios
            .get(`http://moviesapi.ir/api/v1/movies?page=${countp}`)
            .then((response) => {
              console.log(response.data.data, "dataApi test");
              // setDataMovies([...dataMovies, ...response.data.data]);
              console.log(response.data.data);
              setDataMovies((Prev) => [...Prev, ...response.data.data]);
              // infiniteScroll(countPage);
              // setCountPage(countPage++)
            });
        } catch (err) {
          setErrorApi(err);
          console.log(errorApi, "errorApi");
        }
      }
    },
    [countPage]
  );

  // function DataMovieGet(countp) {

  // }
  async function DataGenresGet() {
    await axios
      .get("http://moviesapi.ir/api/v1/genres")
      .then((response) => {
        console.log(response, "genres");
        setGenres(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function infiniteScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 20 &&
      countPage <= 25
    ) {
      // return;
      // let coun = countPage + 1;
      setCountPage(countPage + 1);
      console.log(countPage, "it is testing scroll");
      setIsFetching(true);
    }
  }
  return (
    <>
      <Router>
        <moviesContext.Provider
          value={{ genres: genres, dataMovie: dataMovies }}
        >
          <div className="container-fluid">
            <Routes>
              <Route path="/home" element={<Navigate replace to="/" />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="/MoviesRegister" element={<MoviesRegister />} />
              <Route path="usePanel" element={<usePanel />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </moviesContext.Provider>
      </Router>
    </>
  );
};

export default App;
