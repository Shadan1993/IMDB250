import { useContext } from "react";
import moviesContext from "../../Contaxt/movies";

const Menu = () => {
  const dataa = useContext(moviesContext);
  // console.log(dataa.genres, "menu");
  return (
    <>
      <h5 className="text-center mt-3 bg-transparent">ژانر</h5>
      <ul className="list-group list-group-flush text-center m-3 bg-transparent">
        {dataa.genres.map((items) => (
          <li className="list-group-item bg-transparent" key={items.id}>
            <a className="bg-transparent" href="#">
              {items.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
