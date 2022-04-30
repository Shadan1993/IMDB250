import { Carousel } from "react-bootstrap";
import Img1 from "../../../img/1.jpg";
import Img2 from "../../../img/2.jpg";
import Img3 from "../../../img/3.jpg";
const Sliders = () => {
  return (
    <>
      <Carousel
        className="bg-transparent mt-3 mb-3"
        indicators={false}
        nextIcon={null}
        nextLabel={null}
        prevIcon={null}
        prevLabel={null}
      >
        <Carousel.Item className="bg-transparent">
          <img
            className="d-block w-100 "
            style={{ height: "250px" }}
            src={Img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="bg-transparent">
          <img
            className="d-block w-100 "
            style={{ height: "250px" }}
            src={Img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="bg-transparent">
          <img
            className="d-block w-100 "
            style={{ height: "250px" }}
            src={Img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Sliders;
