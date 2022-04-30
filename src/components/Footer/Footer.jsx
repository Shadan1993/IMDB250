const Footer = () => {
  return (
    <>
      <div
        className="container mt-3"
        style={{ backgroundColor: "#343542", color: "#b5b5b5" }}
      >
        <div
          className="row"
          style={{ backgroundColor: "#343542", color: "#b5b5b5" }}
        >
          <div className="col-md-4 bg-transparent">
            <h5 className="bg-transparent m-3 text-center ">درباره ما</h5>
            <p className="bg-transparent">
              این وب سایت توسط
              <strong className=" bg-transparent ">
                <a
                  className="bg-transparent "
                  href="http://naserazadbakht.ir/"
                  target={"_blank"}
                  style={{ backgroundColor: "#343542", color: "#b5b5b5" }}
                >
                  {" "}
                  ناصر آزادبخت
                </a>
              </strong>
              &nbsp; برای نمونه کار طراحی شده است &nbsp; که Api آن بصورت رایگان
              توسط سایت &nbsp;
              <strong className=" bg-transparent ">
                <a
                  className="bg-transparent "
                  href="http://moviesapi.ir/"
                  target={"_blank"}
                  style={{ backgroundColor: "#343542", color: "#b5b5b5" }}
                >
                  لینک
                </a>
              </strong>
              &nbsp; معرفی شده است. ممنون از شما که از سایت ما بازدید کردید
            </p>
          </div>
          <div className="col-md-4 bg-transparent mt-5">
            <p className="bg-transparent text-center mt-4">
              بهترین فیلم های IMDB
            </p>
          </div>
          <div className="col-md-4 bg-transparent mt-5">
            <div className=" bg-transparent text-center mt-4">
              <a
                href="mailto:naserazt27@gmail.com.com?subject="
                className="bg-transparent m-3"
                title="ارتباط از طریق ایمیل"
              >
                <i
                  class="fa-solid fa-envelope fa-xl"
                  style={{ backgroundColor: "transparent", color: "#b5b5b5" }}
                ></i>
              </a>
              <a href="twitter" className="bg-transparent m-3" title="twitter">
                <i
                  class="fa-brands fa-twitter fa-xl"
                  style={{ backgroundColor: "transparent", color: "#b5b5b5" }}
                ></i>
              </a>
              <a
                href="facebook"
                className="bg-transparent m-3"
                title="facebook"
              >
                <i
                  class="fa-brands fa-facebook fa-xl"
                  style={{ backgroundColor: "transparent", color: "#b5b5b5" }}
                ></i>
              </a>
              <a
                href="telegram"
                className="bg-transparent m-3"
                title="ارتباط از طریق تلگرام"
              >
                <i
                  class="fa-brands fa-telegram fa-xl"
                  style={{ backgroundColor: "transparent", color: "#b5b5b5" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
