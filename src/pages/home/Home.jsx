import Footer from "../../components/Footer/Footer";
import Header from "./../../components/header/header";
import Main from "./../../components/main/Main";
import Menu from "./../../components/menu/Menu";

const Home = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <Header />
        </div>
        <div class="row">
          <div className="col-md-3 col-sm-12">
            <Menu />
          </div>
          <div className="col-md-9 col-sm-12">
            <Main />
          </div>
        </div>
        <div className="row">
            <Footer/>
        </div>
      </div>
    </>
  );
};

export default Home;
