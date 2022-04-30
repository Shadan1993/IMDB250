import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Sliders from "../header/slider/Sliders";
import Register from "../register/Register";
import axios from "axios";
const Header = () => {
  const [regPopup,setRegPopUp] = useState(false);
  // const [inputValue, setInputValue] = useState({
  //  searchMovie:""
  // });

  // const { searchMovie } = inputValue;
  // const [dataMovies, setDataMovies] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`http://moviesapi.ir/api/v1/movies?q=${searchMovie}&page={page}`)
  //     .then((response) => {
  //       console.log(response,'search');
  //       setDataMovies(response.data.data);

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
     <>
        <div className="container-fluid ">
          <div className="row justify-content-center ">
            <div className="col-md-3 col-sm-12  my-5  ">
              <h4 className="mx-5">برترین فیلم های IMDB </h4>
            </div>
            <div className="col-md-4 col-sm-12 my-5 ">
              <div class="input-group">
                <div class="input-group-text" id="btnGroupAddon">
                  @
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder=" جستجو  براساس نام فیلم"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </div>
            </div>
            <div className="col-md-3  col-sm-12 mx-5 my-5 mb-2 text-center bg-transparent">
              <button
                type="button"
                class="btn btn-light mx-2 mb-2 bg-transparent border-0"
                
              >
             <Link to={'/Register'}> ثبت نام </Link>
            
              </button>
              <button
                type="button"
                class="btn btn-light mb-2 bg-transparent border-0 "
              >
               <Link to={'/Login'}> ورود</Link>
              </button>
            </div>
          </div>
          <div className="row justify-content-center border-top border-bottom">
            <Sliders />
          </div>
        </div>
      </>
      
     
  );
};

export default Header;
